import { ArrowUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { navItems, profile } from "@/lib/site/profile";
import { SocialList } from "@/components/site/social-list";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl italic text-foreground">{profile.name}</p>
            <p className="mt-3 text-sm text-muted">Designed with curiosity</p>
            <SocialList className="mt-6" />
          </div>
          <nav className="grid grid-cols-2 gap-y-2 md:col-span-4" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.id} href={item.id === "top" ? "/#top" : `/#${item.id}`} className="min-h-11 py-2 text-sm text-muted hover:text-foreground">
                {item.label}
              </a>
            ))}
            <Link to="/resume" className="min-h-11 py-2 text-sm text-muted hover:text-foreground">
              Résumé
            </Link>
          </nav>
          <div className="md:col-span-3 md:text-right">
            <a href="#top" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground">
              <ArrowUp className="size-4" aria-hidden="true" />
              Back to top
            </a>
          </div>
        </div>
        <p className="mt-12 text-sm text-subtle">
          <span className="tabular-nums">© {year}</span> {profile.name}
        </p>
      </div>
    </footer>
  );
}
