import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  imageHint?: string;
  /** Caminho da foto real em /public. Quando ausente, renderiza o placeholder estilizado. */
  imageSrc?: string;
  /** Posicionamento do object-fit (ex.: "center 35%") */
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  imageHint,
  imageSrc,
  imagePosition = "center",
}: Props) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-pds-green-darkest text-pds-cream overflow-hidden">
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageHint ?? eyebrow}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: imagePosition }}
            className="absolute inset-0"
          />
        ) : (
          <ImagePlaceholder
            label={imageHint ?? eyebrow}
            aspect="auto"
            className="absolute inset-0 rounded-none border-0"
          />
        )}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grain pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <p className="mb-6 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.32em] uppercase text-pds-amber-light">
          <span className="h-px w-10 bg-pds-amber-light/70" />
          {eyebrow}
        </p>
        <h1 className="font-display text-balance leading-[1.02] tracking-[-0.02em] text-pds-cream text-[clamp(2.4rem,5.6vw,4.8rem)] max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-pds-cream/85 text-[1.1rem] leading-relaxed text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
