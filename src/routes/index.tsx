import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Download,
  Cpu,
  Zap,
  Radio,
  Waves,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamran Ali — Electrical Engineer & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Kamran Ali — final-year BS Electrical Engineering student specializing in power systems, robotics, DSP and Flutter development.",
      },
      { property: "og:title", content: "Kamran Ali — Electrical Engineer & Developer" },
      {
        property: "og:description",
        content: "Power systems, robotics, DSP and Flutter — projects, skills and experience.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/50 bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="animate-fade-up">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Electrical Engineer · Power Systems
              </p>
              <h1 className="font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
                <span className="text-primary">Hello,</span> I'm Kamran Ali
                <span className="mt-2 block text-foreground/90">
                  based in <span className="text-primary">Islamabad</span>
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Final-year BS Electrical Engineering student at COMSATS University Islamabad,
                specializing in power systems, embedded control, DSP and cross-platform app
                development. I love turning circuits and code into things that work in the real
                world.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:glow-primary"
                >
                  Hire Me
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="mailto:kamisst046@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Heart-framed monogram avatar */}
            <div className="relative mx-auto animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="relative h-[280px] w-[280px] animate-float md:h-[360px] md:w-[360px]">

                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
                <svg
                  viewBox="0 0 200 200"
                  className="relative h-full w-full drop-shadow-[0_25px_60px_rgba(220,50,50,0.45)]"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.68 0.24 25)" />
                      <stop offset="100%" stopColor="oklch(0.52 0.2 20)" />
                    </linearGradient>
                    <pattern id="heartGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                      <path d="M12 0 L0 0 0 12" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <path
                    d="M100 180 C 100 180, 20 130, 20 70 C 20 35, 50 15, 75 30 C 88 38, 100 55, 100 55 C 100 55, 112 38, 125 30 C 150 15, 180 35, 180 70 C 180 130, 100 180, 100 180 Z"
                    fill="url(#heartGrad)"
                  />
                  <path
                    d="M100 180 C 100 180, 20 130, 20 70 C 20 35, 50 15, 75 30 C 88 38, 100 55, 100 55 C 100 55, 112 38, 125 30 C 150 15, 180 35, 180 70 C 180 130, 100 180, 100 180 Z"
                    fill="url(#heartGrid)"
                  />
                  <text
                    x="100"
                    y="115"
                    textAnchor="middle"
                    fontFamily="Space Grotesk, sans-serif"
                    fontWeight="700"
                    fontSize="60"
                    fill="white"
                    letterSpacing="-2"
                  >
                    KA
                  </text>
                </svg>
                <div className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 shadow-xl backdrop-blur">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">Open to work</span>
                </div>
                <div className="absolute -left-2 top-8 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 shadow-xl backdrop-blur">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">Power Engineer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social row */}
          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <SocialCard
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
              sub="EngKamran11"
              href="https://github.com/EngKamran11"
            />
            <SocialCard
              icon={<Linkedin className="h-5 w-5" />}
              label="LinkedIn"
              sub="Kamran Ali"
              href="https://linkedin.com/in/kamran-ali"
            />
            <SocialCard
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              sub="kamisst046@gmail.com"
              href="mailto:kamisst046@gmail.com"
            />
            <SocialCard
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              sub="+92 312 5683411"
              href="tel:+923125683411"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border/50 bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          <Stat number="8+" label="Projects Completed" />
          <Stat number="4+" label="Internships" />
          <Stat number="5+" label="Languages / Tools" />
          <Stat number="2027" label="Expected Graduation" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              About Me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A power engineer who builds things that <span className="text-primary">move</span>.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              From autonomous sumo robots and line-followers to MPPT solar trackers and
              MATLAB-simulated FIR filters, I enjoy the full stack of engineering — from the
              schematic to the shipped product. On the software side, I write C++, Python and
              Flutter apps that pair well with the hardware I design.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Currently sharpening my skills in signal processing, power electronics, and mobile
              development, and always looking for a challenging problem to solve.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Islamabad, Pakistan
            </div>
          </div>

          <div className="grid gap-4">
            <FocusCard
              icon={<Zap className="h-5 w-5" />}
              title="Power Systems"
              text="Circuit analysis, power electronics, MPPT, voltage regulation."
            />
            <FocusCard
              icon={<Cpu className="h-5 w-5" />}
              title="Embedded & Robotics"
              text="Microcontrollers, sensors, motor control, autonomous behaviour."
            />
            <FocusCard
              icon={<Waves className="h-5 w-5" />}
              title="Signal Processing"
              text="FIR filter design, noise cancellation, MATLAB & Simulink modelling."
            />
            <FocusCard
              icon={<Radio className="h-5 w-5" />}
              title="App Development"
              text="Cross-platform Flutter apps with real APIs and clean UI."
            />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              I'm available for internships, freelance, and collaboration.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary"
          >
            See My Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SocialCard({
  icon,
  label,
  sub,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-4 backdrop-blur transition-all hover:border-primary/50 hover:bg-surface"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="truncate text-xs text-muted-foreground">{sub}</p>
      </div>
    </a>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-foreground md:text-5xl">
        {number}
        <span className="text-primary">.</span>
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function FocusCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/40">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
