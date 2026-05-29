export interface Accommodation {
  slug: string;
  name: string;
  capacity: string;
  capacityMax: number;
  type: "apartamento" | "chalé";
  /** Caminho relativo a /public — capa do tipo de quarto */
  image: string;
  description: string;
  features: string[];
  /** Observações específicas do tipo (localização, particularidades) */
  notes?: string;
  /** Comodidades/features adicionais específicas */
  extras?: string[];
}

/**
 * Acomodações reais do Parque dos Sonhos — 9 tipos.
 * Fonte: motor de reservas Omnibees (book.omnibees.com/chain/6432/hotel/11000).
 *
 * Bloco total: 30 acomodações entre apartamentos e chalés.
 * 27 das 30 são adaptadas (PCD/mobilidade reduzida).
 *
 * Ordem: do maior para o menor (capacidade).
 */
export const ACCOMMODATIONS: Accommodation[] = [
  {
    slug: "chale-9-pessoas",
    name: "Chalé até 9 pessoas",
    capacity: "Até 9 pessoas",
    capacityMax: 9,
    type: "chalé",
    image: "/images/quartos/chale-9p.jpg",
    description:
      "Chalé amplo com piscina ao lado — ideal para famílias estendidas e grupos que querem viver tudo juntos em meio à mata.",
    notes:
      "Localizado a 300m da área central com 100m de subida íngreme. A piscina ao lado não é exclusiva da acomodação.",
    features: [
      "40 m²",
      "Cama de casal",
      "Frigobar",
      "Microondas",
      "TV LED a cabo",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
    ],
  },
  {
    slug: "chale-8-pessoas",
    name: "Chalés até 8 pessoas",
    capacity: "Até 8 pessoas",
    capacityMax: 8,
    type: "chalé",
    image: "/images/quartos/chale-8p.jpg",
    description:
      "Chalé privativo e espaçoso para famílias grandes, com toda a estrutura e o aconchego da madeira em meio à natureza.",
    notes:
      "Localizado no ponto mais alto do hotel — acesso por rampa íngreme.",
    features: [
      "Frigobar",
      "Microondas",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
      "Roupa de banho e toalhas de piscina",
    ],
  },
  {
    slug: "chale-5-pessoas",
    name: "Chalés até 5 pessoas",
    capacity: "Até 5 pessoas",
    capacityMax: 5,
    type: "chalé",
    image: "/images/quartos/chale-5p.jpg",
    description:
      "Chalé privativo indicado para famílias — espaçoso, integrado à mata e equipado com todo o conforto da estadia.",
    features: [
      "Frigobar",
      "Microondas",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
      "Roupa de banho e toalhas de piscina",
    ],
  },
  {
    slug: "apartamento-5-pessoas",
    name: "Apartamento até 5 pessoas",
    capacity: "Até 5 pessoas",
    capacityMax: 5,
    type: "apartamento",
    image: "/images/quartos/apto-5p.jpg",
    description:
      "Suíte adaptada para pessoas com deficiência ou mobilidade reduzida, próxima da operação do hotel — restaurante, piscina e saunas a poucos passos.",
    notes:
      "Bloco com micro-ondas de uso coletivo na parte externa, espaço para as mamães. Estacionamento não coberto.",
    features: [
      "Frigobar",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
      "Roupa de banho e toalhas de piscina",
    ],
    extras: ["Acessibilidade PCD"],
  },
  {
    slug: "chale-4-pessoas",
    name: "Chalés até 4 pessoas",
    capacity: "Até 4 pessoas",
    capacityMax: 4,
    type: "chalé",
    image: "/images/quartos/chale-4p.jpg",
    description:
      "Tamanho ideal para a família clássica — privacidade da madeira na mata com toda a estrutura para pais e filhos pequenos.",
    features: [
      "Frigobar",
      "Microondas",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
      "Roupa de banho e toalhas de piscina",
    ],
  },
  {
    slug: "apartamento-4-pessoas",
    name: "Apartamento até 4 pessoas",
    capacity: "Até 4 pessoas",
    capacityMax: 4,
    type: "apartamento",
    image: "/images/quartos/apto-4p.jpg",
    description:
      "Suíte adaptada para pessoas com deficiência ou mobilidade reduzida — praticidade total no centro da operação do hotel.",
    notes:
      "Bloco com micro-ondas de uso coletivo na parte externa, espaço para as mamães. Estacionamento não coberto.",
    features: [
      "Frigobar",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
      "Roupa de banho e toalhas de piscina",
    ],
    extras: ["Acessibilidade PCD"],
  },
  {
    slug: "chale-3-pessoas",
    name: "Chalés até 3 pessoas",
    capacity: "Até 3 pessoas",
    capacityMax: 3,
    type: "chalé",
    image: "/images/quartos/chale-3p.jpg",
    description:
      "Chalé aconchegante para casal com filho ou trio em busca de privacidade em meio à mata.",
    features: [
      "Frigobar",
      "Microondas",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
      "Roupa de banho e toalhas de piscina",
    ],
  },
  {
    slug: "apartamento-3-pessoas",
    name: "Apartamento até 3 pessoas",
    capacity: "Até 3 pessoas",
    capacityMax: 3,
    type: "apartamento",
    image: "/images/quartos/apto-3p.jpg",
    description:
      "Suíte adaptada para pessoas com deficiência ou mobilidade reduzida — toda a estrutura na sede do hotel a poucos passos do restaurante.",
    notes: "Estacionamento não coberto.",
    features: [
      "Frigobar",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
      "Roupa de banho e toalhas de piscina",
    ],
    extras: ["Acessibilidade PCD"],
  },
  {
    slug: "chale-2-pessoas",
    name: "Chalés até 2 pessoas",
    capacity: "Casal · até 3 pessoas",
    capacityMax: 3,
    type: "chalé",
    image: "/images/quartos/chale-2p.jpg",
    description:
      "Chalé essencial para casais — pertinho da recepção e de toda a operação do hotel.",
    notes:
      "Localizado a 150m da área central — construção geminada à recepção, com circulação de pessoas e veículos.",
    features: [
      "Frigobar",
      "TV LED a cabo",
      "Telefone",
      "A/C quente e frio",
      "Cofre",
      "Secador de cabelo",
    ],
  },
];

/** Comodidades padrão em todas as acomodações */
export const ACCOMMODATION_AMENITIES = [
  "Pensão completa (4 refeições)",
  "Wi-Fi nas áreas comuns",
  "Pet friendly",
  "Ar-condicionado quente e frio",
  "27 de 30 unidades adaptadas (PCD)",
] as const;
