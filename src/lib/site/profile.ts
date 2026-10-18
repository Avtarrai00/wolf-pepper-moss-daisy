/**
 * Portfolio profile — the only file you need to edit for personal content.
 *
 * - Leave a string empty ("") to hide that link.
 * - Add timeline entries only for real roles, studies, and milestones.
 * - Projects below are labeled sample studies. Replace them; don't present them as client work.
 * - Contact delivery: set CONTACT_WEBHOOK_URL to an https endpoint that accepts
 *   JSON { name, email, subject, message }. Until then, the form will not say a message was sent.
 */

export type TimelineEntry = {
  id: string;
  kind: "work" | "education" | "project" | "milestone";
  title: string;
  organization: string;
  start: string;
  end: string;
  description: string;
  skills: string[];
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: "AI & Automation" | "Web Development" | "Creative Technology" | "Software & Tools";
  yearLabel: string;
  role: string;
  stack: string[];
  liveUrl: string | null;
  sourceUrl: string | null;
  image: string | null;
  imageAlt: string;
  sample: boolean;
  overview: string;
  approach: string[];
};

export type Skill = {
  name: string;
  mark?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  note: string;
  span: "half" | "third";
  items: Skill[];
};

export const profile = {
  name: "Avtar Singh",
  role: "Creative developer",
  location: "Ludhiana, Punjab",
  locality: "Ludhiana",
  region: "Punjab",
  countryCode: "IN",
  availability: "Available for select projects.",
  focus: "Thoughtful interfaces and useful software",
  email: "",
  socials: {
    linkedin: "",
    github: "",
    instagram: "",
  },
  portrait: "/media/hero.jpg",
  portraitAlt:
    "Charcoal plaster sculpture on a dark wooden plane, edged with a thin line of cool light.",
  aboutImage: "/media/about.jpg",
  aboutImageAlt: "Folded ivory paper and a black pencil on charcoal linen.",
  introduction:
    "I'm a curious builder passionate about technology, artificial intelligence, software, and creating meaningful digital experiences. I enjoy exploring ambitious ideas and transforming them into practical products.",
  philosophy:
    "Make the complicated feel calm. Prefer clarity over decoration, and build things a person can actually use.",
  interests:
    "Artificial intelligence used with care, interface design, and software that turns an ambitious idea into something practical.",
  goals: "A small number of projects, made properly — precise, useful, and distinctly mine.",
};

export const highlights = [
  {
    title: "Calm software",
    text: "Interfaces that stay quiet, even when the problem underneath is not.",
  },
  {
    title: "Useful first",
    text: "A beautiful thing that doesn't help anyone is still unfinished.",
  },
  {
    title: "AI, carefully",
    text: "Models are tools. Judgment stays with the person using them.",
  },
  {
    title: "Selective",
    text: "A few projects, done with attention, rather than everything at once.",
  },
];

