import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ServicesGrid } from "@/components/portal-do-hospede/ServicesGrid";
import { PORTAL_SECTIONS } from "@/lib/content/portal-do-hospede";

export const metadata: Metadata = {
  title: "Portal do Hóspede",
  description:
    "Tudo o que você precisa durante sua estadia no Hotel Fazenda Parque dos Sonhos: comodidades do quarto, gastronomia, atividades, políticas e contatos oficiais.",
};

export default function PortalDoHospedePage() {
  return (
    <>
      <PageHero
        eyebrow="Portal do Hóspede"
        title={
          <>
            Bem-vindo à <em className="italic font-light">sua estadia</em> no
            Parque dos Sonhos
          </>
        }
        description="Atalhos rápidos para o que você mais usa durante a hospedagem — informações do quarto, cardápios, agendamento de atividades e canais oficiais."
        imageSrc="/images/site-atual/hero-panorama.jpg"
        imageHint="Hotel Fazenda Parque dos Sonhos em Socorro-SP"
        imagePosition="center 35%"
      />
      <ServicesGrid sections={PORTAL_SECTIONS} />
    </>
  );
}
