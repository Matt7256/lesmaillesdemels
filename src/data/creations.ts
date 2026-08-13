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
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export { hero, atelier, catVetements, catEnsembles, catAccessoires, catSurMesure };

export const categories = [
  {
    title: "Vêtements",
    text: "Hauts, gilets et robes réalisés maille après maille.",
    src: catVetements,
    width: 900,
    height: 1100,
  },
  {
    title: "Ensembles",
    text: "Des tenues coordonnées, du nouveau-né à l'adulte.",
    src: catEnsembles,
    width: 900,
    height: 1100,
  },
  {
    title: "Accessoires",
    text: "Chapeaux, sacs et petites pièces à offrir.",
    src: catAccessoires,
    width: 900,
    height: 1100,
  },
  {
    title: "Créations sur mesure",
    text: "Votre idée, adaptée à vos couleurs et à votre taille.",
    src: catSurMesure,
    width: 900,
    height: 1100,
  },
];

export const featured: Creation[] = [
  { src: g1, title: "Ensemble floral", category: "Vêtements", width: 900, height: 1200 },
  { src: g3, title: "Petite robe crochet", category: "Enfant", width: 900, height: 1200 },
  { src: catVetements, title: "Gilet pastel", category: "Vêtements", width: 900, height: 1100 },
  {
    src: catSurMesure,
    title: "Création personnalisée",
    category: "Sur mesure",
    width: 900,
    height: 1100,
  },
];

export const gallery: Creation[] = [
  { src: g1, title: "Ensemble fleuri", category: "Vêtements", width: 900, height: 1200 },
  { src: g2, title: "Ensemble naissance", category: "Naissance", width: 1000, height: 800 },
  { src: g3, title: "Robe crochet", category: "Enfant", width: 900, height: 1200 },
  { src: g4, title: "Détail de maille", category: "Savoir-faire", width: 1000, height: 1000 },
  { src: g5, title: "Ensemble personnalisé", category: "Sur mesure", width: 1000, height: 750 },
  { src: g6, title: "Création pastel", category: "Maison", width: 900, height: 1150 },
  { src: catVetements, title: "Petit gilet", category: "Vêtements", width: 900, height: 1100 },
  { src: catEnsembles, title: "Modèle enfant", category: "Enfant", width: 900, height: 1100 },
  { src: catAccessoires, title: "Chapeau et sac", category: "Accessoires", width: 900, height: 1100 },
  { src: catSurMesure, title: "Projet en cours", category: "Atelier", width: 900, height: 1100 },
  { src: hero, title: "Robe d'été", category: "Vêtements", width: 1600, height: 1200 },
  { src: atelier, title: "Dans l'atelier", category: "Savoir-faire", width: 1408, height: 1056 },
];
