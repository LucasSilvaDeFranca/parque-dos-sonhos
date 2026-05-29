import { PageHero } from "./PageHero";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  imageSrc?: string;
  imageHint?: string;
  imagePosition?: string;
  /** Atualização da política/termo (ex.: "Janeiro de 2022") */
  updatedAt?: string;
  children: React.ReactNode;
}

/**
 * Layout padrão para páginas institucionais/legais (Termos, Privacidade, etc.).
 * Cabeçalho dramático via PageHero + corpo em coluna estreita (max-w-3xl) com tipografia
 * de leitura confortável.
 */
export function LegalPage({
  eyebrow,
  title,
  description,
  imageSrc,
  imageHint,
  imagePosition,
  updatedAt,
  children,
}: Props) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        imageSrc={imageSrc}
        imageHint={imageHint}
        imagePosition={imagePosition}
      />
      <section className="bg-pds-bone py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          {updatedAt && (
            <p className="mb-10 inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.24em] uppercase text-pds-graphite/60">
              <span className="h-px w-8 bg-pds-graphite/30" />
              Atualização: {updatedAt}
            </p>
          )}
          <article className="legal-prose">{children}</article>
        </div>
      </section>
    </>
  );
}
