import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Flame, Sprout, Wheat, Cookie, Clock, ImageIcon } from "lucide-react";
import { MEALS, RESTAURANT_INTRO, type Meal } from "@/lib/content/gastronomy";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gastronomia — Sabor de fazenda no fogão a lenha",
  description:
    "Gastronomia caipira no fogão a lenha. Café da manhã, almoço, café caipira e jantar com pães, doces, queijos, frutas e verduras da horta orgânica do próprio hotel. 48 fotos das nossas refeições.",
};

const FROM_FARM = [
  {
    icon: Sprout,
    label: "Horta orgânica",
    text: "Folhas, legumes e temperos colhidos no mesmo dia em que chegam à mesa.",
  },
  {
    icon: Wheat,
    label: "Pães e bolos caseiros",
    text: "Assados na hora pelas nossas cozinheiras, no melhor estilo de fazenda.",
  },
  {
    icon: Cookie,
    label: "Doces e licores da casa",
    text: "Goiabada, doce de leite, paçoca e licores produzidos na nossa agroindústria.",
  },
];

/** Renderiza uma refeição: header com info + galeria de 12 fotos. */
function MealSection({ meal, index, tone }: { meal: Meal; index: number; tone: "bone" | "cream" }) {
  const [feature, ...rest] = meal.gallery;
  const bg = tone === "bone" ? "bg-pds-bone" : "bg-pds-cream";

  return (
    <section id={meal.slug} className={`${bg} py-20 lg:py-28`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Header da refeição */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-7">
            <p className="font-display text-pds-fire text-[0.78rem] uppercase tracking-[0.24em] font-semibold mb-3">
              {String(index + 1).padStart(2, "0")} · Refeição
            </p>
            <h2 className="font-display leading-[1.05] text-balance text-pds-green-darkest text-[clamp(1.9rem,3.8vw,2.9rem)] mb-5">
              {meal.name}
            </h2>
            <div className="inline-flex items-center gap-2 text-pds-graphite bg-white border border-pds-line rounded-full px-4 py-1.5">
              <Clock size={14} strokeWidth={2} className="text-pds-fire" />
              <span className="text-[0.88rem] font-mono tabular-nums tracking-tight">
                {meal.time}
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pds-graphite/85 text-[1.02rem] leading-relaxed">
              {meal.description}
            </p>
          </div>
        </div>

        {/* Galeria: 1 foto em destaque (2x2) + 8 secundárias (4 col) na primeira "página" desktop,
            depois 3 fotos extras embaixo. Mobile vira grid-cols-2 uniforme. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {/* foto em destaque */}
          <div className="relative col-span-2 row-span-2 aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 group">
            <Image
              src={feature}
              alt={`${meal.galleryCaption} (foto 1)`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 560px"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
          {/* fotos restantes */}
          {rest.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 group"
            >
              <Image
                src={src}
                alt={`${meal.galleryCaption} (foto ${i + 2})`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Legenda pequena com contagem */}
        <p className="mt-5 flex items-center gap-2 text-pds-stone text-[0.82rem]">
          <ImageIcon size={14} strokeWidth={1.8} className="text-pds-amber" />
          {meal.gallery.length} fotos do {meal.name.toLowerCase()} no Parque dos Sonhos
        </p>
      </div>
    </section>
  );
}

export default function GastronomiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Gastronomia"
        title={
          <>
            No fogão a lenha,<br />
            <span className="italic text-pds-amber-light">como antigamente</span>
          </>
        }
        description="Pensão completa com sabor de fazenda. Quatro refeições diárias preparadas com produtos da própria fazenda e da horta orgânica, sob supervisão de uma nutricionista — sempre respeitando a cultura regional."
        imageHint="Restaurante do Parque dos Sonhos com fogão a lenha e culinária caipira"
        imageSrc="/images/site-atual/restaurante.jpg"
        imagePosition="center 50%"
      />

      {/* Intro: Restaurante */}
      <section className="bg-pds-bone pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.32em] uppercase text-pds-fire">
              <span className="h-px w-10 bg-pds-fire/70" />
              O Restaurante
            </p>
            <h2 className="font-display leading-[1.05] text-balance text-pds-green-darkest text-[clamp(1.9rem,3.8vw,2.9rem)] mb-6">
              Gastronomia <em className="italic font-light">caipira</em> no fogão a lenha
            </h2>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-pds-fire/10 text-pds-fire mb-6">
              <Flame size={16} strokeWidth={2} />
              <span className="text-[0.85rem] font-semibold tracking-tight">
                Fogão a lenha tradicional
              </span>
            </div>
            <p className="text-pds-graphite/85 text-[1.02rem] leading-relaxed">
              {RESTAURANT_INTRO}
            </p>

            {/* Atalhos para as refeições */}
            <nav aria-label="Refeições" className="mt-8 flex flex-wrap gap-2">
              {MEALS.map((m) => (
                <a
                  key={m.slug}
                  href={`#${m.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pds-line hover:border-pds-amber hover:bg-pds-cream transition-colors text-[0.85rem] text-pds-graphite font-medium"
                >
                  <span className="text-pds-fire font-mono text-[0.78rem]">↓</span>
                  {m.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-2.5 sm:gap-3">
              <div className="col-span-7 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/gastronomia/almoco/01.jpg"
                  alt="Almoço caipira servido no Parque dos Sonhos"
                  fill
                  sizes="(max-width: 1024px) 60vw, 420px"
                  className="object-cover"
                />
              </div>
              <div className="col-span-5 grid grid-rows-2 gap-2.5 sm:gap-3">
                <div className="relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <Image
                    src="/images/gastronomia/cafe-da-manha/01.jpg"
                    alt="Café da manhã com pães e frutas"
                    fill
                    sizes="(max-width: 1024px) 30vw, 280px"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5">
                  <Image
                    src="/images/gastronomia/jantar/01.jpg"
                    alt="Jantar no fogão a lenha"
                    fill
                    sizes="(max-width: 1024px) 30vw, 280px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As 4 refeições — cada uma com sua galeria de 12 fotos */}
      {MEALS.map((meal, i) => (
        <MealSection
          key={meal.slug}
          meal={meal}
          index={i}
          tone={i % 2 === 0 ? "cream" : "bone"}
        />
      ))}

      {/* Da fazenda à mesa */}
      <section className="bg-pds-green-darkest text-pds-cream py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-pds-amber/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-pds-green/20 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 text-center">
          <p className="mb-5 inline-flex items-center justify-center gap-3 text-[0.7rem] font-semibold tracking-[0.32em] uppercase text-pds-amber-light">
            <span className="h-px w-10 bg-pds-amber-light/70" />
            Da fazenda à sua mesa
            <span className="h-px w-10 bg-pds-amber-light/70" />
          </p>
          <h2 className="font-display leading-[1.05] text-balance text-pds-cream text-[clamp(2rem,4vw,3rem)] mb-6">
            Ingredientes que você vê{" "}
            <em className="italic font-light text-pds-amber-light">brotando</em>
          </h2>
          <p className="text-pds-cream/80 text-[1.05rem] leading-relaxed max-w-2xl mx-auto mb-14">
            Verduras colhidas no mesmo dia em que chegam à mesa, pães assados na
            hora e doces preparados pelas cozinheiras da casa — tudo sob
            supervisão de nutricionista.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {FROM_FARM.map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 text-left hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-pds-amber text-pds-graphite flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.7} />
                </div>
                <p className="font-display text-pds-cream text-[1.2rem] leading-tight mb-2">
                  {label}
                </p>
                <p className="text-pds-cream/70 text-[0.92rem] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Button
              href={BOOKING_URL}
              external
              variant="primary"
              size="lg"
              withIcon
            >
              Reservar sua experiência
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
