import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectMedia } from "@/components/site/project-media";
import { Shell } from "@/components/site/shell";
import { buttonVariants } from "@/components/ui/button";
import { adjacentProjects, getProject } from "@/lib/site/profile";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.project.name} — Avtar Singh` : "Work — Avtar Singh" },
      {
        name: "description",
        content: loaderData?.project.summary ?? "Project study by Avtar Singh.",
      },
    ],
  }),
  notFoundComponent: ProjectMissing,
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const { previous, next } = adjacentProjects(project.slug);

  return (
    <Shell>
      <article className="mx-auto w-full max-w-7xl px-5 pt-28 pb-20 md:px-8 md:pt-32">
        <a href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden="true" />
          All work
        </a>
        <p className="mt-8 text-xs font-medium uppercase tracking-label text-subtle">
          {project.category}
          {project.sample ? " · Sample study" : ""}
        </p>
        <h1 className="mt-3 max-w-4xl text-headline text-foreground">{project.name}</h1>
        <p className="mt-5 max-w-2xl font-serif text-2xl leading-snug text-foreground md:text-3xl">{project.summary}</p>
        {project.sample ? (
          <p className="mt-5 max-w-2xl text-sm text-muted">
            This is a sample study used to show the case-study layout. Links, outcomes, and claims stay empty until a real project replaces it.
          </p>
        ) : null}
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <div>
            <dt className="text-subtle">Role</dt>
            <dd className="mt-1 text-foreground">{project.role}</dd>
          </div>
          <div>
            <dt className="text-subtle">Year</dt>
            <dd className="mt-1 text-foreground">{project.yearLabel}</dd>
          </div>
        </dl>
        <div className="mt-10">
          <ProjectMedia project={project} priority />
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">Overview</h2>
            <p className="mt-4 text-base text-foreground">{project.overview}</p>
            <h2 className="mt-10 font-sans text-xs font-medium uppercase tracking-label text-subtle">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full border border-border px-3 py-1 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className={buttonVariants()}>
                  Live demo
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}
              {project.sourceUrl ? (
                <a href={project.sourceUrl} target="_blank" rel="noreferrer noopener" className={buttonVariants({ variant: "outline" })}>
                  Source
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
            {!project.liveUrl && !project.sourceUrl ? (
              <p className="mt-6 text-sm text-subtle">Live demo and source links aren't added for this study.</p>
            ) : null}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h2 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">Approach</h2>
            <ol className="mt-4 flex flex-col gap-5">
              {project.approach.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3">
                  <span className="tabular-nums text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-foreground md:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2" aria-label="More studies">
          {previous ? (
            <Link to="/work/$slug" params={{ slug: previous.slug }} className="rounded-card border border-border p-5 hover:bg-elevated">
              <p className="text-xs uppercase tracking-label text-subtle">Previous</p>
              <p className="mt-2 font-serif text-2xl text-foreground">{previous.name}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className={cn("rounded-card border border-border p-5 hover:bg-elevated sm:text-right", !previous && "sm:col-start-2")}
            >
              <p className="text-xs uppercase tracking-label text-subtle">Next</p>
              <p className="mt-2 font-serif text-2xl text-foreground">{next.name}</p>
            </Link>
          ) : null}
        </nav>
      </article>
    </Shell>
  );
}

function ProjectMissing() {
  return (
    <Shell>
      <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col justify-center px-5 pt-24">
        <p className="text-xs font-medium uppercase tracking-label text-subtle">Missing</p>
        <h1 className="mt-3 text-headline text-foreground">That study isn't on file.</h1>
        <p className="mt-4 max-w-md text-muted">The link may be old, or the project was removed from the profile.</p>
        <Link to="/" className={cn(buttonVariants(), "mt-8 w-fit")}>
          Back home
        </Link>
      </div>
    </Shell>
  );
}
