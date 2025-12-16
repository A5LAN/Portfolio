import React, { useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
  MapPin,
  ArrowRight,
  Sparkles,
  Code2, // </> icon
  Wrench,
  Search,
  Info,
  Server, // server icon for back-end
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
  // Keeping your title but tightening the positioning inside About (front-end first, full-stack capable)
  title: "Software Engineer · Full Stack Developer",
  location: "Toronto, ON",
  email: "ododanli1995@gmail.com",
  links: {
    github: "https://github.com/A5LAN",
    linkedin: "https://www.linkedin.com/in/your-handle", // TODO
    resume: "/resume.pdf", // TODO
  },
};

// Inline SVG fallbacks
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

const TECH_ICONS: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 className="h-4 w-4 text-[#E34F26]" />,
  CSS: <SiCss3 className="h-4 w-4 text-[#1572B6]" />,
  JavaScript: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="h-4 w-4 text-[#3178C6]" />,
  React: <SiReact className="h-4 w-4 text-[#61DAFB]" />,
  Tailwind: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
  "Tailwind CSS": <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
  Electron: <SiElectron className="h-4 w-4 text-[#47848F]" />,
  Node: <SiNodedotjs className="h-4 w-4 text-[#339933]" />,
  "Node/Express": <SiNodedotjs className="h-4 w-4 text-[#339933]" />,
  Express: <SiExpress className="h-4 w-4 text-white" />,
  Postgres: <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
  PostgreSQL: <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
  // Consistency choice: use "Back-End" everywhere
  "Postgres/SQL": <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
  SQL: <SiPostgresql className="h-4 w-4 text-[#4169E1]" />,
  Python: <SiPython className="h-4 w-4 text-[#3776AB]" />,
  "Python/FastAPI": <SiPython className="h-4 w-4 text-[#3776AB]" />,
  Redux: <SiRedux className="h-4 w-4 text-[#764ABC]" />,
  "Next.js": <SiNextdotjs className="h-4 w-4 text-white" />,
  Docker: <SiDocker className="h-4 w-4 text-[#2496ED]" />,
  MongoDB: <SiMongodb className="h-4 w-4 text-[#47A248]" />,
  Supabase: <SiSupabase className="h-4 w-4 text-[#3ECF8E]" />,
  Postman: <SiPostman className="h-4 w-4 text-[#FF6C37]" />,
  npm: <SiNpm className="h-4 w-4 text-[#CB3837]" />,
  "Material UI": <SiMui className="h-4 w-4 text-[#007FFF]" />,
  "Framer Motion": <FramerIcon className="h-4 w-4" />,
  AWS: <AwsIcon className="h-4 w-4" />,
  Azure: <AzureIcon className="h-4 w-4" />,
  "Git/GitHub": <SiGithub className="h-4 w-4 text-[#E5E7EB]" />,
  Git: <SiGit className="h-4 w-4 text-[#F05032]" />,
  Vite: <SiVite className="h-4 w-4 text-[#646CFF]" />,
  "REST APIs": <Server className="h-4 w-4 text-zinc-200" />,
  "shadcn/ui": <Code2 className="h-4 w-4 text-zinc-200" />,
};

const GRADS = {
  a: "from-indigo-500 via-fuchsia-500 to-rose-500",
  b: "from-cyan-500 via-sky-500 to-indigo-500",
  c: "from-emerald-500 via-teal-500 to-cyan-500",
  d: "from-amber-400 via-orange-500 to-rose-500",
};

