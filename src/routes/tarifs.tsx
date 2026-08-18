import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ExternalButton } from "@/components/ui/ActionButton";
import { ContactCta } from "@/components/ContactCta";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: `Tarifs — ${site.brandName}` },
      {
        name: "description",
        content:
          "Tarifs indicatifs des créations au crochet faites main  : petites créations et vêtements. Demandez votre devis.",
      },
      { property: "og:title", content: `Tarifs — ${site.brandName}` },
      {
        property: "og:description",
        content:
          "Chaque création étant réalisée à la main, le prix varie selon le modèle et les personnalisations.",
      },
    ],
  }),
  component: Tarifs,
});

/** Modifiez librement les prix ci-dessous. */
const creations = [
  { name: "Haut", price: "30 €" },
  { name: "Jupe / Short", price: "45 €" },
  { name: "Ensemble", price: "50 €" },
  { name: "Bonnet Granny Square", price: "50 €" },
  { name: "Sac", price: "50 €" },
  { name: "Haut de maillot", price: "25 €" },
  { name: "Robe", price: "60 €" },
  { name: "Chemise", price: "80 €" },
  { name: "Paréo", price: "35 €" },
  { name: "Bob", price: "50 €" },
  { name: "Pantalon", price: "80 €" },
  { name: "Ensemble de maillot", price: "45 €" },
];

const supplements = [
  { name: "Accessoires", price: "+5 €" },
  { name: "Plus de 1 couleur", price: "+5 €" },
  { name: "Laine sequin", price: "+10 €" },
  { name: "Froufrous", price: "+5 €" },
];

function PriceList({
  title,
  items,
  highlight,
}: {
  title: string;
  items: { name: string; price: string }[];
  highlight?: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border px-7 py-9 shadow-soft transition-transform duration-500 hover:-translate-y-1 ${
        highlight ? "border-caramel/50 bg-secondary" : "border-border/70 bg-card"
      }`}
    >
      <h3 className="text-2xl text-foreground">{title}</h3>
      <ul className="mt-7 space-y-3 border-t border-border/70 pt-6">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-3 text-sm text-muted-foreground last:border-0 last:pb-0"
          >
            <span>{item.name}</span>
            <span className="shrink-0 font-serif text-lg text-caramel">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <ExternalButton
          href={site.whatsapp}
          variant={highlight ? "primary" : "outline"}
          className="w-full"
        >
          Demander un devis
        </ExternalButton>
      </div>
    </article>
  );
}

function Tarifs() {
  return (
    <>
      <Section className="pb-8 pt-14">
        <SectionHeading
          eyebrow="Tarifs"
          title="Prix des commandes"
          intro="Voici une base indicative pour vous donner une idée. Le tarif exact dépend toujours du projet, des matières choisies et du temps de réalisation."
        />
      </Section>

      <Section className="pt-4">
        <div className="grid gap-6 md:grid-cols-2">
          <PriceList title="Créations" items={creations} highlight />
          <PriceList title="Suppléments" items={supplements} />
        </div>

        <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border/70 bg-card px-7 py-6 text-center text-sm leading-relaxed text-muted-foreground">
          Les tarifs sont indicatifs. Chaque création étant réalisée à la main, le prix
          peut varier selon le modèle et les personnalisations demandées.
        </p>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Pour découvrir les dernières créations, rendez-vous sur{" "}
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-caramel underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          .
        </p>
      </Section>

      <ContactCta
        title="Demander un devis"
        text="Envoyez-nous le modèle souhaité, la taille et les couleurs : nous vous répondrons avec un tarif précis."
      />
    </>
  );
}
