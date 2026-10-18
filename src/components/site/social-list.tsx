import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import { socialLinks } from "@/lib/site/profile";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export function SocialList({ className }: { className?: string }) {
  const links = socialLinks();
  if (links.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {links.map((item) => {
        const Icon = icons[item.id] ?? Github;
        return (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={item.label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-150 hover:bg-elevated"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
