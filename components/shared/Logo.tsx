import Image from "next/image";
import { clsx } from "@/components/ui/clsx";

interface Props {
  /** "dark" = logo com texto preto (para fundos claros); "light" = logo com texto branco (para fundos escuros). */
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  /**
   * Mantido por compatibilidade — a tagline "A Terra da Aventura" já vem
   * embutida nas artes oficiais do logo, então esta prop é um no-op visual.
   */
  showTagline?: boolean;
  className?: string;
}

/** Logo oficial do Hotel Fazenda Parque dos Sonhos.
 *  Arte original 1080×454 (aspect ratio 2.379) com wordmark, registro,
 *  tagline e o monograma do "céu estrelado com a árvore" em azul. */
export function Logo({
  tone = "dark",
  size = "md",
  className = "",
}: Props) {
  const src =
    tone === "light"
      ? "/images/brand/logo-horizontal-white.png"
      : "/images/brand/logo-horizontal.png";

  // Altura visual em px — a largura é calculada pelo aspect ratio.
  const height = { sm: 42, md: 56, lg: 72 }[size];
  const width = Math.round(height * (1080 / 454));

  return (
    <span
      className={clsx("inline-flex items-center select-none", className)}
      style={{ height }}
    >
      <Image
        src={src}
        alt="Hotel Fazenda Parque dos Sonhos — A Terra da Aventura"
        width={width}
        height={height}
        priority
        sizes={`${width}px`}
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
