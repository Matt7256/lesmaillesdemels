import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
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
            className="inline-flex items-center gap-2 break-words text-sm text-foreground/80 transition-colors hover:text-caramel"
          >
            <Instagram size={16} strokeWidth={1.6} />
            Instagram — {site.instagramHandle}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 break-words text-sm text-foreground/80 transition-colors hover:text-caramel"
          >
            <MessageCircle size={16} strokeWidth={1.6} />
            WhatsApp — {site.whatsappNumber}
          </a>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 text-center sm:px-8">
          <p className="text-xs text-muted-foreground">
            © {site.year} {site.brandName} — Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/80">
            Site créé par{" "}
            <a
              href="https://instagram.com/mxtt_lpn"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-border transition-colors hover:text-caramel"
            >
              Matthieu Luperon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

