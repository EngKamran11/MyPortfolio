import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden border-b border-border/50"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Electrical Engineer & Developer
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              Hi, I'm <span className="text-gradient">Kamran Ali</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Final-year BS Electrical Engineering student at COMSATS University Islamabad,
              majoring in Power Engineering. Passionate about power systems, machine learning,
              and building innovative technologies that solve real-world engineering problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow-primary"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="mailto:kamisst046@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
                <span>kamisst046@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-border/50 bg-hero">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCard number="4+" label="Internships" />
            <StatCard number="3" label="Projects" />
            <StatCard number="5+" label="Programming Languages" />
            <StatCard number="2027" label="Expected Graduation" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              About Me
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I'm a final-year BS Electrical Engineering student at COMSATS University Islamabad,
              majoring in Power Engineering. My academic journey has equipped me with a strong
              foundation in power systems, signals and systems, and data structures & algorithms.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I am passionate about the intersection of electrical engineering and software
              development. I enjoy building both hardware and software projects, from sumo robots
              to machine learning models, and I'm continuously expanding my technical expertise
              through hands-on projects and internships.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
          <div className="grid gap-4">
            <InfoCard
              icon={<MapPin className="h-5 w-5 text-primary" />}
              title="Location"
              value="Islamabad, Pakistan"
            />
            <InfoCard
              icon={<Phone className="h-5 w-5 text-primary" />}
              title="Phone"
              value="+92 312 5683411"
            />
            <InfoCard
              icon={<Mail className="h-5 w-5 text-primary" />}
              title="Email"
              value="kamisst046@gmail.com"
            />
            <div className="flex gap-3 pt-2">
              <SocialLink href="https://github.com/EngKamran11" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/kamran-ali" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-primary md:text-4xl">{number}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
    >
      {icon}
    </a>
  );
}
