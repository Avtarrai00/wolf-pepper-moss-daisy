import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { DownloadResume } from "@/components/site/download-resume";
import { Shell } from "@/components/site/shell";
import { Button, buttonVariants } from "@/components/ui/button";
import { profile, skillGroups, socialLinks, visibleTimeline } from "@/lib/site/profile";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé — Avtar Singh" },
      {
        name: "description",
        content: "Résumé for Avtar Singh, generated from the portfolio profile.",
      },
    ],
  }),
  component: ResumePage,
});

const kindLabel = {
  work: "Work",
  education: "Education",
  project: "Project",
  milestone: "Milestone",
} as const;

function ResumePage() {
  const entries = visibleTimeline();
  const links = socialLinks();

  return (
    <Shell>
      <article className="print-paper mx-auto w-full max-w-3xl px-5 pt-28 pb-20 md:px-8">
        <div className="no-print mb-8 flex flex-wrap gap-3">
          <Link to="/" className={buttonVariants({ variant: "outline" })}>
            Back home
          </Link>
          <DownloadResume label="Download text" />
          <Button
            variant="primary"
            onClick={() => {
              window.print();
            }}
          >
            <Printer className="size-4" aria-hidden="true" />
            Print or save PDF
          </Button>
        </div>
        <p className="no-print mb-8 text-sm text-muted">
          Generated from your profile. Sample skills are a starting inventory — edit them before sharing. Experience appears only after you add it.
        </p>
        <header>
          <h1 className="font-serif text-5xl text-foreground">{profile.name}</h1>
          <p className="mt-3 text-base text-muted">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-1 text-sm text-subtle">{profile.focus}</p>
          {profile.email.trim() ? <p className="mt-3 text-sm text-foreground">{profile.email.trim()}</p> : null}
          {links.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {links.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-foreground underline-offset-4 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </header>
        <section className="mt-10">
          <h2 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">Profile</h2>
          <p className="mt-3 text-base text-foreground">{profile.introduction}</p>
          <p className="mt-4 text-base text-foreground">{profile.philosophy}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">Tools and interests</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.id}>
                <h3 className="font-sans text-sm font-medium text-foreground">{group.title}</h3>
                <ul className="mt-2 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {entries.length > 0 ? (
          <section className="mt-10">
            <h2 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">Experience</h2>
            <ol className="mt-4 flex flex-col gap-6">
              {entries.map((entry) => (
                <li key={entry.id}>
                  <p className="text-xs uppercase tracking-label text-subtle">
                    {kindLabel[entry.kind]} · <span className="tabular-nums">{entry.start}{entry.end.trim() ? ` – ${entry.end}` : ""}</span>
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-foreground">{entry.title}</h3>
                  {entry.organization.trim() ? <p className="text-sm text-muted">{entry.organization}</p> : null}
                  <p className="mt-2 text-sm text-foreground">{entry.description}</p>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
      </article>
    </Shell>
  );
}
