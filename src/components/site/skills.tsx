import { skillGroups } from "@/lib/site/profile";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { TechMark } from "@/components/site/tech-mark";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          index="03 — Skills"
          title="Skills & technologies"
          lede="A working inventory, not a scorecard. Names only — no made-up percentages."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className={cn(
              "rounded-card border border-border bg-elevated p-6",
              group.span === "half" ? "xl:col-span-3" : "xl:col-span-2",
            )}
          >
            <h3 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">{group.title}</h3>
            <p className="mt-3 text-sm text-muted">{group.note}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center gap-3 text-sm text-foreground">
                  <TechMark name={item.mark} label={item.name} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
