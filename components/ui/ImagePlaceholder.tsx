import { clsx } from "./clsx";

interface Props {
  label: string;
  hint?: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide" | "auto";
}

const ASPECTS = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
  auto: "",
} as const;

export function ImagePlaceholder({
  label,
  hint,
  className = "",
  aspect = "auto",
}: Props) {
  return (
    <div
      className={clsx(
        "image-placeholder rounded-[20px]",
        ASPECTS[aspect],
        className
      )}
      role="img"
      aria-label={label}
    >
      <span className="text-pds-amber-light/90 text-[0.65rem] font-semibold tracking-[0.25em]">
        IMAGEM
      </span>
      <p className="mt-2 max-w-[16ch] text-pds-cream/95 text-[0.78rem] tracking-wide font-medium">
        {label}
      </p>
      {hint && (
        <p className="mt-2 text-pds-green-soft/60 text-[0.62rem] tracking-[0.2em] font-light">
          {hint}
        </p>
      )}
    </div>
  );
}
