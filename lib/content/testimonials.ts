export interface Testimonial {
  name: string;
  origin: string;
  rating: number;
  quote: string;
  type: "familia" | "casal" | "grupo";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Carolina M.",
    origin: "São Paulo, SP",
    rating: 5,
    quote:
      "Levei meus pais e meus filhos. O lugar é mágico, tem coisa pra todo mundo. Meu pai, cadeirante, conseguiu fazer tirolesa — momento que ele nunca vai esquecer.",
    type: "familia",
  },
  {
    name: "Rodrigo & Patrícia",
    origin: "Campinas, SP",
    rating: 5,
    quote:
      "Voltamos pelo terceiro ano seguido. Cada visita encontramos uma trilha nova, uma cachoeira escondida. A comida é simplesmente espetacular.",
    type: "casal",
  },
  {
    name: "Família Tanaka",
    origin: "Belo Horizonte, MG",
    rating: 5,
    quote:
      "Saímos exaustos no melhor sentido da palavra. Os monitores são atenciosos, a estrutura é impecável e nossos filhos não queriam mais ir embora.",
    type: "familia",
  },
  {
    name: "Marcos R.",
    origin: "Rio de Janeiro, RJ",
    rating: 5,
    quote:
      "A tirolesa de 1 km é de outro mundo. Mas o que mais me marcou foi o cuidado em cada detalhe — desde a recepção até o jantar à beira da fogueira.",
    type: "grupo",
  },
  {
    name: "Juliana S.",
    origin: "São José dos Campos, SP",
    rating: 5,
    quote:
      "Uma experiência completa. Adrenalina pela manhã, cachoeira à tarde e uma comida de fazenda que me lembrou minha avó. Sai do hotel com o coração cheio.",
    type: "familia",
  },
];
