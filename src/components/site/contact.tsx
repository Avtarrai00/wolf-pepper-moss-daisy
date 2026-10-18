import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { contactSchema, deliverContact, type ContactInput } from "@/lib/site/contact";
import { contactNote, mailLink, profile, socialLinks } from "@/lib/site/profile";
import { SocialList } from "@/components/site/social-list";
import { Section } from "@/components/site/section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "unconfigured" }
  | { type: "sent" }
  | { type: "error"; message: string };

const empty: ContactInput = { name: "", email: "", subject: "", message: "" };

function fieldErrors(error: { issues: { path: PropertyKey[]; message: string }[] }) {
  const next: Partial<Record<keyof ContactInput, string>> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if ((key === "name" || key === "email" || key === "subject" || key === "message") && !next[key]) {
      next[key] = issue.message;
    }
  }
  return next;
}

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [emailCopy, setEmailCopy] = useState("");
  const [noteCopy, setNoteCopy] = useState("");
  const email = profile.email.trim();
  const directMail = mailLink();

  async function copyText(text: string, setMessage: (value: string) => void) {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Copied.");
    } catch {
      setMessage("Couldn't copy. Select the text and copy it manually.");
    }
    window.setTimeout(() => setMessage(""), 2200);
  }

  function update(key: keyof ContactInput, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSummary("");
    setNoteCopy("");
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next = fieldErrors(parsed.error);
      setErrors(next);
      setSummary("Please fix the highlighted fields.");
      setStatus({ type: "idle" });
      const form = document.getElementById("contact-form");
      if (form && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        form.classList.remove("shake");
        void form.offsetWidth;
        form.classList.add("shake");
      }
      const first = (["name", "email", "subject", "message"] as const).find((key) => next[key]);
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setStatus({ type: "sending" });
    try {
      const result = await deliverContact({ data: parsed.data });
      if (result.status === "sent") {
        setValues(empty);
        setErrors({});
        setStatus({ type: "sent" });
        return;
      }
      if (result.status === "unconfigured") {
        setStatus({ type: "unconfigured" });
        return;
      }
      setStatus({ type: "error", message: result.message });
    } catch {
      setStatus({ type: "error", message: "The message could not be sent. Nothing was delivered." });
    }
  }

  const note = contactNote(values);
  const composedMail = mailLink(values.subject, note);

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-label text-subtle">06 — Contact</p>
          <h2 className="mt-3 text-headline text-foreground">Have an interesting idea? Let's build something great.</h2>
          <p className="mt-5 max-w-md text-base text-muted">
            Write directly, or leave a note. A message is only marked sent when a mail service actually accepts it.
          </p>
          <p className="mt-6 text-sm text-subtle">Based in {profile.location}.</p>
          <div className="mt-8">
            {email && directMail ? (
              <div className="flex flex-wrap items-center gap-3">
                <a href={directMail} className="inline-flex min-h-11 items-center gap-2 text-foreground">
                  <Mail className="size-4" aria-hidden="true" />
                  {email}
                </a>
                <Button variant="outline" size="sm" onClick={() => copyText(email, setEmailCopy)}>
                  {emailCopy === "Copied." ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                  Copy email
                </Button>
              </div>
            ) : (
              <p className="text-sm text-muted">Email address not added yet.</p>
            )}
            {emailCopy ? (
              <p className="mt-2 text-sm text-subtle" role="status">
                {emailCopy}
              </p>
            ) : null}
          </div>
          <div className="mt-6">
            {socialLinks().length > 0 ? <SocialList /> : <p className="text-sm text-muted">Social profiles not added yet.</p>}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form id="contact-form" noValidate onSubmit={onSubmit} className="rounded-card border border-border bg-elevated p-6 md:p-8">
            <div className="grid gap-5">
              {summary ? (
                <p role="alert" className="text-sm text-danger">
                  {summary}
                </p>
              ) : null}
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(event) => update("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    onChange={(event) => update("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass}
                  />
                </Field>
              </div>
              <Field id="subject" label="Subject" error={errors.subject}>
                <input
                  id="subject"
                  name="subject"
                  autoComplete="off"
                  value={values.subject}
                  onChange={(event) => update("subject", event.target.value)}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={inputClass}
                />
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={(event) => update("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(inputClass, "min-h-36 resize-y py-3")}
                />
              </Field>

              <AnimatePresence mode="wait">
                {status.type === "unconfigured" ? (
                  <motion.div
                    key="unconfigured"
                    role="status"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-field border border-border bg-background p-4"
                  >
                    <p className="text-sm text-foreground">This note was not sent.</p>
                    <p className="mt-2 text-sm text-muted">
                      Automatic delivery isn't connected. Copy the message, or open it in your mail app if an address is listed.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="outline" onClick={() => copyText(note, setNoteCopy)}>
                        <Copy className="size-4" aria-hidden="true" />
                        Copy message
                      </Button>
                      {composedMail ? (
                        <a href={composedMail} className={buttonVariants()}>
                          Open mail app
                        </a>
                      ) : null}
                    </div>
                    {noteCopy ? <p className="mt-3 text-sm text-subtle">{noteCopy}</p> : null}
                  </motion.div>
                ) : null}
                {status.type === "sent" ? (
                  <motion.div
                    key="sent"
                    role="status"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-field border border-border bg-background p-4"
                  >
                    <p className="text-sm text-foreground">Message sent.</p>
                    <p className="mt-2 text-sm text-muted">It was accepted by the connected mail service.</p>
                    <Button className="mt-4" variant="outline" onClick={() => setStatus({ type: "idle" })}>
                      Write another
                    </Button>
                  </motion.div>
                ) : null}
                {status.type === "error" ? (
                  <p key="error" role="alert" className="text-sm text-danger">
                    {status.message}
                  </p>
                ) : null}
              </AnimatePresence>

              <div className="flex justify-end">
                <Button type="submit" variant="accent" disabled={status.type === "sending"} className="w-full sm:w-auto">
                  {status.type === "sending" ? "Sending…" : "Send message"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const inputClass =
  "h-11 w-full rounded-field border border-border bg-background px-3 text-base text-foreground placeholder:text-subtle disabled:opacity-50";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-muted">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
