export type ActivityCategory = "aventura" | "natureza" | "familia" | "fazenda";

export interface Activity {
  slug: string;
  name: string;
  category: ActivityCategory;
  short: string;
  description: string;
  highlight?: string;
  intensity?: 1 | 2 | 3;
  /** Caminho relativo a /public — foto da atividade */
  image: string;
}

/**
 * Lista oficial das 24 atividades do Parque dos Sonhos.
 * Fonte: https://parquedossonhos.com.br/atividades/ (scrape mai/2026).
 * Dados de extensão/altura conforme descrições oficiais do hotel.
 * Fotos baixadas das páginas /_atividades/<slug>/ (curl + Safari UA).
 */
export const ACTIVITIES: Activity[] = [
  // ─── AVENTURA — Tirolesas (6) ───
  {
    slug: "tirolesa-voadora",
    name: "Tirolesa Voadora",
    category: "aventura",
    short: "1km · 140m de altura · posição voadora",
    description:
      "A primeira Tirolesa Voadora do Brasil com 1 km de extensão. Você vai sentir a sensação de estar voando entre o vale do Rio Cachoeirinha, com vista exuberante da serra.",
    highlight: "1.000 m",
    intensity: 3,
    image: "/images/atividades/tirolesa-voadora.jpg",
  },
  {
    slug: "tirolesa-do-panico",
    name: "Tirolesa do Pânico",
    category: "aventura",
    short: "1km saindo de SP, chegando em MG",
    description:
      "A primeira tirolesa no Brasil construída com 1 km de extensão — saindo de São Paulo e chegando em Minas Gerais. A ponte aérea mais rápida entre os dois estados.",
    highlight: "1.000 m",
    intensity: 3,
    image: "/images/atividades/tirolesa-do-panico.jpg",
  },
  {
    slug: "voo-duplo-panico",
    name: "Voo Duplo — Tirolesa do Pânico",
    category: "aventura",
    short: "Duas pessoas atravessando juntas",
    description:
      "Batizada de Tirolesa do Pânico em Voo Duplo. Atravessa toda a área do parque com 1 km de extensão e 140 metros de altura, ao lado de quem você ama.",
    highlight: "Duplo · 1km",
    intensity: 3,
    image: "/images/atividades/voo-duplo-panico.jpg",
  },
  {
    slug: "tirolesa-do-espanto",
    name: "Tirolesa do Espanto",
    category: "aventura",
    short: "400m cruzando a parte central do parque",
    description:
      "400 metros de extensão e 30 m de altura. Travessia veloz cruzando toda a parte central do parque com visão das atividades, da prainha e da Cachoeira dos Sonhos.",
    highlight: "400 m · 30m alt.",
    intensity: 2,
    image: "/images/atividades/tirolesa-do-espanto.jpg",
  },
  {
    slug: "tirolesa-do-calafrio",
    name: "Tirolesa do Calafrio",
    category: "aventura",
    short: "200m suaves sobre o Rio Cachoeirinha",
    description:
      "200 m de extensão e 25 m de altura. Início suave passando entre árvores e por cima do Rio Cachoeirinha, com chegada na parte central do parque.",
    highlight: "200 m",
    intensity: 2,
    image: "/images/atividades/tirolesa-do-calafrio.jpg",
  },
  {
    slug: "tirolesa-dos-sonhos",
    name: "Tirolesa dos Sonhos",
    category: "aventura",
    short: "100m para iniciantes",
    description:
      "100 metros de extensão com ponto mais alto a 10 m. Atividade voltada para o público kids e iniciantes que querem provar o gostinho da tirolesa.",
    highlight: "100 m",
    intensity: 1,
    image: "/images/atividades/tirolesa-dos-sonhos.jpg",
  },
  // ─── AVENTURA — Rapel & Arvorismo (4) ───
  {
    slug: "rapel-da-plataforma",
    name: "Rapel da Plataforma",
    category: "aventura",
    short: "35m na vertical da Pedra Grande",
    description:
      "Descida de 35 metros na vertical da Pedra Grande — 2 metros em negativo (sem apoio) e o restante em positivo. Adrenalina pura com paisagem aberta.",
    highlight: "35 m",
    intensity: 3,
    image: "/images/atividades/rapel-da-plataforma.jpg",
  },
  {
    slug: "rapel-da-gruta",
    name: "Rapel da Gruta",
    category: "aventura",
    short: "30m com vista da Cachoeira dos Sonhos",
    description:
      "30 metros de descida na rocha, em positivo. Lá do alto você aprecia o visual encantador do parque e da Cachoeira dos Sonhos.",
    highlight: "30 m",
    intensity: 2,
    image: "/images/atividades/rapel-da-gruta.jpg",
  },
  {
    slug: "rapel-do-berro",
    name: "Rapel do Berro",
    category: "aventura",
    short: "50m adaptado para acessibilidade",
    description:
      "Atividade voltada também para pessoas com deficiência ou mobilidade reduzida. Descida de 50 metros em negativo, sem apoio dos pés. Aventura com inclusão.",
    highlight: "50 m · acessível",
    intensity: 3,
    image: "/images/atividades/rapel-do-berro.jpg",
  },
  {
    slug: "arvorismo-completo",
    name: "Arvorismo Completo",
    category: "aventura",
    short: "Circuito suspenso na copa das árvores",
    description:
      "Aventure-se na copa das árvores. Excelente para coordenação motora, equilíbrio e superação. Pode ser feito por qualquer idade com acompanhamento.",
    intensity: 2,
    image: "/images/atividades/arvorismo-completo.jpg",
  },
  // ─── NATUREZA & ÁGUA (4) ───
  {
    slug: "cachoeira-dos-sonhos",
    name: "Cachoeira dos Sonhos",
    category: "natureza",
    short: "Praia de água doce em frente ao hotel",
    description:
      "O grande cartão-postal do parque: uma praia de água doce formada pela Cachoeira dos Sonhos, com atividades de água e terra para toda a família.",
    highlight: "★ destaque",
    image: "/images/atividades/cachoeira-dos-sonhos.jpg",
  },
  {
    slug: "boia-cross",
    name: "Bóia Cross",
    category: "natureza",
    short: "Descida do rio remando com as mãos",
    description:
      "Sentado sobre uma bóia, com colete flutuador, você desce o trecho do rio usando os próprios braços como remos. Diversão garantida nas corredeiras.",
    intensity: 2,
    image: "/images/atividades/boia-cross.jpg",
  },
  {
    slug: "trilhas-ecologicas",
    name: "Trilhas Ecológicas",
    category: "natureza",
    short: "6km entre mata nativa, rios e cachoeiras",
    description:
      "São 6 km de trilhas entre mata nativa, riachos, rios e cachoeiras. Caminhar é fácil, gostoso e faz bem — melhor ainda com paisagens assim ao redor.",
    highlight: "6 km",
    image: "/images/atividades/trilhas-ecologicas.jpg",
  },
  {
    slug: "pedalinhos",
    name: "Pedalinhos",
    category: "natureza",
    short: "Em um dos maiores lagos do parque",
    description:
      "Passeios de pedalinho em águas calmas do lago da principal área de lazer. Todos equipados com coletes salva-vidas para total segurança.",
    image: "/images/atividades/pedalinhos.jpg",
  },
  // ─── FAZENDA (4) ───
  {
    slug: "visita-monitorada",
    name: "Visita Monitorada",
    category: "fazenda",
    short: "Tour pela vida rural do hotel",
    description:
      "Após o café da manhã, monitor explica o funcionamento das atividades rurais: uso das energias na fazenda, hortas, agroindústria, animais.",
    image: "/images/atividades/visita-monitorada.jpg",
  },
  {
    slug: "passeio-de-trator",
    name: "Passeio de Trator",
    category: "fazenda",
    short: "Viagem pelas sensações da fazenda",
    description:
      "Uma volta inesquecível pela fazenda, integrando você à natureza. Passeio pelas sensações da vida rural, com paradas estratégicas.",
    image: "/images/atividades/passeio-de-trator.jpg",
  },
  {
    slug: "cavalgada-da-fazenda",
    name: "Cavalgada da Fazenda",
    category: "fazenda",
    short: "Trilhas com cavalos treinados",
    description:
      "Passeio a cavalo por locais com paisagens de tirar o fôlego. Nossos cavalos são treinados para uma experiência tranquila e segura.",
    image: "/images/atividades/cavalgada-da-fazenda.jpg",
  },
  {
    slug: "passeio-de-charrete",
    name: "Passeio de Charrete",
    category: "fazenda",
    short: "Pela fazenda, passando pelo cafezal",
    description:
      "Atividade relaxante: você aprecia a beleza da paisagem, passando pelo cafezal, enquanto um dos nossos monitores conduz a charrete.",
    image: "/images/atividades/passeio-de-charrete.jpg",
  },
  // ─── FAMÍLIA & KIDS (6) ───
  {
    slug: "playground",
    name: "Playground",
    category: "familia",
    short: "Rústico em madeira tratada + pula-pula",
    description:
      "Playground rústico construído em madeira tratada para as crianças, com pula-pula convencional. Diversão livre na área central.",
    image: "/images/atividades/playground.jpg",
  },
  {
    slug: "arvorismo-kids",
    name: "Arvorismo Kids",
    category: "familia",
    short: "9 obstáculos sobre o lago de pedalinhos",
    description:
      "Atividade destinada às crianças, composta por nove obstáculos passando sobre o lago de pedalinhos e entre árvores, sempre com condutor.",
    image: "/images/atividades/arvorismo-kids.jpg",
  },
  {
    slug: "tirolesa-kids",
    name: "Tirolesa Kids",
    category: "familia",
    short: "50m · ideal para 10 a 20 kg",
    description:
      "50 metros de extensão e 2 metros de altura — pura adrenalina para a galerinha, ótima opção para as crianças de 10 a 20 kg.",
    highlight: "50 m",
    intensity: 1,
    image: "/images/atividades/tirolesa-kids.jpg",
  },
  {
    slug: "escalada-kids",
    name: "Escalada Kids",
    category: "familia",
    short: "Escalada em rocha até 5 metros",
    description:
      "As crianças podem se aventurar com toda segurança em escalada em rocha até 5 metros, com auxílio de garras utilizadas em escalada indoor.",
    image: "/images/atividades/escalada-kids.jpg",
  },
  {
    slug: "passeio-de-ponei",
    name: "Passeio de Pônei",
    category: "familia",
    short: "Encanta os pequenos com toda segurança",
    description:
      "Encanta as crianças que podem experimentar a sensação de cavalgar de verdade, com o pônei conduzido por um dos nossos monitores treinados.",
    image: "/images/atividades/passeio-de-ponei.jpg",
  },
  {
    slug: "triciclos-quadriciclos",
    name: "Triciclos & Quadriciclos",
    category: "familia",
    short: "Pedalinhos sobre rodas para crianças",
    description:
      "Bicicletas, triciclos e quadriciclos para passeio pelo parque — uma maneira divertida de explorar a rara beleza da fazenda.",
    image: "/images/atividades/triciclos-quadriciclos.jpg",
  },
  // ─── PESCA / Bônus ───
  {
    slug: "pescaria",
    name: "Pesca Esportiva",
    category: "fazenda",
    short: "Pesque-e-solte com anzol sem fisga",
    description:
      "Pesca esportiva com anzol sem fisga: os peixes são devolvidos vivos à natureza. O lazer está em pescar e se divertir, preservando a vida do rio.",
    image: "/images/atividades/pescaria.jpg",
  },
];

export const ACTIVITY_CATEGORIES: Record<
  ActivityCategory,
  { label: string; tagline: string }
> = {
  aventura: {
    label: "Aventura",
    tagline: "Tirolesas, rapel e arvorismo com segurança certificada (ISO 21101)",
  },
  natureza: {
    label: "Natureza & Água",
    tagline: "Cachoeira dos Sonhos, trilhas de 6km e o Rio Cachoeirinha",
  },
  fazenda: {
    label: "Vida na Fazenda",
    tagline: "Cavalgadas, cafezal, agroindústria e turismo rural",
  },
  familia: {
    label: "Família & Kids",
    tagline: "Atividades adaptadas para a galerinha, com total segurança",
  },
};
