import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface Highlight {
  title: string;
  description: string;
  badge: string;
  span: string;
  src: string;
  alt: string;
  position?: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Tirolesa Voadora",
    description:
      "1 km de extensão sobre o vale do Rio Cachoeirinha — a primeira voadora do Brasil.",
    badge: "Aventura",
    span: "lg:col-span-7 lg:row-span-2",
    src: "/images/site-atual/tirolesa-voadora.jpg",
    alt: "Tirolesa Voadora do Parque dos Sonhos",
    position: "center 40%",
  },
  {
    title: "Cachoeira dos Sonhos",
    description:
      "Praia de água doce em frente ao hotel — ambiente ideal para toda a família.",
    badge: "Natureza",
    span: "lg:col-span-5",
    src: "/images/hero/01-cachoeira.jpg",
    alt: "Cachoeira dos Sonhos com praia de água doce em frente ao hotel",
  },
  {
    title: "Aventuras Kids",
    description:
      "Tirolesa, arvorismo, escalada e pônei para a galerinha — tudo com total segurança.",
    badge: "Família",
    span: "lg:col-span-5",
    src: "/images/site-atual/criancas.jpg",
    alt: "Crianças nas atividades do parque",
  },
  {
    title: "Day Use",
    description: "Passe um dia inteiro com 2 refeições e 3 atividades inclusas.",
    badge: "Visitação",
    span: "lg:col-span-6",
    src: "/images/site-atual/day-use.jpg",
    alt: "Visitantes em Day Use no parque",
  },
  {
    title: "Pet Friendly",
    description: "Seu cachorro também aproveita a fazenda com você.",
    badge: "Inclusivo",
    span: "lg:col-span-6",
    src: "/images/site-atual/pet-friendly.jpg",
    alt: "Pet friendly no Parque dos Sonhos",
  },
];

export function Experience() {
  return (
    <section className="relative bg-pds-bone py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
              <span className="h-px w-8 bg-pds-fire" />
              A experiência
            </p>
            <h2 className="font-display leading-[1.04] text-pds-graphite text-balance text-[clamp(2.2rem,5vw,4rem)]">
              Aqui você não apenas
              <br />
              se hospeda.{" "}
              <span className="italic text-pds-fire">Você vive.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-pds-stone text-[1.05rem] leading-relaxed text-pretty">
              Muito mais que um hotel fazenda, o Parque dos Sonhos é um destino
              completo: 24 atividades de aventura, 6 km de trilhas, praia natural
              e pensão completa.
            </p>
            <Button
              href="/atividades"
              variant="ghost"
              size="sm"
              withIcon
              className="mt-6 -ml-4 text-pds-fire hover:text-pds-fire-light"
            >
              Conhecer todas as atividades
            </Button>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:auto-rows-[260px] gap-4 lg:gap-5">
          {HIGHLIGHTS.map((h) => (
            <article
              key={h.title}
              className={`${h.span} group relative overflow-hidden rounded-3xl bg-pds-graphite min-h-[260px]`}
            >
              <Image
                src={h.src}
                alt={h.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: h.position ?? "center",
                }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,20,16,0) 35%, rgba(11,20,16,0.88) 100%)",
                }}
              />
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white">
                <span className="self-start mb-3 px-2.5 py-1 rounded-full text-[0.62rem] uppercase tracking-[0.2em] font-semibold bg-pds-amber text-pds-graphite">
                  {h.badge}
                </span>
                <h3 className="font-display text-[1.6rem] lg:text-[2rem] leading-[1.05] tracking-tight">
                  {h.title}
                </h3>
                <p className="mt-2 text-white/85 text-[0.95rem] leading-snug max-w-md">
                  {h.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
