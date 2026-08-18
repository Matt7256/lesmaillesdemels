import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Scissors } from "lucide-react";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactCta } from "@/components/ContactCta";
import { Lys } from "@/components/ui/Lys";

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
      <Section className="relative overflow-hidden pb-8 pt-14">
        <Lys className="absolute right-6 top-4 opacity-60 md:right-10" size={26} />
        <Lys
          className="absolute bottom-10 left-2 hidden opacity-50 md:block"
          size={22}
        />
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="animate-rise">
            <p className="eyebrow">L'atelier</p>
            <h1 className="mt-5 text-4xl leading-[1.1] text-foreground sm:text-5xl">
              Bienvenue chez Les Mailles de Mels 🧶✨
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Je m'appelle Mélissa, j'ai 18 ans, et je suis la créatrice des{" "}
              <span className="font-medium text-foreground">Mailles de Mels</span>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              J'ai découvert le crochet grâce à ma mère, qui m'a transmis cette passion
              et l'amour du fait-main. Au fil du temps, le crochet est devenu bien plus
              qu'un simple loisir : c'est devenu une véritable passion, un moyen de
              laisser parler ma créativité et de créer des pièces uniques.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Aujourd'hui, j'ai décidé de transformer cette passion en travail et de
              faire vivre mon univers à travers mes créations. Chaque pièce est réalisée
              avec soin, patience et beaucoup d'amour, pour vous proposer des créations
              originales qui vous ressemblent. 💛
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Les Mailles de Mels, c'est donc une histoire de passion, de transmission et
              de créativité… une maille après l'autre. 🧶✨
            </p>
          </div>

          <div className="relative">
            <Lys
              className="absolute -left-3 -top-4 z-10 opacity-70 sm:-left-5 sm:-top-5"
              size={30}
            />
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
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-secondary/50">
        <Lys
          className="absolute right-8 top-10 opacity-50 md:right-16"
          size={24}
        />
        <SectionHeading
          eyebrow="Le fait main"
          title="Pourquoi choisir les Mailles de Mels ?"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {raisons.map((r) => (
            <article
              key={r.title}
              className="rounded-2xl border border-border/70 bg-card px-7 py-9 shadow-soft transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-butter-deep">
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
