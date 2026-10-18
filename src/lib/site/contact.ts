import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name should be at least 2 characters.").max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .max(120, "Email is too long.")
    .regex(emailPattern, "Enter a valid email address."),
  subject: z.string().trim().min(3, "Add a short subject.").max(140, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(4000, "Message is too long."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type DeliverResult =
  | { status: "sent" }
  | { status: "unconfigured" }
  | { status: "invalid"; message: string }
  | { status: "error"; message: string };

function parseWebhook(raw: string): URL | null {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    host === "0.0.0.0" ||
    host === "::1"
  ) {
    return null;
  }
  const ipv4 = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (ipv4) {
    const parts = ipv4.slice(1).map(Number);
    if (parts.some((part) => part > 255)) return null;
    const a = parts[0] ?? 0;
    const b = parts[1] ?? 0;
    if (
      a === 10 ||
      a === 127 ||
      a === 0 ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168)
    ) {
      return null;
    }
  }
  return url;
}

export const deliverContact = createServerFn({ method: "POST" })
  .validator((input: ContactInput) => contactSchema.parse(input))
  .handler(async ({ data }): Promise<DeliverResult> => {
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      return { status: "invalid", message: "Please check the form and try again." };
    }

    const raw = process.env.CONTACT_WEBHOOK_URL?.trim();
    if (!raw) return { status: "unconfigured" };

    const url = parseWebhook(raw);
    if (!url) {
      return { status: "error", message: "The mail service address isn't usable." };
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) {
        return { status: "error", message: "The mail service rejected the message. Nothing was delivered." };
      }
      return { status: "sent" };
    } catch {
      return { status: "error", message: "The mail service could not be reached. Nothing was delivered." };
    }
  });
