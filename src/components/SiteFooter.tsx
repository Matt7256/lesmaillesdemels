import { Link } from "@tanstack/react-router";
import { site, navLinks } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-foreground">{site.brandName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="eyebrow">Navigation</p>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-foreground/80 transition-colors hover:text-caramel"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="eyebrow">Contact</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/80 transition-colors hover:text-caramel"
          >
            Instagram
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/80 transition-colors hover:text-caramel"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto w-full max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
          © {site.year} {site.brandName} — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
