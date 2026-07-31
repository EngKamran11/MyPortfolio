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
        content:
          "Portfolio of Kamran Ali — final-year BS Electrical Engineering student specializing in power systems, robotics, DSP and Flutter development.",
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
    <div className="bg-[#e6dede] px-3 py-6 md:px-10 md:py-10">
      {/* HERO */}
      <section className="portfolio-stage relative mx-auto max-w-5xl overflow-hidden bg-[#0d1b26] shadow-[0_20px_55px_rgba(22,27,34,0.25)]">
        <div className="pointer-events-none absolute left-0 top-36 h-px w-20 bg-primary" />
        <div className="pointer-events-none absolute right-10 top-24 h-10 w-10 rotate-45 border-r border-t border-primary/20" />
        <div className="relative overflow-hidden bg-[#0d1b26]">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div
            className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
            aria-hidden
          />

          <div className="relative px-7 pb-0 pt-12 sm:px-10 md:px-16 md:pt-16">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_0.9fr]">
              <div className="order-2 z-10 animate-fade-up pb-12 md:order-1 md:pb-14">
                <p className="mb-4 text-sm font-medium tracking-wide text-foreground">
                  Hello<span className="text-primary">.</span>
                </p>
                <p className="mb-3 border-l-2 border-primary pl-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Electrical Engineer · Power Systems
                </p>
                <h1 className="font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
                  I'm Kamran Ali
                  <span className="mt-1 block text-2xl tracking-[-0.03em] text-foreground sm:text-4xl">
                    Electrical Engineer
                  </span>
                </h1>
                <p className="mt-5 max-w-lg text-xs leading-6 text-muted-foreground sm:text-sm">
                  Final-year BS Electrical Engineering student at COMSATS University Islamabad,
                  specializing in power systems, embedded control, DSP and cross-platform app
                  development. I love turning circuits and code into things that work in the real
                  world.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:-translate-y-0.5"
                  >
                    Hire Me
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="/Kamran-Ali-CV.docx"
                    download="Kamran-Ali-CV.docx"
                    className="inline-flex items-center gap-2 border border-primary/50 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-primary hover:text-white"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </div>

              {/* Portrait avatar */}
              <div
                className="relative order-1 mx-auto animate-fade-up md:order-2"
                style={{ animationDelay: "150ms" }}
              >
                <div className="relative h-[280px] w-[280px] md:h-[340px] md:w-[340px]">
                  <div className="absolute inset-3 rounded-full border-[12px] border-primary/90 shadow-[0_0_45px_rgba(247,88,68,0.2)]" />
                  <div className="absolute inset-0 rounded-full border border-primary/20" />
                  <div className="absolute -left-5 top-1/2 h-10 w-10 rotate-45 border-b-2 border-l-2 border-primary/30" />
                  <div className="relative h-full w-full overflow-hidden rounded-full p-5">
                    <img
                      src="/images/pfp.JPG"
                      alt="Kamran Ali portrait"
                      width={380}
                      height={380}
                      loading="eager"
                      className="h-full w-full rounded-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute bottom-5 right-0 flex items-center gap-2 bg-[#132633] px-4 py-2 shadow-xl">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Open to work</span>
                  </div>
                  <div className="hidden">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Power Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social row */}
            <div className="grid border-t border-white/5 sm:grid-cols-2 lg:grid-cols-4">
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
                href="https://www.linkedin.com/in/kamran-ali-2a24a6357"
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
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-5xl border-b border-white/5 bg-[#10212d]">
        <div className="grid grid-cols-2 gap-8 px-7 py-10 sm:px-10 md:grid-cols-4 md:px-16">
          <Stat number="8+" label="Projects Completed" />
          <Stat number="4+" label="Internships" />
          <Stat number="5+" label="Languages / Tools" />
          <Stat number="2027" label="Expected Graduation" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-5xl bg-[#0d1b26] px-7 py-14 sm:px-10 md:px-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              About Me
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
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

          <div className="grid gap-0 border-l border-primary/60 pl-6">
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

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-l-2 border-primary bg-[#10212d] p-8">
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
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
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
      className="group flex items-center gap-4 border-r border-white/5 bg-[#0d1b26] p-4 transition-all hover:bg-[#132633]"
    >
      <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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

function FocusCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="group flex gap-4 border-b border-white/5 bg-transparent p-5 transition-all hover:border-primary/40">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
