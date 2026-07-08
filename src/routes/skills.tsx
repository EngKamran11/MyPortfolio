import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Cpu,
  Brain,
  Wrench,
  Users,
  Lightbulb,
  MessageSquare,
  Handshake,
  Zap,
  Activity,
  LayoutGrid,
  GitBranch,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills | Kamran Ali" },
      { name: "description", content: "Kamran Ali's technical and soft skills — programming, engineering, AI/ML, and tools." },
    ],
  }),
  component: SkillsPage,
});

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="h-5 w-5" />,
    color: "text-primary",
    skills: [
      { name: "C / C++", level: 85 },
      { name: "Python", level: 85 },
      { name: "Dart (Flutter)", level: 75 },
    ],
  },
  {
    title: "Engineering",
    icon: <Cpu className="h-5 w-5" />,
    color: "text-primary",
    skills: [
      { name: "Power Systems", level: 85 },
      { name: "Circuit Analysis", level: 85 },
      { name: "Digital Logic", level: 80 },
      { name: "Signal Processing", level: 80 },
    ],
  },
  {
    title: "Tools & Software",
    icon: <Wrench className="h-5 w-5" />,
    color: "text-primary",
    skills: [
      { name: "MATLAB & Simulink", level: 85 },
      { name: "LTspice", level: 75 },
      { name: "AutoCAD", level: 70 },
      { name: "Flutter", level: 75 },
    ],
  },
  {
    title: "Concepts",
    icon: <Brain className="h-5 w-5" />,
    color: "text-primary",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "DSP", level: 80 },
      { name: "Power Systems Analysis", level: 80 },
    ],
  },
];

const softSkills = [
  { icon: <Handshake className="h-4 w-4" />, name: "Teamwork" },
  { icon: <MessageSquare className="h-4 w-4" />, name: "Communication" },
  { icon: <Users className="h-4 w-4" />, name: "Time Management" },
  { icon: <Lightbulb className="h-4 w-4" />, name: "Quick Learner" },
];


function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Expertise</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Skills
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A blend of technical programming, engineering knowledge, and interpersonal abilities
          developed through academics and internships.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/30"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ${category.color}`}>
                {category.icon}
              </div>
              <h2 className="text-lg font-semibold text-foreground">{category.title}</h2>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Soft Skills</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/30"
            >
              <div className="text-primary">{skill.icon}</div>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
