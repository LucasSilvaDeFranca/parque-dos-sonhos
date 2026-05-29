/**
 * Conteúdo de Day Use & Visitação.
 * Fonte: https://parquedossonhos.com.br/day-use-e-visitacao/ (scrape mai/2026).
 *
 * Diferença fundamental:
 * - DAY USE → pacote fechado (2 refeições + 3 atividades + estrutura)
 * - VISITAÇÃO → só a entrada/acesso ao parque (refeições e atividades à parte)
 */

// ─── DAY USE ─────────────────────────────────────────────────────────────────

export const DAY_USE_PRICES = {
  meioSemana: {
    label: "Meio de semana",
    adulto: 225,
    crianca5a12: 135,
    crianca0a4: null, // não há day use
  },
  fimSemana: {
    label: "Fim de semana, feriados prolongados e férias",
    adulto: 300,
    crianca5a12: 180,
    crianca0a4: null,
  },
} as const;

export const DAY_USE_INCLUDES = {
  refeicoes: [
    "Almoço (não inclui bebidas)",
    "Café Caipira (não inclui bebidas)",
  ],
  atividades: "3 atividades à escolha entre as opções abaixo",
  outros: ["Acesso à Cachoeira dos Sonhos e áreas do parque"],
} as const;

// ─── VISITAÇÃO ───────────────────────────────────────────────────────────────

export const VISITACAO_PRICES = {
  meioSemana: {
    label: "Meio de semana",
    adulto: 19,
    melhorIdade: 9.5,
    estudante: 9.5,
    crianca5a12: 9.5,
    crianca0a4: 2,
  },
  fimSemana: {
    label: "Fim de semana, feriados prolongados e férias",
    adulto: 25,
    melhorIdade: 12.5,
    estudante: 12.5,
    crianca5a12: 12.5,
    crianca0a4: 2,
  },
} as const;

export const VISITACAO_MEALS = [
  { name: "Café da manhã", adulto: 35, crianca: 17.5 },
  { name: "Almoço", adulto: 80, crianca: 40, note: "não inclui bebidas" },
  { name: "Café Caipira", adulto: 35, crianca: 17.5 },
] as const;

// ─── ATIVIDADES À LA CARTE (Visitação) ───────────────────────────────────────

export interface ActivityPrice {
  name: string;
  price: number | string;
  detail: string;
  kids?: boolean;
  /** Disponível também como atividade-à-escolha no pacote Day Use */
  inDayUse?: boolean;
}

export const ACTIVITY_PRICES: ActivityPrice[] = [
  // Tirolesas
  {
    name: "Tirolesa Voadora",
    price: 120,
    detail: "~1 km de extensão · 120 m de altura",
    inDayUse: true,
  },
  {
    name: "Tirolesa do Pânico",
    price: 80,
    detail: "~1 km de extensão · 140 m de altura",
    inDayUse: true,
  },
  {
    name: "Voo Duplo — Tirolesa do Pânico",
    price: 160,
    detail: "~1 km · duas pessoas atravessando juntas",
  },
  {
    name: "Voo Duplo — Circuito Radical",
    price: 250,
    detail: "Pânico + Espanto + Calafrio em voo duplo (~1.600 m)",
  },
  {
    name: "Circuito Radical — Tirolesas",
    price: 130,
    detail: "Pânico + Espanto + Calafrio (~1.600 m no total)",
    inDayUse: true,
  },
  {
    name: "Tirolesa do Espanto",
    price: 60,
    detail: "400 m · 60 m de altura",
    inDayUse: true,
  },
  {
    name: "Tirolesa: Espanto + Calafrio",
    price: 80,
    detail: "400 m / 60 m + 200 m / 35 m",
    inDayUse: true,
  },
  {
    name: "Tirolesa do Calafrio",
    price: 35,
    detail: "200 m · 35 m de altura",
    inDayUse: true,
  },
  {
    name: "Tirolesa do Arrepio",
    price: 50,
    detail: "250 m · 50 m de altura",
    inDayUse: true,
  },
  {
    name: "Tirolesa dos Sonhos",
    price: 30,
    detail: "100 m · 7 m de altura",
    inDayUse: true,
  },
  {
    name: "Tirolesa Kid's",
    price: 20,
    detail: "50 m · 2 m de altura",
    kids: true,
    inDayUse: true,
  },
  // Rapel
  {
    name: "Rapel da Plataforma",
    price: 70,
    detail: "35 m · negativo + positivo · sobe de trator",
    inDayUse: true,
  },
  {
    name: "Rapel do Berro",
    price: 70,
    detail: "40 m em negativo · apenas para pessoas com deficiência",
    inDayUse: true,
  },
  {
    name: "Rapel da Gruta",
    price: 60,
    detail: "30 m em positivo",
    inDayUse: true,
  },
  // Arvorismo & Escalada
  {
    name: "Arvorismo Completo",
    price: 70,
    detail: "150 m de extensão",
    inDayUse: true,
  },
  {
    name: "Arvorismo Kid's + Tirolesa dos Sonhos",
    price: 60,
    detail: "combo arvorismo infantil + tirolesa básica",
    kids: true,
    inDayUse: true,
  },
  {
    name: "Arvorismo Kid's",
    price: 40,
    detail: "100 m de extensão",
    kids: true,
    inDayUse: true,
  },
  {
    name: "Escalada Kid's",
    price: 25,
    detail: "Parede de pedra · 5 m · agarras artificiais",
    kids: true,
    inDayUse: true,
  },
  // Fazenda / Natureza
  {
    name: "Cavalgada da Fazenda",
    price: 60,
    detail: "Passeio a cavalo com sela · 2,5 km",
    inDayUse: true,
  },
  {
    name: "Passeio de Charrete",
    price: 60,
    detail: "2,5 km de percurso pela fazenda",
    inDayUse: true,
  },
  {
    name: "Passeio de Trator",
    price: 30,
    detail: "1 hora pela fazenda · visita aos animais",
    inDayUse: true,
  },
  {
    name: "Fora de Estrada",
    price: 20,
    detail: "Subida com trator ao mirante da Pedra Grande · 3 km",
    inDayUse: true,
  },
  {
    name: "Passeio de Pônei",
    price: 20,
    detail: "10 min de passeio",
    kids: true,
    inDayUse: true,
  },
  {
    name: "Cicloturismo",
    price: 10,
    detail: "15 min · bicicletas, triciclos e quadriciclos não motorizados",
    inDayUse: true,
  },
  {
    name: "Pedalinho",
    price: 10,
    detail: "15 min no lago das carpas",
    inDayUse: true,
  },
  // Outras
  {
    name: "Espeleoturismo",
    price: 50,
    detail: "Passagens por fendas de pedra · 100 m · água e lama",
    inDayUse: true,
  },
  {
    name: "Pescaria Esportiva",
    price: "3/hora",
    detail: "Pesque-pague-solte · R$ 18/kg · lago de tilápias",
    inDayUse: true,
  },
];
