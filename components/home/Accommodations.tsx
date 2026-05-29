import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ACCOMMODATIONS } from "@/lib/content/accommodations";
import { Users } from "lucide-react";

export function Accommodations() {
  // 6 destaques na home (do maior para o menor) — os 9 tipos completos ficam em /acomodacoes
  const featured = ACCOMMODATIONS.slice(0, 6);

  return (
    <section className="relative bg-pds-bone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
              <span className="h-px w-8 bg-pds-fire" />
              Acomodações
            </p>
            <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(2rem,4.6vw,3.6rem)]">
              Conforto para descansar
              <br />
              depois de viver{" "}
              <span className="italic text-pds-fire">grandes experiências</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pds-stone leading-relaxed text-[1.05rem] text-pretty">
              9 tipos de acomodações entre apartamentos e chalés — 30 unidades
              no total, das quais 27 são adaptadas para pessoas com deficiência
              ou mobilidade reduzida.
            </p>
          </div>
        </div>

        {/* Grid de tipos com foto real em cada card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {featured.map((acc, i) => (
            <article
              key={acc.slug}
              className="group bg-white rounded-2xl border border-pds-line overflow-hidden hover:border-pds-amber hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-pds-cream">
                <Image
                  src={acc.image}
                  alt={acc.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[0.62rem] uppercase tracking-[0.2em] font-semibold bg-pds-bone/90 text-pds-graphite backdrop-blur">
                  {acc.type === "chalé" ? "Chalé" : "Apartamento"}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-pds-graphite text-[1.15rem] leading-tight">
                    {acc.name}
                  </h3>
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-pds-stone font-semibold mt-1 whitespace-nowrap">
                    0{i + 1}
                  </span>
                </div>
                <p className="inline-flex items-center gap-1.5 text-pds-stone text-[0.82rem]">
                  <Users size={13} strokeWidth={1.7} />
                  {acc.capacity}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center sm:justify-start">
          <Button href="/acomodacoes" variant="secondary" withIcon>
            Ver todas as 9 acomodações
          </Button>
        </div>
      </div>
    </section>
  );
}
