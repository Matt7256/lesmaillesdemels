/**
 * Créations affichées dans les galeries.
 * Pour remplacer une image : déposez la vôtre dans src/assets/
 * puis modifiez l'import correspondant ci-dessous.
 */
import type { Creation } from "@/components/ui/CreationCard";

import hero from "@/assets/hero-crochet.jpg";
import atelier from "@/assets/atelier.jpg";
import catVetements from "@/assets/cat-vetements.jpg";
import catEnsembles from "@/assets/cat-ensembles.jpg";
import catAccessoires from "@/assets/cat-accessoires.jpg";
import catSurMesure from "@/assets/cat-surmesure.jpg";
import topCrochetBlancAsset from "@/assets/top-crochet-blanc.jpeg.asset.json";
import ensembleBleuAsset from "@/assets/ensemble-bleu.jpeg.asset.json";

// Photos des créations (une seule source pour tout le site)
import bobZekleAsset from "@/assets/bob-zekle.jpeg.asset.json";
import bustierZetwalAsset from "@/assets/bustier-zetwal.jpeg.asset.json";
import ensembleBoLanmeAsset from "@/assets/ensemble-bo-lanme.jpeg.asset.json";
import ensembleCopacabanaAsset from "@/assets/ensemble-copacabana.jpeg.asset.json";
import ensembleRioAsset from "@/assets/ensemble-rio.jpeg.asset.json";
import robeLanmouAsset from "@/assets/robe-lanmou.jpeg.asset.json";
import topNatirelAsset from "@/assets/top-natirel.jpeg.asset.json";
import topSoleyAsset from "@/assets/top-soley.jpeg.asset.json";
import topTwopikAsset from "@/assets/top-twopik.jpeg.asset.json";

const topCrochetBlanc = topCrochetBlancAsset.url;
const ensembleBleu = ensembleBleuAsset.url;

export { hero, atelier, catVetements, catEnsembles, catAccessoires, catSurMesure };

export const categories = [
  {
    title: "Vêtements",
    text: "Hauts, gilets et robes réalisés maille après maille.",
    src: topCrochetBlanc,
    width: 720,
    height: 1280,
  },
  {
    title: "Ensembles",
    text: "Des tenues coordonnées, du nouveau-né à l'adulte.",
    src: ensembleBleu,
    width: 375,
    height: 667,
  },
  {
    title: "Accessoires",
    text: "Chapeaux, sacs et petites pièces à offrir.",
    src: catAccessoires,
    width: 900,
    height: 1100,
  },
];

/**
 * Créations affichées sur la page Inspirations.
 * Pour ajouter une création : dupliquez un objet ci-dessous.
 * Pour remplacer une photo : déposez l'image dans src/assets/, importez-la
 * en haut du fichier puis remplacez la valeur de `src`.
 */
export type Inspiration = {
  name: string;
  description: string;
  price: string;
  src: string;
  width: number;
  height: number;
};

export const inspirations: Inspiration[] = [
  {
    name: "Bob Zéklè",
    description: "Un bob crocheté main, pensé pour accompagner les journées ensoleillées.",
    price: "55 €",
    src: bobZekleAsset.url,
    width: 720,
    height: 1280,
  },
  {
    name: "Bustier Zétwal",
    description: "Un bustier réalisé maille après maille, personnalisable selon vos couleurs.",
    price: "35 €",
    src: bustierZetwalAsset.url,
    width: 960,
    height: 1280,
  },
  {
    name: "Ensemble Bo Lanmè",
    description: "Un ensemble coordonné fait main, adaptable à votre taille et à vos envies.",
    price: "57 €",
    src: ensembleBoLanmeAsset.url,
    width: 720,
    height: 1280,
  },
  {
    name: "Ensemble de maillot avec jupe Copacabana",
    description: "Maillot et jupe assortis, crochetés à l'unité pour une pièce unique.",
    price: "85 €",
    src: ensembleCopacabanaAsset.url,
    width: 720,
    height: 1280,
  },
  {
    name: "Ensemble Rio",
    description: "Un ensemble d'été entièrement réalisé à la main, aux finitions soignées.",
    price: "100 €",
    src: ensembleRioAsset.url,
    width: 803,
    height: 1280,
  },
  {
    name: "Robe Lanmou",
    description:
      "Une robe au crochet imaginée avec douceur, personnalisable de la couleur à la longueur.",
    price: "72 €",
    src: robeLanmouAsset.url,
    width: 720,
    height: 1280,
  },
  {
    name: "Top Natirel",
    description: "Un top léger et naturel, crocheté avec patience pour un rendu tout en finesse.",
    price: "30 €",
    src: topNatirelAsset.url,
    width: 1600,
    height: 1504,
  },
  {
    name: "Top Soley — Collection An ba Soley",
    description: "Une pièce lumineuse de la collection An ba Soley, réalisée entièrement à la main.",
    price: "42 €",
    src: topSoleyAsset.url,
    width: 960,
    height: 1280,
  },
  {
    name: "Top Twopik",
    description: "Un top aux airs tropicaux, adaptable à vos couleurs et à votre taille.",
    price: "30 €",
    src: topTwopikAsset.url,
    width: 806,
    height: 1280,
  },
];

/**
 * Sélection affichée sur l'accueil : reprend automatiquement les premières
 * créations de la page Inspirations (mêmes photos, mêmes noms, même ordre).
 */
export const featured: Creation[] = inspirations.slice(0, 3).map((item) => ({
  src: item.src,
  title: item.name,
  width: item.width,
  height: item.height,
}));
