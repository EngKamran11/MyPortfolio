import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Bot, Route, BookOpen } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Kamran Ali" },
      { name: "description", content: "Kamran Ali's engineering projects — Sumo Robot, Line Follower Robot, and Library Management System." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Sumo Robot",
    category: "Robotics / Hardware",
    description:
      "Designed and built an autonomous sumo wrestling robot capable of detecting and pushing opponents out of a ring. Integrated sensors, motors, and control logic for competitive performance.",
    tags: ["Robotics", "Sensors", "Motor Control", "Embedded Systems"],
    links: [
      { icon: <Github className="h-4 w-4" />, label: "Source Code", href: "https://github.com/EngKamran11" },
    ],
  },
  {
    icon: <Route className="h-6 w-6" />,
    title: "Line Follower Robot (LFR)",
    category: "Robotics / Hardware",
    description:
      "Built a line-following robot using infrared sensors and microcontroller programming. The robot autonomously tracks and follows a predefined path with high precision and speed.",
    tags: ["Robotics", "IR Sensors", "Microcontroller", "PID Control"],
    links: [
      { icon: <Github className="h-4 w-4" />, label: "Source Code", href: "https://github.com/EngKamran11" },
    ],
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Library Management System",
    category: "Software / Data Structures",
    description:
      "Developed a console-based library management system using advanced data structures. Features include book cataloging, member management, borrowing/returning operations, and search functionality.",
    tags: ["C++", "Data Structures", "Algorithms", "OOP"],
    links: [
      { icon: <Github className="h-4 w-4" />, label: "Source Code", href: "https://github.com/EngKamran11" },
    ],
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
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/30"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/10">
              {project.icon}
            </div>

            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <h2 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-hero px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
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
