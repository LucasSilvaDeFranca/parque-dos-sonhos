"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { clsx } from "@/components/ui/clsx";

export interface HeroSlide {
  src: string;
  alt: string;
  /** objectPosition CSS — ex.: "center 60%" para puxar o foco pra parte de baixo. */
  position?: string;
}

interface Props {
  slides: HeroSlide[];
  /** Intervalo entre slides em ms. Default 6000. */
  interval?: number;
}

/** Slideshow do hero com crossfade entre imagens.
 *  Cliente leve: mantém só índice + setInterval, sem libs externas.
 *  A primeira imagem usa `priority` para LCP; as demais carregam normalmente. */
export function HeroSlideshow({ slides, interval = 6000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className="absolute inset-0" aria-hidden>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={clsx(
            "absolute inset-0 transition-opacity duration-[1400ms] ease-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: slide.position ?? "center 55%",
            }}
          />
        </div>
      ))}
    </div>
  );
}
