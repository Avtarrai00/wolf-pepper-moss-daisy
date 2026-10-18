import {
  siCss,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";

const marks: Record<string, { title: string; path: string }> = {
  typescript: siTypescript,
  react: siReact,
  html: siHtml5,
  css: siCss,
  tailwind: siTailwindcss,
  vite: siVite,
  node: siNodedotjs,
  postgres: siPostgresql,
  python: siPython,
  git: siGit,
  github: siGithub,
  figma: siFigma,
};

export function TechMark({ name, label }: { name?: string; label: string }) {
  const icon = name ? marks[name] : undefined;
  return (
    <span className="flex size-7 shrink-0 items-center justify-center text-muted" aria-hidden="true">
      {icon ? (
        <svg viewBox="0 0 24 24" className="size-4">
          <path d={icon.path} fill="currentColor" />
        </svg>
      ) : (
        <span className="flex size-7 items-center justify-center rounded-field border border-border text-xs text-foreground">
          {label.slice(0, 1)}
        </span>
      )}
    </span>
  );
}
