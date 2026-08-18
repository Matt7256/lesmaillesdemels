import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactCta } from "@/components/ContactCta";
import { inspirations } from "@/data/creations";

export const Route = createFileRoute("/inspirations")({
  head: () => ({
    meta: [
      { title: `Inspirations — ${site.brandName}` },
      {
        name: "description",
        content:
          "Galerie de créations au crochet faites main : vêtements, ensembles, accessoires et modèles enfant à adapter selon vos envies.",
      },
      { property: "og:title", content: `Inspirations — ${site.brandName}` },
      {
        property: "og:description",
        content:
          "Une galerie de pièces réalisées à la main. Certaines créations peuvent être recréées ou adaptées.",
      },
    ],
  }),
  component: Inspirations,
});

function Inspirations() {
  return (
    <>
      <Section className="pb-6 pt-14">
        <SectionHeading
          eyebrow="Galerie"
          title="Inspirations"
          intro="Un aperçu des créations réalisées à l'atelier. Utilisez cette galerie comme point de départ pour imaginer votre propre pièce."
        />
      </Section>

      <Section className="pt-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inspirations.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 py-5">
                <h2 className="font-serif text-xl leading-snug text-foreground">
                  {item.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-4 text-base font-medium text-caramel">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ContactCta
        title="Vous aimez une création ?"
        text="Certaines pièces peuvent être recréées ou adaptées. Contactez-nous pour en discuter."
        whatsappLabel="WhatsApp"
        instagramLabel="Instagram"
      />
    </>
  );
}
