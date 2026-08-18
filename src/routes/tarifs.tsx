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

/** Modifiez librement les prix et les exemples ci-dessous. */
const offres = [
  {
    title: "Petites créations",
    price: "Sur demande",
    items: ["Accessoires", "Petits modèles", "Détails personnalisés"],
  },
  {
    title: "Vêtements",
    price: "Sur demande",
    items: ["Hauts", "Gilets", "Robes", "Ensembles"],
    highlight: true,
  },
];


function Tarifs() {
  return (
    <>
      <Section className="pb-8 pt-14">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des tarifs simples et transparents"
          intro="Voici une base indicative pour vous donner une idée. Le tarif exact dépend toujours du projet, des matières choisies et du temps de réalisation."
        />
      </Section>

      <Section className="pt-4">
        <div className="grid gap-6 md:grid-cols-2">
          {offres.map((offre) => (
            <article
              key={offre.title}
              className={`flex flex-col rounded-2xl border px-7 py-9 shadow-soft transition-transform duration-500 hover:-translate-y-1 ${
                offre.highlight
                  ? "border-caramel/50 bg-secondary"
                  : "border-border/70 bg-card"
              }`}
            >
              <h3 className="text-2xl text-foreground">{offre.title}</h3>
              <p className="mt-3 font-serif text-3xl text-caramel">{offre.price}</p>
              <ul className="mt-7 space-y-3 border-t border-border/70 pt-6">
                {offre.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-caramel"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <ExternalButton
                  href={site.whatsapp}
                  variant={offre.highlight ? "primary" : "outline"}
                  className="w-full"
                >
                  Demander un devis
                </ExternalButton>
              </div>
            </article>
          ))}
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
