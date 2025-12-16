import React, { useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
  MapPin,
  Search,
  ArrowRight,
  Sparkles,
  Code2,
  Layers,
  Wrench,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiElectron,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiGithub,
  SiGit,
  SiVite,
  SiRedux,
  SiNextdotjs,
  SiDocker,
  SiMongodb,
  SiSupabase,
  SiPostman,
  SiNpm,
  SiMui,
} from "react-icons/si";


const BRAND = {
  name: "Okan Dodanli",
  title: "Front-End & Full-Stack Developer",
  location: "Toronto, ON",
  email: "ododanli1995@gmail.com",
  links: {
    github: "https://github.com/your-handle", // TODO: replace
    linkedin: "https://www.linkedin.com/in/your-handle", // TODO: replace
    resume: "/resume.pdf", // TODO: add to /public
  },
};

// Inline SVG fallbacks for icons that are not exported in some react-icons builds.
function AwsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="AWS"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FF9900"
        d="M6.5 9.2c-.3 0-.6.2-.7.5l-2 7.1c-.1.5.2 1 .7 1.1.5.1 1-.2 1.1-.7l.4-1.4h2.1l.4 1.4c.1.5.6.8 1.1.7.5-.1.8-.6.7-1.1l-2-7.1c-.1-.3-.4-.5-.7-.5Zm-.2 4.8.8-2.8.8 2.8H6.3Z"
      />
      <path
        fill="#FF9900"
        d="M12 9.2c.5 0 .9.4.9.9v4.2c0 .8.3 1.3 1 1.3.7 0 1.1-.5 1.1-1.3v-4.2c0-.5.4-.9.9-.9s.9.4.9.9v4.2c0 1.9-1.2 3-2.9 3-1.7 0-2.8-1.1-2.8-3v-4.2c0-.5.4-.9.9-.9Z"
      />
      <path
        fill="#FF9900"
        d="M20.2 10.8c-.5-.4-1.4-.7-2.2-.7-1.3 0-2.3.7-2.3 1.9 0 1 .7 1.5 1.8 1.7l.5.1c.5.1.8.2.8.5 0 .3-.3.5-.9.5-.6 0-1.3-.2-1.8-.6-.4-.3-.9-.2-1.2.2-.3.4-.2.9.2 1.2.7.6 1.8.9 2.8.9 1.5 0 2.7-.7 2.7-2 0-1.1-.8-1.6-2-1.9l-.5-.1c-.5-.1-.7-.2-.7-.4 0-.3.3-.5.7-.5.5 0 1.1.2 1.5.5.4.3.9.2 1.2-.2.3-.4.2-.9-.2-1.2Z"
      />
    </svg>
  );
}

function AzureIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Azure"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#0078D4"
        d="M3.6 18.8 9.7 4.3c.1-.2.3-.3.5-.3h6.2c.4 0 .6.4.4.8L12.4 14h5.6c.5 0 .7.6.3 1l-6.2 5.3c-.1.1-.2.1-.3.1H4.1c-.4 0-.7-.4-.5-.9Z"
      />
    </svg>
  );
}

function FramerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="Framer"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#000" d="M6 3h12v6H6V3Zm0 6h12l-6 6H6V9Zm6 6 6 6H6v-6h6Z" />
    </svg>
  );
}

// Map tech names to ORIGINAL brand icons (Simple Icons)
const TECH_ICONS: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 className="h-4 w-4 text-[#E34F26]" />,
  CSS: <SiCss3 className="h-4 w-4 text-[#1572B6]" />,
  JavaScript: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="h-4 w-4 text-[#3178C6]" />,
  React: <SiReact className="h-4 w-4 text-[#61DAFB]" />,
  "Tailwind CSS": <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
  Tailwind: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
  Electron: <SiElectron className="h-4 w-4 text-[#47848F]" />,
  Node: <SiNodedotjs className="h-4 w-4 text-[#339933]" />,
  NodeJS: <SiNodedotjs className="h-4 w-4 text-[#339933]" />,
  Express: <SiExpress className="h-4 w-4 text-black" />,
  Postgres: <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
  PostgreSQL: <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
  Python: <SiPython className="h-4 w-4 text-[#3776AB]" />,
  Redux: <SiRedux className="h-4 w-4 text-[#764ABC]" />,
  NextJS: <SiNextdotjs className="h-4 w-4 text-black" />,
  "Next.js": <SiNextdotjs className="h-4 w-4 text-black" />,
  Docker: <SiDocker className="h-4 w-4 text-[#2496ED]" />,
  MongoDB: <SiMongodb className="h-4 w-4 text-[#47A248]" />,
  Supabase: <SiSupabase className="h-4 w-4 text-[#3ECF8E]" />,
  Postman: <SiPostman className="h-4 w-4 text-[#FF6C37]" />,
  npm: <SiNpm className="h-4 w-4 text-[#CB3837]" />,
  "Material UI": <SiMui className="h-4 w-4 text-[#007FFF]" />,
  "Framer Motion": <FramerIcon className="h-4 w-4" />,
  AWS: <AwsIcon className="h-4 w-4" />,
  Azure: <AzureIcon className="h-4 w-4" />,

  // Common combined labels used in the Skills section
  "Node/Express": <SiNodedotjs className="h-4 w-4 text-[#339933]" />,
  "Python/FastAPI": <SiPython className="h-4 w-4 text-[#3776AB]" />,
  "Postgres/SQL": <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
  "Git/GitHub": <SiGithub className="h-4 w-4 text-[#181717]" />,
  Git: <SiGit className="h-4 w-4 text-[#F05032]" />,
  Vite: <SiVite className="h-4 w-4 text-[#646CFF]" />,

  "REST APIs": <Layers className="h-3.5 w-3.5 text-zinc-700" />,
};

