import { exploring } from "@/lib/site/profile";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";

export function Exploring() {
  return (
    <Section id="exploring">
      <Reveal>
        <SectionHeading
          index="05 — Now"
          title="Currently Exploring"
          lede="A snapshot of what has my attention. It changes when the work changes."
        />
      </Reveal>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {exploring.map((item) => (
          <li key={item.id} className="rounded-card border border-border bg-elevated p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">{item.label}</h3>
              <span className="inline-flex items-center gap-2 text-xs text-muted">
                <span className={cn("size-1.5 rounded-full bg-accent", item.pulse && "pulse-dot")} aria-hidden="true" />
                {item.status}
              </span>
            </div>
            <p className="mt-6 font-serif text-2xl text-foreground">{item.title}</p>
            <p className="mt-3 text-sm text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
