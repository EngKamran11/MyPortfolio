import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kamran Ali" },
      {
        name: "description",
        content:
          "Get in touch with Kamran Ali — Electrical Engineering student and developer based in Islamabad, Pakistan.",
      },
      { property: "og:title", content: "Contact | Kamran Ali" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-14 max-w-2xl animate-fade-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <MessageCircle className="h-3.5 w-3.5 text-primary" />
            Let's talk
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Have a project in <span className="text-gradient">mind?</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Drop a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info column */}
          <div className="space-y-4 lg:col-span-2">
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              value="kamisst046@gmail.com"
              href="mailto:kamisst046@gmail.com"
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Phone"
              value="+92 312 5683411"
              href="tel:+923125683411"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              title="Location"
              value="Islamabad, Pakistan"
            />

            <div className="gradient-border rounded-2xl p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Find me online
              </h3>
              <div className="mt-4 flex gap-3">
                <SocialButton
                  href="https://github.com/EngKamran11"
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                />
                <SocialButton
                  href="https://linkedin.com/in/kamran-ali"
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <div className="gradient-border relative overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Send a message
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form and I'll reply as soon as possible.
                </p>

                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for your message! I'll get back to you soon.");
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Name" placeholder="Your name" />
                    <Field id="email" label="Email" type="email" placeholder="you@email.com" />
                  </div>
                  <Field id="subject" label="Subject" placeholder="What's it about?" />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="block w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="shine group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={placeholder}
        className="block w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="hover-lift flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur transition-colors hover:border-primary/40">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 truncate text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover-lift flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
    >
      {icon}
    </a>
  );
}
