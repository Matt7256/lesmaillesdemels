import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site, navLinks } from "@/config/site";
import { ExternalButton } from "@/components/ui/ActionButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-serif text-xl tracking-wide text-foreground sm:text-2xl"
        >
          {site.brandName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors hover:text-caramel ${
                pathname === link.to
                  ? "text-caramel"
                  : "text-foreground/75"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ExternalButton href={site.whatsapp} className="px-5 py-2.5">
            Commander
          </ExternalButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`border-b border-border/60 py-3.5 text-base last:border-0 ${
                  pathname === link.to ? "text-caramel" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ExternalButton href={site.whatsapp} className="mt-5 w-full">
              Commander sur WhatsApp
            </ExternalButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
