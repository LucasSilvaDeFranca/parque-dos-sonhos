import { Button } from "@/components/ui/Button";
import { CONTACT, STATS, BOOKING_URL } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { HeroSlideshow, type HeroSlide } from "./HeroSlideshow";

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/hero/01-cachoeira.jpg",
    alt: "Cachoeira dos Sonhos no Parque dos Sonhos — praia de água doce",
    position: "center 60%",
  },
  {
    src: "/images/hero/02-tirolesa-lua.jpg",
    alt: "Tirolesa do Parque dos Sonhos com a lua ao fundo",
    position: "center 45%",
  },
  {
    src: "/images/hero/03-trilha.jpg",
    alt: "Trilha ecológica em passarela de madeira na mata atlântica",
    position: "center 60%",
  },
  {
    src: "/images/hero/04-cavalgada.jpg",
    alt: "Cavalgada pelas plantações de café no Parque dos Sonhos",
    position: "center 55%",
  },
  {
    src: "/images/hero/05-boia-cross.jpg",
    alt: "Bóia-cross no Rio do Peixe — aventura aquática em família",
    position: "center 55%",
  },
];

export function Hero() {
  return (
    <section
      aria-label="Apresentação"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-pds-green-darkest text-white"
    >
      {/* Background — slideshow de fotos das aventuras */}
      <div className="absolute inset-0">
        <HeroSlideshow slides={HERO_SLIDES} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grain pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 pt-32 pb-20 lg:pb-28">
        <div className="max-w-[58rem]">
          <p className="mb-8 inline-flex items-center gap-3 text-[0.7rem] sm:text-[0.78rem] font-semibold tracking-[0.32em] uppercase text-pds-amber-light">
            <span className="h-px w-10 bg-pds-amber-light/70" />
            Socorro · SP — Divisa SP/MG
          </p>

          <h1 className="font-display font-medium leading-[0.97] tracking-[-0.02em] text-white text-balance text-[clamp(2.6rem,7vw,5.6rem)]">
            O maior complexo
            <br />
            de aventura de
            <br />
            <span className="italic font-light text-pds-amber-light">
              Socorro-SP
            </span>{" "}
            está aqui
          </h1>

          <p className="mt-8 max-w-2xl text-[1.1rem] sm:text-[1.2rem] text-white/85 leading-relaxed text-pretty">
            Natureza, adrenalina e conforto em uma experiência que você nunca
            viveu. Hotel fazenda certificado em segurança e acessibilidade.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Button
              href={BOOKING_URL}
              external
              variant="primary"
              size="lg"
              withIcon
            >
              Reservar agora
            </Button>
            <Button
              href={CONTACT.whatsapp.href}
              external
              variant="outline-light"
              size="lg"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-pds-green-darkest/40 px-5 py-5 lg:py-6 text-center"
            >
              <div className="font-display font-medium text-pds-amber-light text-[1.6rem] lg:text-[2rem] leading-none tabular-nums">
                {s.value}
              </div>
              <div className="mt-1.5 text-white/70 text-[0.72rem] uppercase tracking-[0.2em] font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-white/50">
        <span className="text-[0.62rem] tracking-[0.32em] uppercase">Role</span>
        <ChevronDown size={16} className="animate-bounce" strokeWidth={1.6} />
      </div>
    </section>
  );
}
