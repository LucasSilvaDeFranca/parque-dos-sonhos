import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { ACCOMMODATIONS } from "@/lib/content/accommodations";
import { Users, Check, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Acomodações — Conforto que acolhe",
  description:
    "Conheça os 9 tipos de apartamentos e chalés do Parque dos Sonhos. Acomodações para casais, famílias e grupos em Socorro-SP.",
};

export default function AcomodacoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Acomodações"
        title={
          <>
            Conforto<br />
            <span className="italic text-pds-amber-light">que acolhe</span>
          </>
        }
        description="Nossas acomodações foram pensadas para oferecer descanso e tranquilidade após um dia repleto de experiências. Com 9 tipos diferentes — para casais, famílias e grupos — cada espaço proporciona conforto, praticidade e conexão com a natureza."
        imageHint="Suíte do Parque dos Sonhos"
        imageSrc="/images/site-atual/quarto-suite.jpg"
        imagePosition="center 40%"
      />

      <section className="bg-pds-bone py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="space-y-20 lg:space-y-28">
            {ACCOMMODATIONS.map((acc, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={acc.slug}
                  className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  <div
                    className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
                  >
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-pds-cream shadow-xl">
                      <Image
                        src={acc.image}
                        alt={acc.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        style={{ objectFit: "cover" }}
                        priority={i < 2}
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                    <p className="mb-4 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
                      <span className="font-mono text-pds-amber">
                        0{i + 1}
                      </span>
                      <span className="h-px w-8 bg-pds-fire" />
                      {acc.type === "chalé" ? "Chalé" : "Apartamento"}
                    </p>
                    <h2 className="font-display text-pds-graphite text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.05]">
                      {acc.name}
                    </h2>
                    <p className="mt-3 inline-flex items-center gap-2 text-pds-stone text-[0.95rem] font-medium">
                      <Users size={16} strokeWidth={1.7} />
                      {acc.capacity}
                    </p>
                    <p className="mt-6 text-pds-stone leading-relaxed text-[1.02rem] text-pretty">
                      {acc.description}
                    </p>

                    {acc.notes && (
                      <div className="mt-5 flex items-start gap-3 bg-pds-cream rounded-2xl p-4 text-[0.88rem] text-pds-graphite leading-relaxed">
                        <Info
                          size={16}
                          strokeWidth={1.8}
                          className="text-pds-fire flex-shrink-0 mt-0.5"
                        />
                        <p className="text-pretty">{acc.notes}</p>
                      </div>
                    )}

                    <ul className="mt-7 grid grid-cols-2 gap-y-2.5 gap-x-4">
                      {acc.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-pds-graphite text-[0.88rem] leading-snug"
                        >
                          <span className="w-4 h-4 rounded-full bg-pds-green-deep text-pds-amber-light flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={9} strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {acc.extras && acc.extras.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {acc.extras.map((e) => (
                          <span
                            key={e}
                            className="px-3 py-1 rounded-full bg-pds-amber/15 text-pds-graphite text-[0.72rem] font-semibold tracking-wide border border-pds-amber/30"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-8">
                      <Button href="/contato" variant="primary" withIcon>
                        Reservar agora
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standard amenities */}
      <section className="bg-pds-cream py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 text-center">
          <p className="mb-5 inline-flex items-center justify-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
            <span className="h-px w-8 bg-pds-fire" />
            Itens padrão
            <span className="h-px w-8 bg-pds-fire" />
          </p>
          <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(1.8rem,3.6vw,2.6rem)] mb-12">
            Em qualquer acomodação,{" "}
            <span className="italic text-pds-fire">você encontra</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Ambiente aconchegante",
              "Capacidade para diferentes perfis",
              "Contato com a natureza",
              "Estrutura completa para sua estadia",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-pds-line rounded-2xl p-6 text-pds-graphite font-medium text-[0.95rem] flex items-center justify-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
