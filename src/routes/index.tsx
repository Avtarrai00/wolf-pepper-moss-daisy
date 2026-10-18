import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/experience";
import { Exploring } from "@/components/site/exploring";
import { Hero } from "@/components/site/hero";
import { Projects } from "@/components/site/projects";
import { Shell } from "@/components/site/shell";
import { Skills } from "@/components/site/skills";
import { personJsonLd } from "@/lib/site/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avtar Singh — Creative Developer" },
      {
        name: "description",
        content:
          "Avtar Singh is a creative developer in Ludhiana, building calm interfaces, useful software, and thoughtful digital experiences.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Exploring />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
    </Shell>
  );
}
