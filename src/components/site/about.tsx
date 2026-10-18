import { Link } from "@tanstack/react-router";
import { highlights, profile } from "@/lib/site/profile";
import { DownloadResume } from "@/components/site/download-resume";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";
import { buttonVariants } from "@/components/ui/button";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <SectionHeading
              index="01 — About"
              title="About me"
              lede={profile.introduction}
            />
            <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-foreground md:text-3xl">{profile.philosophy}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">Interests</h3>
                <p className="mt-3 text-sm text-muted">{profile.interests}</p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-medium uppercase tracking-label text-subtle">Goals</h3>
                <p className="mt-3 text-sm text-muted">{profile.goals}</p>
              </div>
            </div>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item.title} className="rounded-card border border-border bg-elevated p-5">
                <h3 className="font-sans text-base font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <div className="lg:sticky lg:top-24">
            <div className="h-72 overflow-hidden rounded-card border border-border bg-elevated lg:h-auto lg:frame-portrait">
              <img
                src={profile.aboutImage}
                alt={profile.aboutImageAlt}
                width={1100}
                height={1467}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/resume" className={buttonVariants()}>
                View résumé
              </Link>
              <DownloadResume />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
