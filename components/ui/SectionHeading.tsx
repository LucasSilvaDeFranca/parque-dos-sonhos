import { clsx } from "./clsx";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase",
            isLight ? "text-pds-amber-light" : "text-pds-fire"
          )}
        >
          <span
            className={clsx(
              "h-px w-8",
              isLight ? "bg-pds-amber-light" : "bg-pds-fire"
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-display text-balance leading-[1.05]",
          "text-[clamp(2rem,4.2vw,3.4rem)]",
          isLight ? "text-pds-cream" : "text-pds-graphite"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-6 text-[1.05rem] leading-relaxed text-pretty",
            isLight ? "text-pds-cream/85" : "text-pds-stone"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
