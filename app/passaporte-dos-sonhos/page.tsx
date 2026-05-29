import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Passaporte dos Sonhos — Day-use cortesia em 4 hotéis",
  description:
    "Hospedando-se em qualquer hotel da Rede dos Sonhos você usufrui do day-use nos outros três (Campo, Parque, Terra e Colina) sem custo adicional.",
};

const HOTELS = [
  {
    name: "Campo dos Sonhos",
    city: "Socorro · SP",
    url: "https://campodossonhos.com.br",
  },
  {
    name: "Parque dos Sonhos",
    city: "Socorro · SP",
    url: "https://parquedossonhos.com.br",
    current: true,
  },
  {
    name: "Terra dos Sonhos",
    city: "Socorro · SP",
    url: "https://terradossonhos.com.br",
  },
  {
    name: "Colina dos Sonhos",
    city: "Socorro · SP",
    url: "https://colinadossonhos.com.br",
  },
  {
    name: "Portal dos Sonhos",
    city: "Socorro · SP",
    url: "https://portaldossonhos.tur.br",
  },
];

export default function PassaporteDosSonhos() {
  return (
    <LegalPage
      eyebrow="Benefício exclusivo"
      title={
        <>
          Passaporte <em className="italic font-light">dos Sonhos</em>
        </>
      }
      description="Durante a sua hospedagem em qualquer hotel da Rede dos Sonhos, você usufrui do day-use nos outros quatro sem custo adicional."
      imageSrc="/images/site-atual/hero-panorama.jpg"
      imageHint="Vista panorâmica do Hotel Fazenda Parque dos Sonhos"
      imagePosition="center 40%"
    >
      <p>
        A <strong>Rede dos Sonhos</strong> é composta por cinco hotéis fazenda
        irmãos, todos localizados na região de Socorro (SP), conhecida como a
        capital nacional do turismo de aventura. Cada um tem sua própria
        personalidade — mas compartilham a mesma filosofia: experiências
        completas em meio à natureza, com gastronomia farta e atividades
        inclusas.
      </p>

      <p>
        Hospedando-se em qualquer um deles, você ganha o{" "}
        <strong>Passaporte dos Sonhos</strong>: cortesia de day-use nos outros
        quatro hotéis durante a sua estadia. Isso significa que, se você se
        hospedar aqui no Parque dos Sonhos, pode usufruir de toda estrutura do{" "}
        <strong>Campo dos Sonhos</strong>, <strong>Terra dos Sonhos</strong>,{" "}
        <strong>Colina dos Sonhos</strong> e do{" "}
        <strong>Portal dos Sonhos</strong>!
      </p>

      <div className="callout">
        <strong>Como funciona</strong>
        Apresente-se na recepção do hotel onde deseja fazer o day-use informando
        sua hospedagem em curso na Rede dos Sonhos. Recomendamos consultar
        previamente a disponibilidade do dia.
      </div>

      <h2>Os cinco hotéis da rede</h2>

      <div className="not-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {HOTELS.map((h) => (
          <a
            key={h.name}
            href={h.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block rounded-2xl border p-6 transition-all ${
              h.current
                ? "border-pds-amber bg-pds-cream"
                : "border-pds-line bg-white hover:border-pds-amber hover:shadow-md"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-pds-graphite/60 font-semibold mb-1">
                  {h.current ? "Você está aqui" : "Hotel parceiro"}
                </p>
                <h3 className="font-display text-pds-green-darkest text-[1.2rem] leading-tight">
                  {h.name}
                </h3>
                <p className="text-pds-graphite/70 text-sm mt-1">{h.city}</p>
              </div>
              <ArrowUpRight
                size={20}
                strokeWidth={1.6}
                className="flex-shrink-0 text-pds-fire opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </div>
          </a>
        ))}
      </div>

      <h2>Quer saber mais?</h2>
      <p>
        Entre em contato com a nossa equipe para conhecer os detalhes da sua
        estadia e do Passaporte dos Sonhos.
      </p>
      <p>
        <Link href="/contato">Fale com a gente →</Link>
      </p>
    </LegalPage>
  );
}
