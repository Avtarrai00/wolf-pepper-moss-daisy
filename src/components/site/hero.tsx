import { useEffect, useRef } from "react";
import { profile } from "@/lib/site/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const words = [
  { text: "Building", em: false },
  { text: "ideas", em: false },
  { text: "into", em: false },
  { text: "extraordinary", em: true },
  { text: "digital", em: false },
  { text: "experiences.", em: false },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--px", `${event.clientX - rect.left}px`);
      node.style.setProperty("--py", `${event.clientY - rect.top}px`);
    };
    node.addEventListener("pointermove", onMove, { passive: true });
    return () => node.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden pt-20 lg:min-h-screen lg:pt-28">
      <div className="pointer-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 md:px-8 lg:min-h-[calc(100vh-7rem)] lg:pb-12">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-3 py-1.5 text-sm text-muted">
              <span className="pulse-dot size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.availability}
            </p>
            <h1 className="mt-6 max-w-4xl text-display text-foreground">
              {words.map((word, index) => (
                <span key={word.text}>
                  <span className={cn("hero-word inline-block", word.em && "italic")} style={{ animationDelay: `${index * 40}ms` }}>
                    {word.text}
                  </span>
                  {index < words.length - 1 ? " " : null}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-md text-base text-muted md:text-lg">
              Creative developer, technology enthusiast, and problem solver. I like ambitious ideas, and I like turning them into products people can use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className={cn(buttonVariants(), "w-full sm:w-auto")}>
                Explore My Work
              </a>
              <a href="#contact" className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto")}>
                Let's Connect
              </a>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <dt className="text-subtle">Location</dt>
                <dd className="mt-1 text-foreground">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-subtle">Focus</dt>
                <dd className="mt-1 text-foreground">{profile.focus}</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="h-64 overflow-hidden rounded-card border border-border bg-elevated sm:h-80 lg:h-auto lg:frame-portrait">
              <img
                src={profile.portrait}
                alt={profile.portraitAlt}
                width={1100}
                height={1467}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <a href="#about" className="mt-12 inline-flex items-center gap-3 self-start text-xs font-medium uppercase tracking-label text-subtle">
          <span className="scroll-line" aria-hidden="true" />
          Scroll
        </a>
      </div>
    </section>
  );
}
