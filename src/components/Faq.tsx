import { site } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ExternalButton } from "@/components/ui/ActionButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "Comment commander une création ?",
    a: "Pour commander une création, il suffit de nous contacter par WhatsApp ou Instagram. Présentez-nous votre idée, le modèle souhaité et, si possible, une photo ou une inspiration. Nous échangerons ensuite avec vous pour définir les détails de votre création et établir votre commande.",
  },
  {
    q: "Puis-je choisir les couleurs ?",
    a: "Oui ! Les couleurs peuvent être adaptées selon vos envies et selon les possibilités disponibles. Lors de votre commande, nous pouvons échanger ensemble sur les couleurs qui correspondent le mieux à votre idée.",
  },
  {
    q: "Puis-je choisir la taille ?",
    a: "Oui. Les créations peuvent être adaptées à la taille souhaitée. Les mesures nécessaires pourront vous être demandées afin que la pièce soit réalisée au plus près de vos besoins.",
  },
  {
    q: "Combien de temps faut-il pour réaliser une création ?",
    a: "Le délai de fabrication dépend du modèle, de sa taille, du niveau de détail et du nombre de commandes en cours. Le délai estimé vous sera communiqué au moment de la commande.",
  },
  {
    q: "Est-ce que chaque création est personnalisable ?",
    a: "Oui. Chaque création est réalisée à la main et peut être adaptée selon vos envies : couleurs, taille, longueur, détails et autres éléments selon le modèle.",
  },
  {
    q: "Comment puis-je vous contacter ?",
    a: "Vous pouvez nous contacter directement sur WhatsApp ou Instagram pour discuter de votre projet et passer commande.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="bg-secondary/50">
      <SectionHeading eyebrow="Questions fréquentes" title="FAQ" />

      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-12 w-full max-w-3xl"
      >
        {questions.map((item, i) => (
          <AccordionItem key={item.q} value={`q-${i}`} className="border-border/70">
            <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-caramel hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 flex justify-center">
        <ExternalButton href={site.whatsapp}>Nous contacter sur WhatsApp</ExternalButton>
      </div>
    </Section>
  );
}
