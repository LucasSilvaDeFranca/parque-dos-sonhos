/**
 * Conteúdo da página "O Hotel".
 * Fonte: https://parquedossonhos.com.br/o-hotel/ (scrape mai/2026).
 */

export interface Facility {
  slug: string;
  name: string;
  short: string;
  description: string;
  /** Ícone PNG decorativo (em /public) — opcional */
  icon?: string;
}

export const FACILITIES: Facility[] = [
  {
    slug: "piscina-aquecida",
    name: "Piscina Aquecida",
    short: "Coberta · cachoeira artificial · acesso à sauna",
    description:
      "A piscina coberta do Parque dos Sonhos conta com uma cachoeira artificial e acesso pela água para dentro da sauna úmida.",
    icon: "/images/hotel/Piscina.png",
  },
  {
    slug: "sauna-umida",
    name: "Sauna Úmida",
    short: "Direto da sauna para a piscina coberta",
    description:
      "Da sauna direto para a piscina! Com um mergulho, você sai do quentinho da sauna para o frescor da piscina coberta do Parque dos Sonhos.",
    icon: "/images/hotel/Sauna-Umida.png",
  },
  {
    slug: "sauna-seca",
    name: "Sauna Seca",
    short: "Revestida em vidro com vista para a piscina",
    description:
      "A sauna seca é toda revestida por vidros para uma excelente vista para a piscina e para o deck.",
    icon: "/images/hotel/Sauna-Seca.png",
  },
  {
    slug: "salao-de-jogos",
    name: "Salão de Jogos",
    short: "Pebolim, ping-pong, bilhar, xadrez e mais",
    description:
      "Pebolim, ping-pong, bilhar, mesas para carteado, jogos de xadrez, damas e resta-um. Diversas opções para reunir família e amigos numa diversão calma e sadia.",
    icon: "/images/hotel/Salao-de-jogos.png",
  },
  {
    slug: "centro-de-eventos",
    name: "Centro de Eventos",
    short: "Capacidade para 80 pessoas · totalmente adaptado",
    description:
      "Salão de eventos equipado e adaptado, com palco, cadeiras universitárias, som, projetor e banheiros adaptados para receber inclusive pessoas com deficiência. Capacidade para 80 pessoas.",
    icon: "/images/hotel/Centro-de-Eventos.png",
  },
  {
    slug: "agroindustria",
    name: "Agroindústria",
    short: "Queijos, doces e produtos da própria fazenda",
    description:
      "Valorizamos a cultura regional e preparamos com carinho as receitas tradicionais: queijos artesanais, doces caseiros de leite, goiabada, paçoquinha e outras delícias feitas com produtos da própria fazenda.",
    icon: "/images/hotel/Agroindustria.png",
  },
  {
    slug: "loja-do-parque",
    name: "Loja do Parque",
    short: "Artesanato e produtos regionais orgânicos",
    description:
      "Artesanatos, lembranças diversas e produtos regionais naturais e orgânicos feitos na própria fazenda: café, mel e derivados, licores e doces caseiros.",
    icon: "/images/hotel/Loja.png",
  },
  {
    slug: "acessibilidade",
    name: "Acessibilidade Total",
    short: "27 de 30 acomodações adaptadas para PCD",
    description:
      "Corrimão, mapas táteis, placas em braile e pisos com relevo para sinalização. Equipe treinada e equipamentos específicos para garantir aventura para todos.",
    icon: "/images/hotel/acessibliidade.png",
  },
];

/** Equipamentos adaptados de acessibilidade (Lei: NBR 9050). */
export const ACCESSIBILITY_EQUIPMENT = [
  "Cadeirinha adaptada para tirolesa — atende paraplégicos e tetraplégicos",
  "Selas de cavalo adaptadas para pessoas com deficiência",
  "Cadeirinha aquática para piscinas e Cachoeira dos Sonhos",
  "Sistemas de corrimão, mapas táteis e placas em braile",
  "Pisos com relevo para sinalização tátil",
  "Banheiros adaptados em todas as áreas comuns",
] as const;

/** Estatísticas-chave do hotel (texto oficial). */
export const HOTEL_STATS = [
  { value: "20", label: "Alqueires de natureza preservada" },
  { value: "30", label: "Acomodações (20 apartamentos + 10 chalés)" },
  { value: "27", label: "Acomodações adaptadas para PCD" },
  { value: "24", label: "Atividades de aventura" },
] as const;

/** Distâncias e localização (folder oficial). */
export const HOTEL_DISTANCES = [
  { from: "Socorro (SP)", km: 15 },
  { from: "Bueno Brandão (MG)", km: 22 },
  { from: "São Paulo (capital)", km: 140, time: "2h" },
] as const;
