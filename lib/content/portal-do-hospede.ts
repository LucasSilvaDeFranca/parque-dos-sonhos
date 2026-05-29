import type { ComponentType, SVGProps } from "react";
import {
  Accessibility,
  Bath,
  Bike,
  CalendarCheck,
  Cast,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Flame,
  GlassWater,
  Info,
  Leaf,
  Map as MapIcon,
  MapPin,
  PawPrint,
  Phone,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Stamp,
  Tv,
  UtensilsCrossed,
  Wifi,
  Wine,
} from "lucide-react";
import { Facebook, Instagram } from "@/components/portal-do-hospede/brand-icons";

export type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }
>;

export type PortalLink = {
  readonly label: string;
  readonly href: string;
  readonly icon: IconComponent;
  readonly external?: boolean;
  readonly comingSoon?: boolean;
};

export type PortalSection = {
  readonly title: string;
  readonly eyebrow: string;
  readonly items: readonly PortalLink[];
};

const MYGUEST = "https://parquedossonhos.myguest.digital";

export const PORTAL_SECTIONS: readonly PortalSection[] = [
  {
    eyebrow: "01",
    title: "Comodidades do quarto",
    items: [
      { label: "Wi-Fi", href: "#", icon: Wifi, comingSoon: true },
      { label: "Chromecast", href: "http://tvshare.me", icon: Cast, external: true },
      { label: "Ramais", href: "#", icon: Phone, comingSoon: true },
      { label: "Ar condicionado", href: `${MYGUEST}/texto/1168`, icon: Snowflake, external: true },
      { label: "Frigobar", href: `${MYGUEST}/texto/1169`, icon: Refrigerator, external: true },
      { label: "Canais de TV", href: `${MYGUEST}/texto/1171`, icon: Tv, external: true },
      { label: "Toalhas", href: `${MYGUEST}/texto/1173`, icon: Bath, external: true },
    ],
  },
  {
    eyebrow: "02",
    title: "Gastronomia",
    items: [
      { label: "Refeições", href: `${MYGUEST}/texto/1170`, icon: UtensilsCrossed, external: true },
      { label: "Cardápio de bebidas", href: `${MYGUEST}/texto/1163`, icon: GlassWater, external: true },
      {
        label: "Carta de vinhos",
        href: "https://www.canva.com/design/DAGrYdFth0w/",
        icon: Wine,
        external: true,
      },
      { label: "Horários", href: `${MYGUEST}/texto/1166`, icon: Clock, external: true },
    ],
  },
  {
    eyebrow: "03",
    title: "Atividades & reservas",
    items: [
      {
        label: "Agendamento de atividades",
        href: "https://atividades.parquedossonhos.com.br",
        icon: CalendarCheck,
        external: true,
      },
      {
        label: "Passaporte dos Sonhos",
        href: "https://atividades.parquedossonhos.com.br/passaporte-dos-sonhos",
        icon: Stamp,
        external: true,
      },
      { label: "Mapa do hotel", href: `${MYGUEST}/arquivo/1160`, icon: MapIcon, external: true },
      { label: "Sauna", href: "#", icon: Flame, comingSoon: true },
      {
        label: "Passeio de quadriciclo",
        href: "https://m8segurancaeaventura.com.br/",
        icon: Bike,
        external: true,
      },
      { label: "Turismo na cidade", href: `${MYGUEST}/texto/1181`, icon: MapPin, external: true },
    ],
  },
  {
    eyebrow: "04",
    title: "Informações & políticas",
    items: [
      { label: "Informativo ao hóspede", href: `${MYGUEST}/texto/1158`, icon: Info, external: true },
      {
        label: "Faça seu cadastro",
        href: "https://parquedossonhos.checkinonline.com.br/",
        icon: ClipboardCheck,
        external: true,
      },
      { label: "Segurança", href: `${MYGUEST}/texto/1162`, icon: ShieldCheck, external: true },
      { label: "Política pet friendly", href: `${MYGUEST}/texto/1172`, icon: PawPrint, external: true },
      { label: "Acessibilidade", href: `${MYGUEST}/texto/1174`, icon: Accessibility, external: true },
      { label: "Sustentabilidade", href: `${MYGUEST}/texto/1175`, icon: Leaf, external: true },
      {
        label: "Pesquisa de segurança",
        href: "https://forms.gle/ts5hFNEp6tUaban48",
        icon: ClipboardList,
        external: true,
      },
    ],
  },
  {
    eyebrow: "05",
    title: "Redes sociais",
    items: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/parquedossonhos",
        icon: Instagram,
        external: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/ParquedosSonhos/",
        icon: Facebook,
        external: true,
      },
    ],
  },
] as const;
