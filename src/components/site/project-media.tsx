import { useEffect, useRef } from "react";
import type { Project } from "@/lib/site/profile";
import { cn } from "@/lib/utils";

function useSoftParallax(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!enabled || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const delta = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = Math.max(-16, Math.min(16, -delta * 0.03));
      node.style.transform = `translate3d(0, ${shift}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled]);

  return ref;
}

function Poster({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-between p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-label text-subtle">{project.category}</p>
      <div>
        <p className="font-serif text-5xl text-foreground md:text-6xl">{project.name}</p>
        <div className="my-4 h-px w-16 bg-accent" />
        <p className="max-w-xs text-sm text-muted">{project.summary}</p>
      </div>
    </div>
  );
}

export function ProjectMedia({
  project,
  priority = false,
  parallax = false,
  className,
}: {
  project: Project;
  priority?: boolean;
  parallax?: boolean;
  className?: string;
}) {
  const ref = useSoftParallax(parallax && Boolean(project.image));

  return (
    <div className={cn("frame-landscape overflow-hidden rounded-card border border-border bg-elevated", className)}>
      {project.image ? (
        <div ref={ref} className={parallax ? "parallax-bleed" : "h-full"}>
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={1067}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <Poster project={project} />
      )}
    </div>
  );
}
