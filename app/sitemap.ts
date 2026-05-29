import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

type Route = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  /** Paths relativos (começando com /). Prefixados com SITE.url no output. */
  images?: readonly string[];
};

const PRIMARY: readonly Route[] = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly",
    images: [
      "/images/hero/01-cachoeira.jpg",
      "/images/hero/02-tirolesa-lua.jpg",
      "/images/hero/03-trilha.jpg",
      "/images/hero/04-cavalgada.jpg",
      "/images/hero/05-boia-cross.jpg",
    ],
  },
  {
    path: "/o-hotel",
    priority: 0.9,
    changeFrequency: "monthly",
    images: ["/images/site-atual/o-hotel-hero.jpg"],
  },
  {
    path: "/acomodacoes",
    priority: 0.9,
    changeFrequency: "monthly",
    images: ["/images/site-atual/quarto-suite.jpg"],
  },
  {
    path: "/atividades",
    priority: 0.9,
    changeFrequency: "monthly",
    images: ["/images/site-atual/tirolesa-voadora.jpg"],
  },
  {
    path: "/gastronomia",
    priority: 0.9,
    changeFrequency: "monthly",
    images: [
      "/images/site-atual/restaurante.jpg",
      "/images/gastronomia/cafe-da-manha/01.jpg",
      "/images/gastronomia/almoco/01.jpg",
      "/images/gastronomia/jantar/01.jpg",
    ],
  },
  {
    path: "/day-use",
    priority: 0.9,
    changeFrequency: "monthly",
    images: [
      "/images/site-atual/day-use.jpg",
      "/images/site-atual/visitacao.jpg",
    ],
  },
  {
    path: "/passaporte-dos-sonhos",
    priority: 0.7,
    changeFrequency: "monthly",
    images: ["/images/site-atual/hero-panorama.jpg"],
  },
  {
    path: "/contato",
    priority: 0.8,
    changeFrequency: "yearly",
    images: ["/images/site-atual/criancas.jpg"],
  },
];

const INSTITUTIONAL: readonly Route[] = [
  { path: "/politicas-de-reservas", priority: 0.3, changeFrequency: "yearly" },
  { path: "/atencao-as-fraudes", priority: 0.3, changeFrequency: "yearly" },
  { path: "/termos-de-uso", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...PRIMARY, ...INSTITUTIONAL].map(
    ({ path, priority, changeFrequency, images }) => ({
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
      ...(images && { images: images.map((img) => `${SITE.url}${img}`) }),
    })
  );
}
