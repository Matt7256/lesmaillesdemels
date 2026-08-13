import { site } from "@/config/site";
import { ExternalButton } from "@/components/ui/ActionButton";
import { Section } from "@/components/ui/Section";

export function ContactCta({
  title,
  text,
  whatsappLabel = "Commander sur WhatsApp",
  instagramLabel = "Nous suivre sur Instagram",
}: {
  title: string;
  text: string;
  whatsappLabel?: string;
  instagramLabel?: string;
}) {
  return (
    <Section className="pb-24">
      <div className="surface-grain relative overflow-hidden rounded-3xl border border-border bg-secondary px-6 py-16 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          {text}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ExternalButton href={site.whatsapp}>{whatsappLabel}</ExternalButton>
          <ExternalButton href={site.instagram} variant="outline">
            {instagramLabel}
          </ExternalButton>
        </div>
      </div>
    </Section>
  );
}
