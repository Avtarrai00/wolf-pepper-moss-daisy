import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-label text-subtle">{index}</p>
      <h2 className="mt-3 text-headline text-foreground">{title}</h2>
      {lede ? <p className="mt-4 max-w-xl text-base text-muted md:text-lg">{lede}</p> : null}
    </div>
  );
}
