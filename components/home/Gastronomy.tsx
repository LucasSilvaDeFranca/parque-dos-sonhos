import Image from "next/image";
import { Coffee, Utensils, Soup, Cookie } from "lucide-react";

const MEALS = [
  {
    icon: Coffee,
    label: "Café da manhã",
    hint: "Pães caseiros, frutas da estação, queijos e doces da fazenda",
  },
  {
    icon: Soup,
    label: "Almoço",
    hint: "Pratos típicos com produtos da horta orgânica",
  },
  {
    icon: Cookie,
    label: "Café caipira",
    hint: "Bolo de fubá, milho cozido, pipoca, bolinho de chuva e quitutes caseiros",
  },
  {
    icon: Utensils,
    label: "Jantar",
    hint: "Encerre o dia com sabores de fazenda em ambiente acolhedor",
  },
];

export function Gastronomy() {
  return (
    <section className="relative bg-pds-cream py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 right-0 w-[460px] h-[460px] rounded-full bg-pds-amber/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
              <span className="h-px w-8 bg-pds-fire" />
              Gastronomia
            </p>
            <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(2rem,4.4vw,3.6rem)]">
              Sabor de fazenda
              <br />
              que <span className="italic text-pds-green">completa</span> a
              experiência
            </h2>

            <p className="mt-8 max-w-xl text-pds-stone text-[1.05rem] leading-relaxed text-pretty">
              Quatro refeições diárias preparadas com carinho no fogão a lenha,
              trazendo o melhor da culinária típica da fazenda — com produtos
              colhidos na nossa horta orgânica.
            </p>

            <ul className="mt-10 space-y-4">
              {MEALS.map(({ icon: Icon, label, hint }) => (
                <li
                  key={label}
                  className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-pds-line hover:border-pds-amber transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-pds-green-deep text-pds-amber-light flex items-center justify-center flex-shrink-0">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <div>
                    <p className="font-display text-pds-graphite text-[1.2rem] leading-tight">
                      {label}
                    </p>
                    <p className="text-pds-stone text-[0.92rem] mt-1">
                      {hint}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[0.85rem] text-pds-stone italic">
              Mais de 30 tipos de animais, plantações, pães, doces caseiros e
              queijos produzidos na fazenda.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-xl">
              <Image
                src="/images/site-atual/restaurante.jpg"
                alt="Restaurante do Parque dos Sonhos com fogão a lenha"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,20,16,0) 55%, rgba(11,20,16,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-pds-amber-light font-semibold">
                  Fogão a lenha
                </p>
                <p className="font-display text-[1.4rem] leading-tight mt-1">
                  Gastronomia caipira servida<br />
                  com carinho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
