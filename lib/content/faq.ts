/**
 * Perguntas Frequentes — extraídas da página de contato oficial.
 * Fonte: https://parquedossonhos.com.br/contato/ (scrape mai/2026).
 */

export interface FAQItem {
  question: string;
  /** Resposta em "blocos": cada item vira um <p>. Use array para quebrar parágrafos. */
  answer: string[];
}

export const FAQ: FAQItem[] = [
  {
    question: "Qual o horário do check-in?",
    answer: ["Você pode fazer seu check-in a partir das 18h00."],
  },
  {
    question: "Qual o horário do check-out?",
    answer: [
      "Para que possamos preparar as acomodações para as próximas entradas, o check-out deve ser feito até às 16h00.",
    ],
  },
  {
    question: "Crianças pagam?",
    answer: [
      "Crianças até 4 anos hospedadas no mesmo quarto dos pais ou responsáveis são cortesia.",
      "Crianças de 5 a 12 anos hospedadas no mesmo quarto dos pais ou responsáveis pagam o valor da tarifa para crianças.",
      "A partir de 13 anos pagam tarifa adulto.",
    ],
  },
  {
    question: "Posso cancelar minha reserva?",
    answer: [
      "Todas as solicitações de cancelamento deverão ser efetuadas por e-mail.",
      "Política de cancelamento: devolução integral para cancelamentos de reservas feitas com no mínimo 15 dias de antecedência da data de entrada.",
      "Não haverá restituição do valor pago para cancelamentos entre 14 e 7 dias de antecedência da entrada.",
      "Não haverá qualquer restituição para cancelamentos solicitados após o check-in ou em casos de antecipações de saída.",
    ],
  },
  {
    question: "Como chegar?",
    answer: [
      "Existem rotas alternativas para chegar ao Parque. Por isso, ao usar aplicativos como Google Maps ou Waze fique atento à rota sugerida: dê preferência para o trajeto a partir do Caminho Turístico do Rio do Peixe.",
    ],
  },
  {
    question: "O que levar na mala?",
    answer: [
      "Dois pares de tênis (um para caminhadas e outro para atividades — algumas aventuras podem molhar os calçados). Calçado fechado e calça comprida são essenciais para a prática de arvorismo.",
      "Protetor solar, repelente, capa de chuva, boné ou chapéu.",
      "Roupas confortáveis para realizar atividades do campo e roupas de frio para os meses de inverno.",
      "Roupa de banho para aproveitar a piscina e a Cachoeira dos Sonhos, pijama e máquina fotográfica.",
    ],
  },
];