export const projects: Project[] = [
  {
    slug: "lumen",
    name: "Lumen",
    summary: "A writing room that waits to be asked.",
    description:
      "Sample study of an AI-assisted notebook. The page is a single column. Suggestions stay folded until invited, and the draft remains the point.",
    category: "AI & Automation",
    yearLabel: "Sample",
    role: "Concept study",
    stack: ["TypeScript", "React", "Language models"],
    liveUrl: null,
    sourceUrl: null,
    image: "/media/lumen.jpg",
    imageAlt: "A closed notebook and a blank sheet of paper on a dark wooden desk.",
    sample: true,
    overview:
      "Lumen is a sample study about writing with a model nearby, not a model in charge. The interface is a page, a margin, and a way to ask for help without losing the sentence you were in.",
    approach: [
      "Keep the draft visually primary. Assistance opens from the margin, never over the text.",
      "Suggestions arrive only when asked, and they can be dismissed without a trace.",
      "The type, measure, and spacing are the product. Chrome stays out of the way.",
    ],
  },
  {
    slug: "northline",
    name: "Northline",
    summary: "A storefront with the pace of a magazine.",
    description:
      "Sample study of an editorial shop: large type, few products per view, and a checkout that doesn't raise its voice.",
    category: "Web Development",
    yearLabel: "Sample",
    role: "Concept study",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    liveUrl: null,
    sourceUrl: null,
    image: "/media/northline.jpg",
    imageAlt: "Empty concrete gallery corridor lit by a single skylight, with a pale wooden bench.",
    sample: true,
    overview:
      "Northline is a sample study in pacing. A shop can borrow the quiet of a gallery: one object, enough air around it, and a next step that doesn't shout.",
    approach: [
      "One product occupies the view. Related pieces wait further down the page.",
      "Type does more work than badges, stickers, or countdown timers.",
      "Checkout is a short, linear path with no surprise additions.",
    ],
  },
  {
    slug: "fieldglass",
    name: "Fieldglass",
    summary: "Notes for people who work far from a desk.",
    description:
      "Sample study of an offline-first field notebook. Capture is fast, sync is later, and the screen stays readable in hard light.",
    category: "Software & Tools",
    yearLabel: "Sample",
    role: "Concept study",
    stack: ["TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: null,
    sourceUrl: null,
    image: "/media/fieldglass.jpg",
    imageAlt: "A brass loupe and folded notes arranged on dark cloth.",
    sample: true,
    overview:
      "Fieldglass is a sample study of capture without a connection. The interesting problem is not a dashboard. It is a note taken in a hurry that still makes sense later.",
    approach: [
      "Writing, a photo, or a short voice note — each is one gesture.",
      "The app assumes the network is absent and reconciles when it returns.",
      "Contrast and type size are chosen for sunlight, not for a dark office.",
    ],
  },
  {
    slug: "orbit",
    name: "Orbit",
    summary: "A light study driven by presence, not a dashboard.",
    description:
      "Sample study for a room-scale installation. Movement changes a single ring of light. There is no control panel in the room.",
    category: "Creative Technology",
    yearLabel: "Sample",
    role: "Concept study",
    stack: ["Sensors", "Light", "Python"],
    liveUrl: null,
    sourceUrl: null,
    image: "/media/orbit.jpg",
    imageAlt: "A thin ring of cool light suspended in a dark room.",
    sample: true,
    overview:
      "Orbit is a sample study in restraint. One ring, one behavior, no interface in the space itself. The work should be felt before it is explained.",
    approach: [
      "Presence changes brightness and radius. Nothing else moves.",
      "There is no screen in the room. Any tuning happens elsewhere.",
      "The light is cool and thin, closer to a drawing than a spectacle.",
    ],
  },
  {
    slug: "harbor",
    name: "Harbor",
    summary: "A reading surface with nothing to configure.",
    description:
      "Sample study of a reading app. Type, measure, and margin do the work. No streaks, no badges, no feed.",
    category: "Web Development",
    yearLabel: "Sample",
    role: "Concept study",
    stack: ["TypeScript", "React", "Typography"],
    liveUrl: null,
    sourceUrl: null,
    image: null,
    imageAlt: "",
    sample: true,
    overview:
      "Harbor is a sample study of a reading surface that refuses to become a platform. If the type is right, most settings are noise.",
    approach: [
      "A small serif, a comfortable measure, and margins that survive a phone.",
      "Progress is a quiet mark, not a streak or a score.",
      "There is no feed. The book you opened is the whole screen.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend development",
    note: "The languages and libraries I reach for when building an interface.",
    span: "half",
    items: [
      { name: "TypeScript", mark: "typescript" },
      { name: "React", mark: "react" },
      { name: "HTML", mark: "html" },
      { name: "CSS", mark: "css" },
      { name: "Tailwind CSS", mark: "tailwind" },
      { name: "Vite", mark: "vite" },
    ],
  },
  {
    id: "backend",
    title: "Backend development",
    note: "Enough server-side craft to make a product real.",
    span: "half",
    items: [
      { name: "Node.js", mark: "node" },
      { name: "PostgreSQL", mark: "postgres" },
    ],
  },
  {
    id: "ai",
    title: "AI & machine learning",
    note: "Interests, not a scored résumé. No percentages, on purpose.",
    span: "third",
    items: [{ name: "Python", mark: "python" }, { name: "Language models" }, { name: "Automation" }],
  },
  {
    id: "tools",
    title: "Tools & platforms",
    note: "The everyday kit around the work.",
    span: "third",
    items: [
      { name: "Git", mark: "git" },
      { name: "GitHub", mark: "github" },
      { name: "Command line" },
    ],
  },
  {
    id: "design",
    title: "Design & creative tools",
    note: "How an interface gets its tone before it gets its code.",
    span: "third",
    items: [{ name: "Figma", mark: "figma" }, { name: "Typography" }, { name: "Editorial layout" }],
  },
];

export const timeline: TimelineEntry[] = [
  // Add only real entries. Empty title or description is hidden.
  // {
  //   id: "example",
  //   kind: "work",
  //   title: "Role",
  //   organization: "Place",
  //   start: "2024",
  //   end: "Present",
  //   description: "What you actually did.",
  //   skills: ["TypeScript"],
  // },
];

export const exploring = [
  {
    id: "learning",
    label: "Learning",
    status: "Now",
    pulse: true,
    title: "Careful use of language models",
    text: "How to let a model assist the work without flattening the judgment in it.",
  },
  {
    id: "building",
    label: "Building",
    status: "Now",
    pulse: true,
    title: "Small, useful software",
    text: "Tools and interfaces that remove a real friction, then get out of the way.",
  },
  {
    id: "experimenting",
    label: "Experimenting",
    status: "Lab",
    pulse: false,
    title: "Type, motion, and tone",
    text: "Editorial layout, quiet motion, and interfaces that still feel considered on a phone.",
  },
  {
    id: "goals",
    label: "Goal",
    status: "Aim",
    pulse: false,
    title: "A sharper body of work",
    text: "Fewer pieces, each one specific. This space updates when the work is real.",
  },
];

export const navItems = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export function socialLinks() {
  const items = [
    { id: "linkedin" as const, label: "LinkedIn", href: profile.socials.linkedin },
    { id: "github" as const, label: "GitHub", href: profile.socials.github },
    { id: "instagram" as const, label: "Instagram", href: profile.socials.instagram },
  ];
  return items.filter((item) => item.href.trim().length > 0);
}

export function visibleTimeline() {
  return timeline.filter((entry) => entry.title.trim() && entry.description.trim());
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function adjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}

export function mailLink(subject?: string, body?: string) {
  const email = profile.email.trim();
  if (!email) return null;
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ""}`;
}

export function contactNote(input: { name: string; email: string; subject: string; message: string }) {
  return [`Name: ${input.name}`, `Email: ${input.email}`, `Subject: ${input.subject}`, "", input.message].join(
    "\n",
  );
}

export function resumePlainText() {
  const lines: Array<string | null> = [
    profile.name,
    profile.role,
    profile.location,
    profile.focus,
    profile.email.trim() || null,
    "",
    profile.introduction,
    "",
    "Philosophy",
    profile.philosophy,
    "",
    "Interests",
    profile.interests,
    "",
    "Goals",
    profile.goals,
    "",
    "Tools and interests",
  ];

  for (const group of skillGroups) {
    lines.push(group.title);
    for (const item of group.items) lines.push(`- ${item.name}`);
    lines.push("");
  }

  const entries = visibleTimeline();
  if (entries.length > 0) {
    lines.push("Experience");
    for (const entry of entries) {
      lines.push(`${entry.title} — ${entry.organization}`);
      lines.push(`${entry.start}${entry.end.trim() ? ` – ${entry.end}` : ""}`);
      lines.push(entry.description);
      if (entry.skills.length > 0) lines.push(entry.skills.join(", "));
      lines.push("");
    }
  }

  return lines.filter((line): line is string => Boolean(line) || line === "").join("\n");
}

export function personJsonLd() {
  const sameAs = socialLinks().map((item) => item.href);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.introduction,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.locality,
      addressRegion: profile.region,
      addressCountry: profile.countryCode,
    },
    knowsAbout: skillGroups.flatMap((group) => group.items.map((item) => item.name)),
    ...(profile.email.trim() ? { email: profile.email.trim() } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
