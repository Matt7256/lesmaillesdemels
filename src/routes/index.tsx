import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { ExternalButton, LinkButton } from "@/components/ui/ActionButton";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CreationCard } from "@/components/ui/CreationCard";
import { ContactCta } from "@/components/ContactCta";
import { Faq } from "@/components/Faq";
import { categories, featured, hero } from "@/data/creations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.brandName} — Créations au crochet faites main` },
      {
        name: "description",
        content:
          "Vêtements, ensembles et accessoires au crochet faits main et personnalisables. Écrivez-nous sur WhatsApp pour votre création unique.",
      },
      {
        property: "og:title",
        content: `${site.brandName} — Créations au crochet faites main`,
      },
      {
        property: "og:description",
        content:
          "Chaque pièce est réalisée à la main et adaptée à vos envies : couleurs, tailles et détails.",
      },
    ],
  }),
  component: Accueil,
});

function Accueil() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 pb-6 pt-10 sm:px-8 md:pb-12 md:pt-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="animate-rise order-2 md:order-1">
            <p className="eyebrow">Fait main · Pièces uniques</p>
            <h1 className="mt-5 text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              Des créations au crochet, imaginées pour vous.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Chaque pièce est réalisée entièrement à la main, maille après maille, et
              peut être personnalisée selon vos couleurs, votre taille et vos envies.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ExternalButton href={site.whatsapp}>
                Commander sur WhatsApp
              </ExternalButton>
              <LinkButton to="/inspirations">Voir les inspirations</LinkButton>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={hero}
                alt="Robe au crochet faite main présentée près d'une fenêtre"
                width={1600}
                height={1200}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] md:aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <Section className="pb-8">
        <SectionHeading
          eyebrow="L'esprit de l'atelier"
          title="Des pièces uniques, faites à la main"
          intro="Chaque création est réalisée avec soin, sans production en série. Le modèle, les couleurs, les finitions et les dimensions peuvent être adaptés selon vos souhaits, pour obtenir une pièce qui vous ressemble."
        />
      </Section>

      {/* CATÉGORIES */}
      <Section className="pt-8">
        <SectionHeading eyebrow="Nos univers" title="Ce que nous créons" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={cat.src}
                  alt={cat.title}
                  loading="lazy"
                  width={cat.width}
                  height={cat.height}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-xl text-foreground">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CRÉATIONS */}
      <Section className="bg-secondary/50">
        <SectionHeading
          eyebrow="Portfolio"
          title="Quelques créations"
          intro="Un aperçu de pièces réalisées à l'atelier. Elles peuvent servir d'inspiration pour votre propre projet."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((creation) => (
            <CreationCard key={creation.title} creation={creation} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <LinkButton to="/inspirations">Voir toutes les inspirations</LinkButton>
        </div>
      </Section>

      <Faq />

      <ContactCta
        title="Une idée en tête ?"
        text="Envie d'une création unique ? Écrivez-nous et parlons de votre projet."
      />
    </>
  );
}
