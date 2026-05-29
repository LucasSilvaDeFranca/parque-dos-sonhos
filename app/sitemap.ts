import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const primary = [
    "",
    "/o-hotel",
    "/acomodacoes",
    "/atividades",
    "/gastronomia",
    "/day-use",
    "/contato",
  ];
  const institutional = [
    "/passaporte-dos-sonhos",
    "/politicas-de-reservas",
    "/atencao-as-fraudes",
    "/termos-de-uso",
    "/politica-de-privacidade",
  ];

  return [
    ...primary.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...institutional.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
