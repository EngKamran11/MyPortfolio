import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kamran Ali" },
      { name: "description", content: "Get in touch with Kamran Ali — Electrical Engineering student and developer based in Islamabad, Pakistan." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Get in Touch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part
          of your vision. Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
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

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Social Links
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

        {/* Contact Form Placeholder */}
        <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
          <h2 className="text-lg font-semibold text-foreground">Send a Message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message! I'll get back to you soon.");
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:glow-primary"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
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
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/30">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
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
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
    >
      {icon}
    </a>
  );
}
