import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
            <Zap className="h-4 w-4" />
            <span className="absolute inset-0 rounded-lg bg-primary/40 animate-pulse-ring" />
          </span>
          <span>Kamran<span className="text-primary">.</span></span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-surface/60 p-1 backdrop-blur md:flex">
          {navLinks.map((link) => {
            const isActive = router.state.location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-0 rounded-full bg-primary shadow-lg shadow-primary/40" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <button
          className="rounded-lg border border-border p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 px-6 pb-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = router.state.location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

