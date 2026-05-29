/**
 * Conteúdo da página de Gastronomia.
 * Fonte: https://parquedossonhos.com.br/gastronomia/ (scrape mai/2026).
 *
 * Cada refeição tem uma galeria de 12 fotos reais, baixadas do site oficial
 * para `public/images/gastronomia/<slug>/01.jpg`..`12.jpg`.
 */

export interface Meal {
  slug: string;
  name: string;
  time: string;
  description: string;
  /** Texto curto descritivo da galeria, exibido como legenda. */
  galleryCaption: string;
  /** Array de 12 fotos da refeição (`/images/gastronomia/<slug>/NN.jpg`). */
  gallery: string[];
}

/** Texto oficial de apresentação do restaurante. */
export const RESTAURANT_INTRO =
  "Nossa gastronomia caipira é servida no fogão a lenha! Toda a alimentação no Parque dos Sonhos é feita com muito carinho e cuidado. São alimentos produzidos na própria fazenda, tais como pães, doces e bolos caseiros, café, leite, licores, iogurtes, queijos e frutas. A verdura servida é produzida na nossa horta orgânica e tudo feito por nossas cozinheiras sob a supervisão de uma nutricionista, sempre respeitando a cultura regional.";

const photosFor = (slug: string): string[] =>
  Array.from({ length: 12 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/images/gastronomia/${slug}/${n}.jpg`;
  });

export const MEALS: Meal[] = [
  {
    slug: "cafe-da-manha",
    name: "Café da Manhã",
    time: "07h30 — 10h00",
    description:
      "Pães caseiros assados na hora, frutas da estação, queijos artesanais, doces da fazenda, ovos frescos, iogurtes naturais, sucos, leite e cafés especiais. Um café da roça farto para começar o dia com energia.",
    galleryCaption: "Café da manhã servido no Parque dos Sonhos",
    gallery: photosFor("cafe-da-manha"),
  },
  {
    slug: "almoco",
    name: "Almoço",
    time: "12h00 — 14h30",
    description:
      "Nosso almoço tem aquele delicioso sabor da fazenda. Oferecemos diariamente diversos pratos típicos, além das saladas com bastante variedade de folhas e legumes, tudo produzido e colhido da horta do próprio hotel.",
    galleryCaption: "Pratos típicos do almoço com produtos da horta",
    gallery: photosFor("almoco"),
  },
  {
    slug: "cafe-caipira",
    name: "Café Caipira",
    time: "15h30 — 17h00",
    description:
      "No café caipira (café da tarde) é hora de repor as energias. Por isso preparamos para nossos clientes milho cozido, bolo de fubá, amendoim torrado, pipoca, além dos pães caseiros, bolinho de chuva, frios, leite, café… tudo bem fresquinho.",
    galleryCaption: "Quitutes do café caipira da tarde",
    gallery: photosFor("cafe-caipira"),
  },
  {
    slug: "jantar",
    name: "Jantar",
    time: "19h00 — 21h30",
    description:
      "E depois de bastante atividade, nada melhor do que um jantar gostoso para terminar bem o dia. Servimos diversas opções de pratos tudo com gostinho da fazenda, além das sopas deliciosas para os dias mais frios. É irresistível!",
    galleryCaption: "Pratos quentes do jantar feitos no fogão a lenha",
    gallery: photosFor("jantar"),
  },
];
