import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, School } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education | Kamran Ali" },
      { name: "description", content: "Kamran Ali's educational background — BS Electrical Engineering at COMSATS University Islamabad." },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Background</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Education
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          My academic journey has provided me with a strong foundation in electrical engineering principles,
          power systems, and software development.
        </p>
      </div>

      <div className="space-y-6">
        <EducationCard
          icon={<GraduationCap className="h-6 w-6" />}
          institution="COMSATS University Islamabad"
          degree="BS Electrical Engineering (Power Engineering)"
          period="2023 — 2027 (Expected)"
          details={[
            "Major: Power Engineering",
            "Relevant coursework: Power Systems, Signals and Systems, Data Structures & Algorithms, Machine Learning",
            "Active in robotics and programming clubs",
          ]}
          current
        />

        <EducationCard
          icon={<School className="h-6 w-6" />}
          institution="Sargodhian Spirit Trust Public School"
          location="Rashidabad, Sindh"
          degree="O Levels & A Levels"
          period="Completed"
          details={[
            "Built strong analytical and problem-solving foundations",
            "Developed interest in science and technology",
          ]}
        />

        <EducationCard
          icon={<School className="h-6 w-6" />}
          institution="Khubaib College Skardu"
          location="Skardu"
          degree="Early Education"
          period="Completed"
          details={["Completed my early education and built a strong academic foundation"]}
        />
      </div>
    </div>
  );
}

function EducationCard({
  icon,
  institution,
  degree,
  period,
  details,
  location,
  current,
}: {
  icon: React.ReactNode;
  institution: string;
  degree: string;
  period: string;
  details: string[];
  location?: string;
  current?: boolean;
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/30 md:p-8">
      {current && (
        <span className="absolute right-6 top-6 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Current
        </span>
      )}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{institution}</h3>
          {location && <p className="text-sm text-muted-foreground">{location}</p>}
          <p className="mt-1 text-primary">{degree}</p>
          <p className="mt-1 text-sm text-muted-foreground">{period}</p>
          <ul className="mt-4 space-y-2">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
