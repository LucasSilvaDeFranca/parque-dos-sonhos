import { Shield, Accessibility, Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

export function Authority() {
  return (
    <section className="relative bg-pds-cream py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-pds-amber/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
              <span className="h-px w-8 bg-pds-fire" />
              Prova de autoridade
            </p>
            <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(2rem,4.4vw,3.6rem)]">
              Referência em
              <br />
              <span className="italic text-pds-green">segurança</span> e{" "}
              <span className="italic text-pds-green">acessibilidade</span>
              <br />
              no Brasil
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-pds-stone leading-relaxed">
            <p className="text-[1.08rem] text-pretty">
              O <strong className="text-pds-graphite">Parque dos Sonhos</strong>{" "}
              foi um dos primeiros empreendimentos do mundo certificado pela
              norma <strong className="text-pds-graphite">ISO 21101</strong> em
              Sistema de Gestão de Segurança para atividades de aventura.
            </p>
            <p className="text-[1.08rem] text-pretty">
              Também somos referência em inclusão, com a certificação{" "}
              <strong className="text-pds-graphite">ABNT NBR 9050</strong> em
              acessibilidade — garantindo experiências de aventura para todos,
              inclusive pessoas com mobilidade reduzida.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((c, i) => (
                <div
                  key={c.code}
                  className="group relative bg-white rounded-2xl p-6 border border-pds-line hover:border-pds-amber transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-pds-green-deep flex items-center justify-center text-pds-amber-light">
                      {i === 0 ? (
                        <Shield size={18} strokeWidth={1.7} />
                      ) : (
                        <Accessibility size={18} strokeWidth={1.7} />
                      )}
                    </div>
                    <span className="font-mono text-[0.7rem] tracking-[0.1em] text-pds-stone font-semibold">
                      {c.code}
                    </span>
                  </div>
                  <p className="font-display text-pds-graphite text-[1.1rem] leading-snug">
                    {c.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 p-5 bg-pds-green-deep text-pds-cream rounded-2xl">
              <Award size={22} strokeWidth={1.7} className="flex-shrink-0 text-pds-amber-light mt-0.5" />
              <div>
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-pds-amber-light font-semibold mb-1">
                  Reconhecimento internacional
                </p>
                <p className="text-pds-cream/85 text-[0.95rem]">
                  Premiado em Londres no <strong>World Travel Market 2014</strong>{" "}
                  como &ldquo;O Melhor em Turismo Responsável&rdquo; e &ldquo;O
                  Melhor para Pessoas com Deficiência&rdquo;.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
