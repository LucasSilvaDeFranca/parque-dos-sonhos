import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Trees, Mountain, Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="relative bg-pds-green-darkest text-pds-cream py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[520px] h-[520px] rounded-full bg-pds-green/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[480px] h-[480px] rounded-full bg-pds-fire/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl">
              <Image
                src="/images/site-atual/visitacao.jpg"
                alt="Vista do Parque dos Sonhos com a Cachoeira"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,20,16,0) 70%, rgba(11,20,16,0.55) 100%)",
                }}
              />
            </div>
            <div className="hidden lg:flex absolute -mt-12 ml-auto mr-6 bg-pds-amber text-pds-graphite px-7 py-6 rounded-2xl shadow-2xl items-center gap-4 max-w-[18rem] relative z-10">
              <Trees size={32} strokeWidth={1.5} />
              <div>
                <p className="font-display text-[1.45rem] leading-none">20</p>
                <p className="text-[0.7rem] uppercase tracking-[0.18em] font-semibold mt-1">
                  Alqueires de mata preservada
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-amber-light">
              <span className="h-px w-8 bg-pds-amber-light" />
              Sobre o hotel
            </p>
            <h2 className="font-display leading-[1.05] text-balance text-[clamp(2rem,4.4vw,3.6rem)] text-pds-cream">
              Um refúgio completo
              <br />
              em meio à{" "}
              <span className="italic text-pds-amber-light">natureza</span>
            </h2>

            <div className="mt-8 space-y-5 text-pds-cream/80 leading-relaxed text-[1.05rem]">
              <p className="text-pretty">
                Localizado em Socorro-SP, o Parque dos Sonhos une estrutura
                completa de hotel fazenda com um dos maiores centros de aventura
                do Brasil.
              </p>
              <p className="text-pretty">
                Aqui, cada detalhe foi pensado para proporcionar conforto,
                segurança e experiências que marcam a vida.
              </p>
            </div>

            <ul className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Mountain,
                  label: "24 atividades",
                  hint: "de aventura e natureza",
                },
                {
                  icon: Trees,
                  label: "6 km de trilhas",
                  hint: "entre mata, rios e cachoeiras",
                },
                {
                  icon: Sparkles,
                  label: "4 refeições",
                  hint: "diárias inclusas",
                },
              ].map(({ icon: Icon, label, hint }) => (
                <li
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-pds-amber-light mb-2.5"
                  />
                  <p className="font-display text-[1.05rem] text-pds-cream">
                    {label}
                  </p>
                  <p className="text-pds-cream/55 text-[0.78rem] mt-0.5">
                    {hint}
                  </p>
                </li>
              ))}
            </ul>

            <Button
              href="/o-hotel"
              variant="primary"
              size="md"
              withIcon
              className="mt-10"
            >
              Conheça o hotel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
