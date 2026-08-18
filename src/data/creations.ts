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
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import topCrochetBlancAsset from "@/assets/top-crochet-blanc.jpeg.asset.json";
import ensembleBleuAsset from "@/assets/ensemble-bleu.jpeg.asset.json";

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


export const gallery: Creation[] = [
  { src: g1, title: "Ensemble fleuri", category: "Vêtements", width: 900, height: 1200 },
  { src: g3, title: "Robe crochet", category: "Enfant", width: 900, height: 1200 },
  { src: g5, title: "Ensemble personnalisé", category: "Sur mesure", width: 1000, height: 750 },
  { src: g6, title: "Création pastel", category: "Maison", width: 900, height: 1150 },
  { src: catVetements, title: "Petit gilet", category: "Vêtements", width: 900, height: 1100 },
  { src: catAccessoires, title: "Chapeau et sac", category: "Accessoires", width: 900, height: 1100 },
  { src: hero, title: "Robe d'été", category: "Vêtements", width: 1600, height: 1200 },
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
    src: catAccessoires,
    width: 900,
    height: 1100,
  },
  {
    name: "Bustier Zétwal",
    description: "Un bustier réalisé maille après maille, personnalisable selon vos couleurs.",
    price: "35 €",
    src: topCrochetBlanc,
    width: 720,
    height: 1280,
  },
  {
    name: "Ensemble Bo Lanmè",
    description: "Un ensemble coordonné fait main, adaptable à votre taille et à vos envies.",
    price: "57 €",
    src: ensembleBleu,
    width: 375,
    height: 667,
  },
  {
    name: "Ensemble de maillot avec jupe Copacabana",
    description: "Maillot et jupe assortis, crochetés à l'unité pour une pièce unique.",
    price: "85 €",
    src: g5,
    width: 1000,
    height: 750,
  },
  {
    name: "Ensemble Rio",
    description: "Un ensemble d'été entièrement réalisé à la main, aux finitions soignées.",
    price: "100 €",
    src: g1,
    width: 900,
    height: 1200,
  },
  {
    name: "Robe Lanmou",
    description: "Une robe au crochet imaginée avec douceur, personnalisable de la couleur à la longueur.",
    price: "72 €",
    src: g3,
    width: 900,
    height: 1200,
  },
  {
    name: "Top Natirel",
    description: "Un top léger et naturel, crocheté avec patience pour un rendu tout en finesse.",
    price: "30 €",
    src: catVetements,
    width: 900,
    height: 1100,
  },
  {
    name: "Top Soley — Collection An ba Soley",
    description: "Une pièce lumineuse de la collection An ba Soley, réalisée entièrement à la main.",
    price: "42 €",
    src: g6,
    width: 900,
    height: 1150,
  },
  {
    name: "Top Twopik",
    description: "Un top aux airs tropicaux, adaptable à vos couleurs et à votre taille.",
    price: "30 €",
    src: hero,
    width: 1600,
    height: 1200,
  },
];
