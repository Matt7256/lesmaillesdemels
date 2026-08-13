import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:bg-accent hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-border bg-card/60 text-foreground hover:border-caramel hover:bg-secondary hover:-translate-y-0.5",
  ghost: "text-foreground/80 hover:text-caramel",
};

type Props = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ExternalButton({
  href,
  variant = "primary",
  className,
  children,
}: Props & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}

export function LinkButton({
  to,
  variant = "outline",
  className,
  children,
}: Props & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
