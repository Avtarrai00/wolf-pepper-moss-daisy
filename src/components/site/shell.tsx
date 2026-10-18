import { useEffect, useRef, type ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      node.style.transform = `scaleX(${progress})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-x-0 top-0 z-30 h-px origin-left scale-x-0 bg-accent"
    />
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#content" className="skip-link no-print">
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="content">{children}</main>
      <Footer />
    </MotionConfig>
  );
}
