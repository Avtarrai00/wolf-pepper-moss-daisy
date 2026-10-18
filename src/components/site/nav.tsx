import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { navItems, profile } from "@/lib/site/profile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function sectionHref(id: string, onHome: boolean) {
  if (id === "top") return onHome ? "#top" : "/";
  return onHome ? `#${id}` : `/#${id}`;
}

function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      className={cn(buttonVariants({ variant: "outline", size: "icon" }), className)}
      onClick={() => {
        const root = document.documentElement;
        const nextLight = !root.classList.contains("light");
        root.classList.toggle("light", nextLight);
        root.style.backgroundColor = "";
        localStorage.setItem("as-theme", nextLight ? "light" : "dark");
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", nextLight ? "#f3f0e8" : "#0c0c0e");
      }}
    >
      <span className="light:hidden" aria-hidden="true">
        <SunIcon />
      </span>
      <span className="hidden light:inline" aria-hidden="true">
        <MoonIcon />
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 3.5v1.5M12 19v1.5M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3.5 12H5M19 12h1.5M4.9 19.1 6 18M18 6l1.1-1.1" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M16.5 13.2A6.2 6.2 0 0 1 10.8 5 6.4 6.4 0 1 0 16.5 13.2Z" strokeLinejoin="round" />
    </svg>
  );
}

export function Nav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const ids = ["about", "projects", "skills", "experience", "exploring", "contact"];
    let frame = 0;
    const update = () => {
      const marker = window.scrollY + 120;
      let current = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      if (current === "exploring") current = "experience";
      setActive((prev) => (prev === current ? prev : current));
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
  }, [onHome]);

  return (
    <header id="top" className="nav-bar no-print fixed inset-x-0 top-0 z-40" data-scrolled={scrolled ? "true" : "false"}>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-5 md:px-8">
        <Link to="/" className="font-serif text-xl italic tracking-tight text-foreground">
          <span className="sm:hidden">AS</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav className="ml-6 hidden items-center lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = onHome && (item.id === "top" ? active === "top" : active === item.id);
            return (
              <a
                key={item.id}
                href={sectionHref(item.id, onHome)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative inline-flex min-h-11 items-center px-3 text-sm transition-colors duration-150",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
                {isActive ? <span className="absolute inset-x-3 bottom-1.5 h-px bg-accent" /> : null}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <a href={sectionHref("contact", onHome)} className={cn(buttonVariants({ variant: "accent" }), "hidden lg:inline-flex")}>
            Let's Talk
          </a>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className={cn(buttonVariants({ variant: "outline", size: "icon" }), "lg:hidden")} aria-label="Open menu">
              <Menu className="size-4" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content className="menu-sheet fixed inset-0 z-50 overflow-y-auto bg-background outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto flex min-h-full w-full max-w-3xl flex-col"
                >
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="font-serif text-3xl text-foreground">Menu</Dialog.Title>
                    <Dialog.Close className={buttonVariants({ variant: "outline", size: "icon" })} aria-label="Close menu">
                      <X className="size-4" />
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="sr-only">Sections of the site.</Dialog.Description>
                  <nav className="mt-10 flex flex-col" aria-label="Mobile">
                    {navItems.map((item) => (
                      <Dialog.Close asChild key={item.id}>
                        <a
                          href={sectionHref(item.id, onHome)}
                          className="border-b border-border py-4 font-serif text-4xl text-foreground"
                        >
                          {item.label}
                        </a>
                      </Dialog.Close>
                    ))}
                  </nav>
                  <div className="mt-8 flex items-center gap-3">
                    <ThemeToggle />
                    <Dialog.Close asChild>
                      <a href={sectionHref("contact", onHome)} className={cn(buttonVariants({ variant: "accent" }), "flex-1")}>
                        Let's Talk
                      </a>
                    </Dialog.Close>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
