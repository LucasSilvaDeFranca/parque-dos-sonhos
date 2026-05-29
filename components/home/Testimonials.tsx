import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content/testimonials";

export function Testimonials() {
  return (
    <section className="relative bg-pds-bone py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
            <span className="h-px w-8 bg-pds-fire" />
            Depoimentos
          </p>
          <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(2rem,4.4vw,3.4rem)]">
            Quem vive,{" "}
            <span className="italic text-pds-fire">recomenda</span>
          </h2>
          <p className="mt-6 text-pds-stone text-[1.05rem] leading-relaxed">
            Milhares de hóspedes já viveram essa experiência e voltaram para
            contar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <article
              key={t.name}
              className={`relative bg-white rounded-3xl p-7 border border-pds-line hover:border-pds-amber transition-all hover:-translate-y-1 hover:shadow-lg ${
                i % 4 === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Quote
                size={28}
                className="text-pds-amber/40 mb-4"
                strokeWidth={1.5}
              />
              <p className="text-pds-graphite text-[1.02rem] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-pds-line flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-pds-graphite text-[1rem] leading-tight">
                    {t.name}
                  </p>
                  <p className="text-pds-stone text-[0.78rem] mt-0.5">
                    {t.origin}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className="text-pds-amber fill-pds-amber"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-14 text-pds-stone">
          {[
            { value: "4.8/5", label: "Google" },
            { value: "9.2", label: "Booking" },
            { value: "Excelente", label: "TripAdvisor" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-pds-graphite text-[1.6rem] leading-none">
                {s.value}
              </div>
              <div className="mt-1.5 text-[0.7rem] uppercase tracking-[0.22em] text-pds-stone font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
