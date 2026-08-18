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
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {gallery.map((creation, i) => (
            <CreationCard
              key={`${creation.title}-${i}`}
              creation={creation}
              className="break-inside-avoid"
            />
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
