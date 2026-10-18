import { visibleTimeline } from "@/lib/site/profile";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";

const kindLabel = {
  work: "Work",
  education: "Education",
  project: "Project",
  milestone: "Milestone",
} as const;

export function Experience() {
  const entries = visibleTimeline();

  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading index="04 — Journey" title="Experience" lede="Education, roles, and milestones." />
      </Reveal>
      {entries.length === 0 ? (
        <div className="mt-12 max-w-2xl rounded-card border border-border bg-elevated p-6 md:p-8">
          <h3 className="font-serif text-3xl text-foreground">The timeline is open.</h3>
          <p className="mt-4 text-sm text-muted md:text-base">
            Nothing is listed yet. Roles, studies, and milestones you add will appear here, in the order you write them. Empty entries stay hidden — this space will not invent a history.
          </p>
        </div>
      ) : (
        <ol className="mt-12 border-l border-border">
          {entries.map((entry) => (
            <li key={entry.id} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-1 size-2 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-xs font-medium uppercase tracking-label text-subtle">
                {kindLabel[entry.kind]}
                <span className="tabular-nums">
                  {" "}
                  · {entry.start}
                  {entry.end.trim() ? ` — ${entry.end}` : ""}
                </span>
              </p>
              <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">{entry.title}</h3>
              {entry.organization.trim() ? <p className="mt-1 text-sm text-muted">{entry.organization}</p> : null}
              <p className="mt-3 max-w-2xl text-sm text-foreground md:text-base">{entry.description}</p>
              {entry.skills.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}
