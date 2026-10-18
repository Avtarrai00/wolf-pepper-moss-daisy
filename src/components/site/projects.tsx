import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/site/profile";
import { ProjectMedia } from "@/components/site/project-media";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="py-10 md:py-14">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="group grid items-center gap-6 lg:grid-cols-12 lg:gap-10"
      >
        <div className={flip ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
          <ProjectMedia project={project} parallax priority={index === 0} />
        </div>
        <div className={flip ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
          <div className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-label text-subtle">
            <span>{project.category}</span>
            <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">{project.name}</h3>
          <p className="mt-4 max-w-md text-base text-muted">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-foreground">
            {project.sample ? "Sample study" : "View study"}
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </p>
        </div>
      </Link>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          index="02 — Work"
          title="Featured projects"
          lede="Sample studies, shown so the layout is ready. Replace them with your own work — nothing here is a client, a launch, or a metric."
        />
      </Reveal>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
