import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortalLink, PortalSection } from "@/lib/content/portal-do-hospede";

interface Props {
  sections: readonly PortalSection[];
}

export function ServicesGrid({ sections }: Props) {
  return (
    <section className="bg-pds-bone py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 space-y-20 lg:space-y-24">
        {sections.map((section) => (
          <div key={section.title}>
            <SectionHeader eyebrow={section.eyebrow} title={section.title} />
            <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Tile item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5 border-b border-pds-line pb-4">
      <span className="font-display text-pds-amber text-sm tabular-nums tracking-[0.2em]">
        {eyebrow}
      </span>
      <h2 className="font-display text-pds-green-darkest text-[clamp(1.55rem,2.6vw,2.1rem)] font-medium leading-none">
        {title}
      </h2>
    </div>
  );
}

function Tile({ item }: { item: PortalLink }) {
  const Icon = item.icon;

  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-full bg-pds-cream text-pds-green-deep transition-colors duration-300 group-hover:bg-pds-amber-light group-hover:text-pds-green-darkest"
          aria-hidden
        >
          <Icon size={22} strokeWidth={1.7} />
        </span>
        {item.comingSoon ? (
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-pds-stone/70">
            Em breve
          </span>
        ) : (
          <ArrowUpRight
            size={18}
            strokeWidth={1.8}
            className="text-pds-mist transition-all duration-300 group-hover:text-pds-fire group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        )}
      </div>
      <span className="mt-8 block font-display text-[1.05rem] leading-tight text-pds-green-darkest">
        {item.label}
      </span>
    </>
  );

  const shell =
    "group relative flex h-full min-h-[170px] flex-col justify-between rounded-2xl border border-pds-line bg-white p-5 transition-all duration-300";
  const interactive =
    "hover:-translate-y-1 hover:border-pds-amber/70 hover:shadow-[0_18px_40px_-24px_rgba(31,92,46,0.35)]";
  const disabled = "cursor-not-allowed opacity-60";

  if (item.comingSoon) {
    return (
      <div className={`${shell} ${disabled}`} aria-disabled>
        {inner}
      </div>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shell} ${interactive}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={item.href as never} className={`${shell} ${interactive}`}>
      {inner}
    </Link>
  );
}
