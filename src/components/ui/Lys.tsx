import { cn } from "@/lib/utils";

/**
 * Petite fleur de lys décorative, en jaune pastel de l'identité du site.
 * Purement ornementale : aria-hidden et pointer-events désactivés.
 */
export function Lys({
  className,
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none text-butter", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M12 21V9" />
        <path d="M12 9c0-3.4 1.4-6 3.4-7.4C15.9 4 15 7 12 9Z" fill="currentColor" fillOpacity="0.35" />
        <path d="M12 9c0-3.4-1.4-6-3.4-7.4C8.1 4 9 7 12 9Z" fill="currentColor" fillOpacity="0.35" />
        <path d="M12 11c2.6-2.2 5.4-2.6 7.4-1.7-1.4 2.4-4.2 3.8-7.4 3.2Z" fill="currentColor" fillOpacity="0.22" />
        <path d="M12 11c-2.6-2.2-5.4-2.6-7.4-1.7 1.4 2.4 4.2 3.8 7.4 3.2Z" fill="currentColor" fillOpacity="0.22" />
        <path d="M8.6 18.4h6.8" />
      </g>
    </svg>
  );
}