const PROJECTS = [
  {
    id: "crate",
    featured: true,
    name: "Crate Organizer",
    tagline: "A DJ-focused library organizer for fast tagging, filtering, and playlist creation.",
    highlights: [
      "Tagging + smart filters",
      "Playlist/crate generation",
      "Polished UI states (empty, loading, errors)",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Electron"],
    live: "https://example.com", // TODO
    repo: "https://github.com/your-handle/crate-organizer", // TODO
    problem: "DJs manage thousands of tracks and spend too much time manually organizing libraries before gigs.",
    solution: "A clean, desktop-style interface that speeds up organization with tags, search, and reusable crates.",
    whatNext: [
      "Cloud sync + multi-device profiles",
      "Metadata enrichment (Spotify/Last.fm)",
      "Rules engine for auto-tagging",
    ],
    category: "Product App",
  },
  {
    id: "dash",
    featured: false,
    name: "Real-Time Data Dashboard",
    tagline: "A responsive dashboard that visualizes live data with robust state handling.",
    highlights: [
      "Reusable chart components",
      "Caching + rate-limit protection",
      "Accessible UI and keyboard navigation",
    ],
    stack: ["React", "TypeScript", "REST APIs"],
    live: "https://example.com", // TODO
    repo: "https://github.com/your-handle/realtime-dashboard", // TODO
    problem: "Teams need quick visibility into changing data without clutter or slow load times.",
    solution:
      "A fast dashboard with careful loading/error states and composable components for rapid iteration.",
    whatNext: ["Auth + saved views", "Export to CSV/PDF", "Server-side pagination"],
    category: "Dashboard",
  },
  {
    id: "api",
    featured: false,
    name: "Mini API + Auth (Practice)",
    tagline: "A small API demonstrating clean REST patterns, validation, and tests.",
    highlights: ["JWT auth", "Request validation", "Basic tests + CI-ready structure"],
    stack: ["Node", "Express", "Postgres"],
    live: "https://example.com", // TODO
    repo: "https://github.com/your-handle/mini-api-auth", // TODO
    problem: "Many take-homes require a simple backend with solid structure and predictable behavior.",
    solution:
      "A minimal API template: routes, services, validation, error handling, and a tidy folder structure.",
    whatNext: ["OpenAPI docs", "Rate limiting", "Docker compose"],
    category: "Backend",
  },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Front-End",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    icon: Layers,
    title: "UI Engineering",
    items: ["Component design", "State management", "Accessibility", "Performance", "Responsive layout"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["Next.js", "Redux", "Framer Motion", "Material UI", "shadcn/ui"],
  },
  {
    icon: Wrench,
    title: "Back-End + Tools",
    items: [
      "Node/Express",
      "Python/FastAPI",
      "REST APIs",
      "Postgres/SQL",
      "Git/GitHub",
      "Vite",
      "Docker",
      "AWS",
      "Azure",
      "Postman",
      "npm",
    ],
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm">
      {children}
    </span>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
      <span className="flex h-4 w-4 items-center justify-center rounded bg-white">
        {TECH_ICONS[label] ?? <Code2 className="h-3.5 w-3.5 text-zinc-700" />}
      </span>
      {label}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  newTab = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  icon?: React.ReactNode;
  newTab?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : variant === "outline"
        ? "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
        : "text-zinc-700 hover:bg-zinc-100";

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={cx(base, styles)}
    >
      {icon}
      {children}
    </a>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8">
          {eyebrow ? (
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              <Sparkles className="h-4 w-4" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-zinc-600">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function TopNav() {
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-zinc-900 text-white">{BRAND.name[0]}</div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-zinc-900">{BRAND.name}</div>
            <div className="text-xs text-zinc-500">{BRAND.title}</div>
          </div>
        </a>

        <div className="hidden items-center gap-2 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-xl px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ButtonLink href={BRAND.links.resume} variant="outline" icon={<FileText className="h-4 w-4" />}newTab>
            Resume
          </ButtonLink>
          <ButtonLink href="#contact" icon={<ArrowRight className="h-4 w-4" />}>
            Let’s talk
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-zinc-100 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-zinc-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
              <MapPin className="h-4 w-4" />
              {BRAND.location} · Open to Front-End & Full-Stack Roles
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Building clean, user-driven web applications with React & TypeScript.
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-600">
              I’m {BRAND.name}, a developer focused on UI engineering and product-quality front-ends, with backend experience
              building REST APIs. I ship fast, readable code and interfaces people enjoy using.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>React</Pill>
              <Pill>TypeScript</Pill>
              <Pill>Node / FastAPI</Pill>
              <Pill>REST APIs</Pill>
              <Pill>Postgres / SQL</Pill>
              <Pill>Modern UI</Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects" icon={<ArrowRight className="h-4 w-4" />}>
                View projects
              </ButtonLink>
              <ButtonLink href={BRAND.links.github} variant="outline" icon={<Github className="h-4 w-4" />}>
                GitHub
              </ButtonLink>
              <ButtonLink href={BRAND.links.linkedin} variant="outline" icon={<Linkedin className="h-4 w-4" />}>
                LinkedIn
              </ButtonLink>
              <ButtonLink href={`mailto:${BRAND.email}`} variant="ghost" icon={<Mail className="h-4 w-4" />}>
                {BRAND.email}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">What I bring</div>
                  <p className="mt-1 text-sm text-zinc-600">
                    Product thinking, clean UI, and fast iteration - built from real-world projects.
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-900 p-2 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Strong React/TS fundamentals",
                  "Readable, testable code structure",
                  "Great UX: loading, empty, error states",
                  "Comfortable with APIs + data",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-zinc-900" />
                    <div className="text-sm text-zinc-700">{t}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-xs font-medium text-zinc-500">Current focus</div>
                <div className="mt-1 text-sm font-semibold text-zinc-900">Front-End + Full-Stack interview readiness</div>
                <div className="mt-2 text-sm text-zinc-600">
                  LeetCode fundamentals + building features quickly under time pressure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q);
      const matchesCat = category === "All" || p.category === category;
      return matchesQuery && matchesCat;
    }).sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [query, category]);

  return (
    <Section
      id="projects"
      eyebrow="Proof"
      title="Projects"
      subtitle="Two strong projects beat five weak ones. These are built with a focus on clean UI, real user workflows, and strong code structure."
    >
      <div className="mb-6 grid gap-3 sm:grid-cols-12 sm:items-end">
        <div className="sm:col-span-7">
          <label className="text-xs font-medium text-zinc-600">Search</label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 shadow-sm">
            <Search className="h-4 w-4 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Crate, dashboard, API, TypeScript..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
            />
          </div>
        </div>
        <div className="sm:col-span-5">
          <label className="text-xs font-medium text-zinc-600">Category</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cx(
                  "rounded-2xl border px-3 py-2 text-sm transition",
                  category === c
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.id} className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-zinc-500">{p.category}</div>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900">{p.name}</h3>
              </div>
              {p.featured ? (
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">Featured</span>
              ) : null}
            </div>

            <p className="mt-3 text-sm text-zinc-600">{p.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s} label={s} />
              ))}
            </div>

            <ul className="mt-4 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="text-sm text-zinc-700">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <ButtonLink href={p.live} variant="outline" icon={<ExternalLink className="h-4 w-4" />}>
                Live
              </ButtonLink>
              <ButtonLink href={p.repo} variant="outline" icon={<Github className="h-4 w-4" />}>
                Repo
              </ButtonLink>
            </div>

            <details className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <summary className="cursor-pointer text-sm font-medium text-zinc-900">Project breakdown (for interviews)</summary>
              <div className="mt-3 space-y-3 text-sm text-zinc-700">
                <div>
                  <div className="text-xs font-semibold text-zinc-500">Problem</div>
                  <div>{p.problem}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500">Solution</div>
                  <div>{p.solution}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500">What I’d add next</div>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    {p.whatNext.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-900">Want a quick overview?</div>
            <p className="mt-1 text-sm text-zinc-600">
              I can walk through these projects in under 5 minutes - problem, approach, tradeoffs, and what I’d improve.
            </p>
          </div>
          <ButtonLink href="#contact" icon={<ArrowRight className="h-4 w-4" />}>
            Book a chat
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills that ship"
      subtitle="Recruiter-friendly, interview-safe, and aligned with front-end + full-stack roles."
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {SKILLS.map((s) => (
          <div key={s.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-zinc-900 p-2 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-zinc-900">{s.title}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <Badge key={i} label={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">How I work</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            {[
              "Start with the user workflow and define success criteria.",
              "Build a clean component structure and predictable state.",
              "Prioritize accessibility and performance from day one.",
              "Ship in small increments with clear commits and readable PRs.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">Achievements and Awards</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            {[
              "1st Place - Muse Award | Hack Western ",
              "2nd Place - Software Hacks | UofT Hacks",
              "Merit Scholarship - University of Waterloo",
              "Licenced Pilot",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Context" title="About" subtitle="Short, human, and directly relevant to hiring managers.">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-zinc-700">
              I’m a developer who enjoys building tools people actually use - clean interfaces, predictable state, and fast feedback
              loops. I bring a product mindset: define the workflow, build the smallest valuable slice, then iterate.
            </p>
            <p className="mt-4 text-zinc-700">
              My background includes data and mapping work, which makes me comfortable with messy datasets and real-world edge
              cases - and I apply that same rigor to UI engineering.
            </p>
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="text-xs font-semibold text-zinc-500">Currently</div>
              <div className="mt-1 text-sm font-semibold text-zinc-900">Available for interviews</div>
              <p className="mt-1 text-sm text-zinc-600">Looking for teams that value ownership, clarity, and shipping.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">Fast facts</div>
            <dl className="mt-3 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-zinc-500">Focus</dt>
                <dd className="font-medium text-zinc-900">Front-End + Full-Stack</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-zinc-500">Strength</dt>
                <dd className="font-medium text-zinc-900">Clean UI & Strong Backend</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-zinc-500">Frontend</dt>
                <dd className="font-medium text-zinc-900">React / Next.js</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-zinc-500">Data</dt>
                <dd className="font-medium text-zinc-900">Python + SQL</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-zinc-500">Backend</dt>
                <dd className="font-medium text-zinc-900">Node / FastAPI · REST</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-zinc-500">Approach</dt>
                <dd className="font-medium text-zinc-900">Product-first mindset</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Reach out" title="Contact" subtitle="If you like what you see, I’d love to chat.">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">Send me a message</div>
            <p className="mt-2 text-sm text-zinc-600">
              Email is best - include the role, the team, and what you’d like to learn about my work.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${BRAND.email}`} icon={<Mail className="h-4 w-4" />}>
                Email
              </ButtonLink>
              <ButtonLink href={BRAND.links.linkedin} variant="outline" icon={<Linkedin className="h-4 w-4" />}>
                LinkedIn
              </ButtonLink>
              <ButtonLink href={BRAND.links.github} variant="outline" icon={<Github className="h-4 w-4" />}>
                GitHub
              </ButtonLink>
              <ButtonLink href={BRAND.links.resume} variant="outline" icon={<FileText className="h-4 w-4" />}newTab>
                Resume
              </ButtonLink>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="text-xs font-semibold text-zinc-500">Quick note</div>
              <p className="mt-1 text-sm text-zinc-700">
                If you’re sending a take-home or assessment, I’m happy to walk through decisions and tradeoffs afterward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// --- Lightweight “tests” / invariants (dev-only) ---
function runInvariants() {
  if (import.meta.env.PROD) return;

  // unique project IDs
  const ids = PROJECTS.map((p) => p.id);
  const unique = new Set(ids);
  // eslint-disable-next-line no-console
  console.assert(unique.size === ids.length, "PROJECTS has duplicate ids", ids);

  // skills badges should resolve to icons for tech labels where possible
  const allBadges = new Set<string>();
  PROJECTS.forEach((p) => p.stack.forEach((s) => allBadges.add(s)));
  SKILLS.forEach((s) => s.items.forEach((i) => allBadges.add(i)));

  // eslint-disable-next-line no-console
  console.assert(allBadges.size > 0, "No badges found");
}

export default function PortfolioLanding() {
  // Run invariants once on mount-like render (cheap and safe)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useMemo(() => {
    runInvariants();
    return null;
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <TopNav />
      <Hero />
      <main>
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
