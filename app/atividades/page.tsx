import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import {
  ACTIVITIES,
  ACTIVITY_CATEGORIES,
  type ActivityCategory,
} from "@/lib/content/activities";
import { Flame, Trees, Users, Tractor } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Atividades — Aventura, natureza e diversão",
  description:
    "Tirolesa de 1km, arvorismo, rapel, bóia-cross, cachoeiras, trilhas e mais. O maior complexo de aventura de Socorro-SP, com segurança certificada.",
};

const CATEGORY_ICONS: Record<ActivityCategory, typeof Flame> = {
  aventura: Flame,
  natureza: Trees,
  fazenda: Tractor,
  familia: Users,
};

const ORDER: ActivityCategory[] = [
  "aventura",
  "natureza",
  "fazenda",
  "familia",
];

export default function AtividadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Atividades"
        title={
          <>
            Aventura, natureza<br />
            e diversão em{" "}
            <span className="italic text-pds-amber-light">um só lugar</span>
          </>
        }
        description="O Parque dos Sonhos é reconhecido como o maior complexo de aventura de Socorro-SP. Aqui, você encontra atividades para todos os níveis, sempre com acompanhamento e segurança certificada."
        imageHint="Tirolesa Voadora do Parque dos Sonhos"
        imageSrc="/images/site-atual/tirolesa-voadora.jpg"
        imagePosition="center 35%"
      />

      {ORDER.map((cat, idx) => {
        const items = ACTIVITIES.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        const meta = ACTIVITY_CATEGORIES[cat];
        const Icon = CATEGORY_ICONS[cat];
        const isDark = idx % 2 === 1;

        return (
          <section
            key={cat}
            className={
              isDark
                ? "bg-pds-green-darkest text-pds-cream py-24 lg:py-32 relative overflow-hidden"
                : "bg-pds-bone py-24 lg:py-32"
            }
          >
            {isDark && (
              <div className="absolute inset-0 grain pointer-events-none" />
            )}
            <div
              className={`relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${
                isDark ? "" : ""
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
                <div className="lg:col-span-7">
                  <p
                    className={`mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] uppercase ${
                      isDark ? "text-pds-amber-light" : "text-pds-fire"
                    }`}
                  >
                    <Icon size={14} strokeWidth={2} />
                    <span
                      className={`h-px w-8 ${
                        isDark ? "bg-pds-amber-light" : "bg-pds-fire"
                      }`}
                    />
                    Categoria · {meta.label}
                  </p>
                  <h2
                    className={`font-display leading-[1.04] text-balance text-[clamp(2rem,4.4vw,3.4rem)] ${
                      isDark ? "text-pds-cream" : "text-pds-graphite"
                    }`}
                  >
                    {meta.label}
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p
                    className={`text-[1.05rem] leading-relaxed ${
                      isDark ? "text-pds-cream/80" : "text-pds-stone"
                    }`}
                  >
                    {meta.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((a) => (
                  <article
                    key={a.slug}
                    className={`group relative rounded-3xl overflow-hidden border transition-all hover:-translate-y-1 ${
                      isDark
                        ? "bg-white/5 border-white/10 hover:border-pds-amber-light"
                        : "bg-white border-pds-line hover:border-pds-amber"
                    }`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-pds-cream">
                      <Image
                        src={a.image}
                        alt={a.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      {a.highlight && (
                        <span className="absolute top-3 right-3 px-2.5 py-1 bg-pds-amber text-pds-graphite text-[0.62rem] uppercase tracking-[0.18em] font-bold rounded-full whitespace-nowrap shadow-md">
                          {a.highlight}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3
                        className={`font-display text-[1.4rem] leading-tight mb-3 ${
                          isDark ? "text-pds-cream" : "text-pds-graphite"
                        }`}
                      >
                        {a.name}
                      </h3>
                      <p
                        className={`text-[0.95rem] leading-relaxed ${
                          isDark ? "text-pds-cream/75" : "text-pds-stone"
                        }`}
                      >
                        {a.description}
                      </p>
                      {a.intensity && (
                        <div className="mt-5 flex items-center gap-2">
                          <span
                            className={`text-[0.62rem] uppercase tracking-[0.2em] font-semibold ${
                              isDark
                                ? "text-pds-cream/55"
                                : "text-pds-stone"
                            }`}
                          >
                            Intensidade
                          </span>
                          <div className="flex gap-1">
                            {[1, 2, 3].map((n) => (
                              <span
                                key={n}
                                className={`w-2 h-2 rounded-full ${
                                  n <= (a.intensity ?? 0)
                                    ? "bg-pds-fire"
                                    : isDark
                                    ? "bg-white/15"
                                    : "bg-pds-line"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-pds-cream py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-display text-pds-graphite text-balance text-[clamp(1.8rem,3.8vw,2.8rem)] leading-[1.05]">
            Tudo isso em <span className="italic text-pds-fire">um só destino</span>.
            <br />
            Vamos planejar a sua aventura?
          </h2>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button href="/contato" variant="primary" size="lg" withIcon>
              Reservar agora
            </Button>
            <Button
              href={CONTACT.whatsapp.href}
              external
              variant="secondary"
              size="lg"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
