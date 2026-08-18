import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Scissors } from "lucide-react";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactCta } from "@/components/ContactCta";
import { atelier } from "@/data/creations";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: `À propos — ${site.brandName}` },
      {
        name: "description",
        content:
          "La passion du crochet, le fait main et l'attention aux détails : découvrez l'atelier et la démarche derrière chaque création.",
      },
      { property: "og:title", content: `À propos — ${site.brandName}` },
      {
        property: "og:description",
        content:
          "Des créations au crochet réalisées à la main, avec soin et personnalisables selon vos envies.",
      },
    ],
  }),
  component: APropos,
});

const raisons = [
  {
    icon: Sparkles,
    title: "Chaque pièce est unique",
    text: "Chaque pièce est réalisée à l'unité, selon les envies du client et avec ses propres finitions.",
  },
  {
    icon: Heart,
    title: "Personnalisable",
    text: "Couleurs, taille, longueur, détails : chaque création s'adapte à vos préférences et à la personne qui la portera.",
  },
  {
    icon: Scissors,
    title: "Réalisée avec soin",
    text: "Les pièces sont réalisées avec amour. Le temps passé sur chaque création permet de soigner chaque finition et d'apporter une attention particulière aux détails.",
  },
];

function APropos() {
  return (
    <>
      <Section className="pb-8 pt-14">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="animate-rise">
            <p className="eyebrow">L'atelier</p>
            <h1 className="mt-5 text-4xl leading-[1.1] text-foreground sm:text-5xl">
              Des créations faites avec passion
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              [Texte à personnaliser] Le crochet est avant tout une passion : celle de
              transformer une simple pelote en une pièce que l'on aura plaisir à porter
              ou à offrir. Chaque projet commence par une idée, une couleur ou une
              occasion particulière.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              [Texte à personnaliser] Tout est réalisé à la main, sans production en
              série. Les finitions, les assemblages et les détails demandent du temps,
              et c'est précisément ce temps qui donne à chaque création son caractère.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              [Texte à personnaliser] Vous avez une envie précise, un modèle en tête ou
              simplement une palette de couleurs ? Il est possible d'adapter une
              création existante ou d'imaginer une pièce entièrement nouvelle avec vous.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={atelier}
              alt="Atelier de crochet avec pelotes de coton naturel"
              loading="lazy"
              width={1408}
              height={1056}
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] md:aspect-[4/5]"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <SectionHeading
          eyebrow="Le fait main"
          title="Pourquoi choisir une création faite main ?"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {raisons.map((r) => (
            <article
              key={r.title}
              className="rounded-2xl border border-border/70 bg-card px-7 py-9 shadow-soft transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-caramel">
                <r.icon size={22} strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 text-2xl text-foreground">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <ContactCta
        title="Vous avez une idée ? Parlons-en."
        text="Décrivez-nous votre projet en quelques mots : modèle, couleurs, taille et occasion."
        instagramLabel="Voir Instagram"
      />
    </>
  );
}
