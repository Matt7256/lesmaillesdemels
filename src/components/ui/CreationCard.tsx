import { cn } from "@/lib/utils";

export type Creation = {
  src: string;
  title: string;
  category?: string;
  width: number;
  height: number;
};

export function CreationCard({
  creation,
  className,
}: {
  creation: Creation;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "group overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      <div className="overflow-hidden">
        <img
          src={creation.src}
          alt={creation.title}
          loading="lazy"
          width={creation.width}
          height={creation.height}
          className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <figcaption className="px-5 py-4">
        <p className="font-serif text-lg text-foreground">{creation.title}</p>
        {creation.category ? (
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {creation.category}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
