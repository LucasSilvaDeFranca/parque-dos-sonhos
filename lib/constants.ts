export const SITE = {
  name: "Hotel Fazenda Parque dos Sonhos",
  shortName: "Parque dos Sonhos",
  tagline: "A Terra da Aventura",
  url: "https://parquedossonhos.com.br",
  domain: "parquedossonhos.com.br",
} as const;

export const BOOKING_URL =
  "https://book.omnibees.com/chain/6432/hotel/11000?q=11000&lang=pt-BR&currencyId=16&mobile=true";

export const CONTACT = {
  whatsapp: {
    raw: "5519981815870",
    display: "(19) 9 8181-5870",
    href: "https://wa.me/5519981815870",
  },
  reservas: [
    { display: "(19) 3895-3161", href: "tel:+551938953161" },
    { display: "(19) 3855-2833", href: "tel:+551938552833" },
    { display: "(19) 3895-4696", href: "tel:+551938954696" },
  ],
  email: {
    address: "contato@parquedossonhos.com.br",
    href: "mailto:contato@parquedossonhos.com.br",
  },
  address: {
    line1: "Estrada da Varginha, Km 7",
    line2: "Bairro do Limoeiro",
    line3: "Divisa Socorro/SP e Bueno Brandão/MG",
    routeName: "Caminho Turístico do Rio do Peixe",
    coords: '22°35\'10,025"S — 46°24\'40,708"W',
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=22.586118,-46.411308",
  },
  social: {
    instagram: "https://www.instagram.com/parquedossonhos/",
    facebook: "https://www.facebook.com/ParquedosSonhos/",
    youtube: "https://www.youtube.com/@parquedossonhos",
  },
} as const;

type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
};

export const NAV: readonly NavItem[] = [
  { label: "O Hotel", href: "/o-hotel" },
  { label: "Acomodações", href: "/acomodacoes" },
  { label: "Atividades", href: "/atividades" },
  { label: "Gastronomia", href: "/gastronomia" },
  { label: "Day Use & Visitação", href: "/day-use" },
  {
    label: "Pacotes e Promoções",
    href: "https://book.omnibees.com/chain/6432/hotel/11000?q=11000&lang=pt-BR&currencyId=16",
    external: true,
  },
  { label: "Portal do Hóspede", href: "/qrcode" },
  { label: "Contato", href: "/contato" },
];

/** Links institucionais/legais que ficam no rodapé. */
export const LEGAL_NAV = [
  { label: "Portal do Hóspede", href: "/qrcode" },
  { label: "Passaporte dos Sonhos", href: "/passaporte-dos-sonhos" },
  { label: "Políticas de Reservas", href: "/politicas-de-reservas" },
  { label: "Atenção às Fraudes", href: "/atencao-as-fraudes" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
] as const;

export const CERTIFICATIONS = [
  {
    code: "ABNT NBR ISO 21101",
    title: "Sistema de Gestão de Segurança em Turismo de Aventura",
    short: "Segurança em Aventura",
  },
  {
    code: "ABNT NBR 9050",
    title: "Acessibilidade em Edificações Hoteleiras",
    short: "Acessibilidade",
  },
] as const;

export const AWARDS = [
  {
    year: 2014,
    org: "World Travel Market — Londres",
    titles: [
      "O Melhor em Turismo Responsável Mundial",
      "O Melhor para Pessoas com Deficiência",
    ],
  },
] as const;

/** Pilares de marca extraídos da home oficial */
export const PILLARS = [
  {
    label: "Aventuras inclusas",
    text: "Tirolesas, arvorismo, bóia-cross, rapel, aventuras kids e muito mais — tudo dentro da diária.",
  },
  {
    label: "Pensão completa",
    text: "Quatro refeições diárias preparadas com carinho — café da manhã, almoço, café caipira e jantar no fogão a lenha.",
  },
  {
    label: "Ecoturismo & natureza",
    text: "Paisagens naturais, trilhas de 6 km, rios e a Cachoeira dos Sonhos com praia de água doce em frente ao hotel.",
  },
  {
    label: "Sustentabilidade",
    text: "Práticas sustentáveis, preservação ambiental e turismo responsável em cada detalhe da operação.",
  },
] as const;

/** Comodidades de marca exibidas em destaque */
export const FEATURED_AMENITIES = [
  "Pensão completa",
  "Pet friendly",
  "Acessibilidade",
  "AC quente/frio",
  "Wi-Fi",
] as const;

export const STATS = [
  { value: "1km", label: "Tirolesa Voadora" },
  { value: "24", label: "Atividades de aventura" },
  { value: "6km", label: "Trilhas ecológicas" },
  { value: "30", label: "Acomodações" },
  { value: "4×", label: "Refeições diárias" },
] as const;

/** Infraestrutura central do hotel */
export const FACILITIES = [
  { name: "Cachoeira dos Sonhos", note: "Praia de água doce em frente ao hotel" },
  { name: "Piscina Aquecida", note: "Coberta, com cachoeira artificial" },
  { name: "Sauna Seca", note: "Vista para a piscina e o deck" },
  { name: "Sauna Úmida", note: "Acesso direto pela piscina" },
  { name: "Salão de Jogos", note: "Pebolim, bilhar, ping-pong, cartas" },
  { name: "Centro de Eventos", note: "Capacidade para 80 pessoas" },
  { name: "Agroindústria", note: "Queijos, doces, paçoca e licores caseiros" },
  { name: "Loja do Parque", note: "Café, mel, artesanato e produtos da fazenda" },
] as const;
