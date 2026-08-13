/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURATION DU SITE — À MODIFIER ICI UNIQUEMENT
 * ─────────────────────────────────────────────────────────────
 *  Remplacez simplement les valeurs ci-dessous :
 *   - brandName  : le nom de la marque
 *   - whatsapp   : le lien WhatsApp (ex : https://wa.me/33600000000)
 *   - instagram  : le lien Instagram (ex : https://instagram.com/moncompte)
 */
export const site = {
  brandName: "Les Mailles de Mels",
  tagline: "Créations au crochet faites à la main",
  whatsapp: "[WHATSAPP_LINK]",
  instagram: "[INSTAGRAM_LINK]",
  year: 2026,
} as const;

export const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/inspirations", label: "Inspirations" },
] as const;