const PROJECTS = [
  {
    id: "crate",
    featured: true,
    name: "Crate Organizer",
    tagline:
      "A desktop-style organizer for fast tagging, filtering, and crate creation.",
    highlights: [
      "Tagging + smart filters",
      "Crate generation workflows",
      "Polished UI states (empty, loading, errors)",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Electron"],
    live: "https://example.com",
    repo: "https://github.com/your-handle/crate-organizer",
    problem:
      "Large libraries become slow to manage when UI state and workflows aren’t structured.",
    solution:
      "A focused interface with fast search + predictable state + reusable “crate” workflows.",
    whatNext: ["Rules engine", "Metadata enrichment", "Cloud profiles"],
    category: "Product App",
  },
  {
    id: "dash",
    featured: false,
    name: "Real-Time Data Dashboard",
    tagline: "Responsive dashboard for changing data without clutter.",
    highlights: [
      "Reusable components",
      "Caching + rate-limit protection",
      "Accessible UI + keyboard navigation",
    ],
    stack: ["React", "TypeScript", "REST APIs"],
    live: "https://example.com",
    repo: "https://github.com/your-handle/realtime-dashboard",
    problem: "Live data UIs often become noisy and hard to read under load.",
    solution:
      "Clear hierarchy + careful loading/error states + performance-minded fetching patterns.",
    whatNext: ["Saved views", "Export (CSV/PDF)", "Pagination"],
    category: "Dashboard",
  },
  {
    id: "api",
    featured: false,
    name: "Mini API + Auth (Practice)",
    tagline: "A clean REST API template with validation and auth.",
    highlights: ["JWT auth", "Request validation", "CI-ready structure"],
    stack: ["Node", "Express", "Postgres"],
    live: "https://example.com",
    repo: "https://github.com/your-handle/mini-api-auth",
    problem:
      "Take-homes expect structure: predictable endpoints, errors, and validation.",
    solution:
      "A minimal template: routes/services, validation, consistent errors, tidy folder layout.",
    whatNext: ["OpenAPI docs", "Rate limiting", "Docker compose"],
    category: "Back-End",
  },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Front-End",
    grad: GRADS.a,
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    icon: Code2,
    title: "UI/UX",
    grad: GRADS.b,
    items: [
      "Component design",
      "State management",
      "Accessibility",
      "Performance",
      "Responsive layout",
    ],
  },
  {
    icon: Server,
    title: "Back-End + Servers",
    grad: GRADS.c,
    items: [
      "Node/Express",
      "Python/FastAPI",
      "REST APIs",
      "Postgres/SQL",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    icon: Wrench,
    title: "Frameworks + Tools",
    grad: GRADS.d,
    items: [
      "Next.js",
      "Redux",
      "Framer Motion",
      "Material UI",
      "shadcn/ui",
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

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-black/30">
        {TECH_ICONS[label] ?? <Code2 className="h-3.5 w-3.5 text-zinc-200" />}
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
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline" | "blackHover";
  icon?: React.ReactNode;
  newTab?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white hover:brightness-110 shadow-sm"
      : variant === "blackHover"
      ? "bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white hover:bg-black hover:from-black hover:via-black hover:to-black"
      : variant === "outline"
      ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
      : "text-zinc-200 hover:bg-white/5";

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={cx(base, styles, className)}
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
    <section id={id} className="scroll-mt-28 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8">
          {eyebrow ? (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
              <Sparkles className="h-4 w-4 text-fuchsia-300" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-zinc-300">{subtitle}</p>
          ) : null}
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
    <div className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-10 w-10 min-h-10 min-w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow-sm">
            {BRAND.name[0]}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{BRAND.name}</div>
            <div className="text-xs text-zinc-300">{BRAND.title}</div>
          </div>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
          <ButtonLink
            href={BRAND.links.resume}
            variant="outline"
            icon={<FileText className="h-4 w-4" />}
            newTab
            className="h-10 flex-1 sm:flex-none"
          >
            Resume
          </ButtonLink>
          <ButtonLink
            href="#contact"
            icon={<ArrowRight className="h-4 w-4" />}
            className="h-10 flex-1 sm:flex-none"
          >
            Let’s talk
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-32 -top-28 h-[520px] w-[520px] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute left-1/2 top-[60%] h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200">
              <MapPin className="h-4 w-4 text-indigo-300" />
              {BRAND.location}
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {BRAND.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-zinc-200">
              {BRAND.title}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "REST APIs", "Postgres/SQL"].map(
                (t) => (
                  <Badge key={t} label={t} />
                ),
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href="#projects"
                variant="blackHover"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View projects
              </ButtonLink>

              <ButtonLink
                href={BRAND.links.linkedin}
                variant="outline"
                icon={<Linkedin className="h-4 w-4 text-[#0A66C2]" />}
                newTab
              >
                LinkedIn
              </ButtonLink>

              <ButtonLink
                href={BRAND.links.github}
                variant="outline"
                icon={<Github className="h-4 w-4" />}
                newTab
              >
                GitHub
              </ButtonLink>

              <ButtonLink
                href={`mailto:${BRAND.email}`}
                variant="ghost"
                icon={<Mail className="h-4 w-4" />}
              >
                {BRAND.email}
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">
                    What I bring
                  </div>
                  <p className="mt-1 text-sm text-zinc-300">
                    Clean UI, predictable state, and pragmatic full-stack delivery.
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-600 p-2 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Strong React/TS fundamentals",
                  "Readable, testable structure",
                  "Great UX states",
                  "Comfortable with APIs + data",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-white/80" />
                    <div className="text-sm text-zinc-200">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}

function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

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
      eyebrow="Work"
      title="Projects"
      subtitle="Curated and easy to scan. Technical notes won’t change card height."
    >
      <div className="mb-6 grid gap-3 sm:grid-cols-12 sm:items-end">
        <div className="sm:col-span-7">
          <label className="text-xs font-medium text-zinc-300">Search</label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <Search className="h-4 w-4 text-zinc-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Crate, dashboard, API, TypeScript..."
              className="w-full bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-400"
            />
          </div>
        </div>
        <div className="sm:col-span-5">
          <label className="text-xs font-medium text-zinc-300">
            Category
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cx(
                  "rounded-2xl border px-3 py-2 text-sm transition",
                  category === c
                    ? "border-white/10 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {filtered.map((p) => {
          const isOpen = openProjectId === p.id;

          return (
            <article
              key={p.id}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              style={{ minHeight: 520 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-medium text-zinc-400">
                    {p.category}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {p.name}
                  </h3>
                </div>
                {p.featured ? (
                  <span className="rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 px-3 py-1 text-xs font-medium text-white">
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-zinc-300">{p.tagline}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} label={s} />
                ))}
              </div>

              <ul className="mt-4 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="text-sm text-zinc-200">
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <ButtonLink
                  href={p.live}
                  variant="outline"
                  icon={<ExternalLink className="h-4 w-4" />}
                  newTab
                >
                  Live
                </ButtonLink>
                <ButtonLink
                  href={p.repo}
                  variant="outline"
                  icon={<Github className="h-4 w-4" />}
                  newTab
                >
                  Repo
                </ButtonLink>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setOpenProjectId(isOpen ? null : p.id)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50"
                >
                  <Info className="h-4 w-4 text-zinc-200" />
                  Technical notes
                </button>
              </div>

              {isOpen ? (
                <div className="absolute inset-0 z-10 rounded-3xl border border-white/10 bg-zinc-950/95 p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-zinc-400">
                        Technical notes
                      </div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        {p.name}
                      </div>
                    </div>
                    <button
                      onClick={() => setOpenProjectId(null)}
                      aria-label="Close"
                      className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>

                  </div>

                  <div className="mt-5 space-y-4 text-sm text-zinc-200">
                    <div>
                      <div className="text-xs font-semibold text-zinc-400">
                        Problem
                      </div>
                      <div className="mt-1">{p.problem}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-400">
                        Solution
                      </div>
                      <div className="mt-1">{p.solution}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-400">
                        What I’d add next
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        {p.whatNext.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s} label={s} />
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Skills"
      subtitle="Front-End, UI/UX, Back-End + Servers, and Frameworks + Tools."
    >
      <div className="grid gap-6 lg:grid-cols-4 items-stretch">
        {SKILLS.map((s) => (
          <div
            key={s.title}
            className="h-full rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/40 text-white">
                <s.icon className="h-5 w-5" />
              </div>

              <div className="text-sm font-semibold">
                <span
                  className={cx(
                    "bg-gradient-to-r bg-clip-text text-transparent",
                    s.grad,
                  )}
                >
                  {s.title}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <Badge key={i} label={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="About"
      subtitle="Front-End focused, full-stack capable."
    >
      <div className="grid gap-6 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 h-full">
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-200">
              I am a front-end focused developer who builds clean, modern interfaces that feel fast and intentional.
              I care about UI engineering details: component structure, predictable state, accessibility, and performance.
            </p>

            <p className="mt-4 text-zinc-200">
              I work primarily in React and TypeScript, and I am comfortable going full stack when needed.
              That includes building and integrating APIs, working with SQL and Postgres, and handling real-world data and edge cases.
            </p>

            <p className="mt-4 text-zinc-200">
              I like shipping in small, high-quality iterations with clear commits and readable code.
              My goal is always the same: an interface that communicates well through loading, empty, and error states, and stays easy to maintain as it grows.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs font-semibold text-zinc-400">
                What teams get
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                {[
                  "Clean UI hierarchy with consistent spacing and typography",
                  "Predictable state and safe edge-case handling",
                  "Accessibility and keyboard-friendly interactions",
                  "Practical performance improvements without over-engineering",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 h-full">
          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold text-white">Fast facts</div>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Location", BRAND.location],
                ["Front-End", "React · TypeScript · UI engineering"],
                ["Back-End", "REST APIs · Postgres/SQL · Validation"],
                ["UI focus", "Accessibility · Performance · Responsive layout"],
                ["Working style", "Ship small, iterate fast"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-start justify-between gap-4">
                  <dt className="text-zinc-400">{k}</dt>
                  <dd className="font-medium text-zinc-100 text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs font-semibold text-zinc-400">
                Best way to evaluate
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                A 5-minute project walkthrough
              </div>
              <p className="mt-2 text-sm text-zinc-200">
                Problem, approach, tradeoffs, and what I would improve next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Contact"
      subtitle="Quick and direct."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold text-white">Send me a message</div>
        <p className="mt-2 text-sm text-zinc-300">
          Email is best. Include the role and team, and what you want to learn about my work.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${BRAND.email}`} icon={<Mail className="h-4 w-4" />}>
            Email
          </ButtonLink>

          <ButtonLink
            href={BRAND.links.linkedin}
            variant="outline"
            icon={<Linkedin className="h-4 w-4 text-[#0A66C2]" />}
            newTab
          >
            LinkedIn
          </ButtonLink>

          <ButtonLink
            href={BRAND.links.github}
            variant="outline"
            icon={<Github className="h-4 w-4" />}
            newTab
          >
            GitHub
          </ButtonLink>

          <ButtonLink
            href={BRAND.links.resume}
            variant="outline"
            icon={<FileText className="h-4 w-4" />}
            newTab
          >
            Resume
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
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
