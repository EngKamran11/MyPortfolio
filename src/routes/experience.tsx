import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Code, Brain, Zap } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | Kamran Ali" },
      { name: "description", content: "Kamran Ali's professional experience — internships in Python, Machine Learning, and Electrical Engineering." },
    ],
  }),
  component: ExperiencePage,
});

const experiences = [
  {
    icon: <Code className="h-5 w-5" />,
    title: "Python Intern",
    company: "DecodesLab",
    type: "Internship",
    description:
      "Developed Python-based applications and scripts, gaining hands-on experience with real-world coding challenges. Collaborated with the development team to implement features and debug issues, strengthening problem-solving and software engineering skills.",
    skills: ["Python", "Scripting", "Problem Solving", "Team Collaboration"],
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Machine Learning Intern",
    company: "FlyRank",
    type: "Internship",
    description:
      "Worked on machine learning models and data-driven solutions. Gained practical experience in ML pipelines, data preprocessing, and model evaluation. Contributed to projects that applied AI to real business problems.",
    skills: ["Machine Learning", "Python", "Data Analysis", "Model Training"],
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Electrical Engineering Intern",
    company: "IESCO Islamabad",
    type: "Internship",
    description:
      "Gained field experience in power distribution and electrical infrastructure. Observed and learned about power system operations, maintenance protocols, and safety standards in a real utility environment.",
    skills: ["Power Systems", "Field Operations", "Safety Standards", "Infrastructure"],
  },
];

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Career</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Experience
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A collection of internships and hands-on experiences that have shaped my technical
          skills and professional growth.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative md:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-3 top-6 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />

              <div className="rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/30 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {exp.type}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-hero px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
