import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Bot,
  Map,
  BookOpen,
  Waves,
  Sun,
  Filter,
  Smartphone,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Kamran Ali" },
      {
        name: "description",
        content:
          "Engineering and software projects by Kamran Ali — robotics, MPPT solar tracking, DSP filters, Flutter apps and more.",
      },
      { property: "og:title", content: "Projects | Kamran Ali" },
      {
        property: "og:description",
        content: "Robotics, power electronics, DSP and mobile apps.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const githubLink = {
  icon: <Github className="h-4 w-4" />,
  label: "Source",
  href: "https://github.com/EngKamran11",
};

const projects = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Sumo Robot",
    category: "Robotics / Hardware",
    description:
      "Competition-ready autonomous sumo robot with opponent detection sensors and combat control logic tuned for quick reactions in the ring.",
    tags: ["Robotics", "Sensors", "Motor Control", "Embedded"],
    links: [githubLink],
  },
  {
    icon: <Map className="h-6 w-6" />,
    title: "Line Following Robot",
    category: "Robotics / Hardware",
    description:
      "Automated path-tracking robot using an IR sensor array and microcontroller-based control logic for smooth, high-speed line following.",
    tags: ["IR Sensors", "Microcontroller", "PID", "Embedded"],
    links: [githubLink],
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Library Management System",
    category: "Software / DSA",
    description:
      "Data management application built with core Data Structures & Algorithms concepts — cataloguing, borrowing, returning, and fast search.",
    tags: ["C++", "Data Structures", "Algorithms", "OOP"],
    links: [githubLink],
  },
  {
    icon: <Waves className="h-6 w-6" />,
    title: "Noise Cancellation (DSP)",
    category: "Signal Processing",
    description:
      "Implemented noise reduction techniques in MATLAB using adaptive filtering and DSP concepts, comparing performance across signal types.",
    tags: ["MATLAB", "DSP", "Adaptive Filter"],
    links: [githubLink],
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: "Solar Tracking — MPPT",
    category: "Power Electronics",
    description:
      "Designed a solar panel tracking system using a Maximum Power Point Tracking (MPPT) algorithm to maximise energy harvest under varying conditions.",
    tags: ["MPPT", "Solar", "Power Electronics", "Simulink"],
    links: [githubLink],
  },
  {
    icon: <Filter className="h-6 w-6" />,
    title: "Digital FIR Low-Pass Filter",
    category: "Signal Processing",
    description:
      "Designed and simulated a digital FIR low-pass filter in MATLAB and Simulink, analysing frequency response and window trade-offs.",
    tags: ["MATLAB", "Simulink", "FIR", "DSP"],
    links: [githubLink],
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Wallpaper App — Flutter + Pexels API",
    category: "Mobile Development",
    description:
      "High-quality wallpaper app with category-based search, image caching, lazy loading, and a custom Material-inspired UI built in Flutter.",
    tags: ["Flutter", "Dart", "REST API", "Caching"],
    links: [githubLink],
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Zener Diode Voltage Regulator",
    category: "Circuit Design",
    description:
      "Designed and simulated a Zener diode-based voltage regulator with side-by-side theoretical vs. simulated analysis of load and line regulation.",
    tags: ["Circuits", "LTspice", "Regulator"],
    links: [githubLink],
  },
];



function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Portfolio</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A selection of hands-on projects spanning robotics, embedded systems, and software
          development that demonstrate my technical capabilities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="hover-lift group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
              {project.icon}
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {project.category}
            </span>
            <h2 className="mt-2 font-display text-lg font-bold text-foreground">{project.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border/60 bg-hero px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3 border-t border-border/60 pt-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
