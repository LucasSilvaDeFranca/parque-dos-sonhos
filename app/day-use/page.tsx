import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import {
  DAY_USE_PRICES,
  DAY_USE_INCLUDES,
  VISITACAO_PRICES,
  VISITACAO_MEALS,
  ACTIVITY_PRICES,
} from "@/lib/content/day-use";
import {
  CalendarCheck,
  UtensilsCrossed,
  Mountain,
  Ticket,
  Coffee,
  Sparkles,
  Info,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Day Use & Visitação — Viva o Parque dos Sonhos em um dia",
  description:
    "Pacote Day Use com 2 refeições e 3 atividades, ou Visitação avulsa com tarifário por atividade. Tarifário oficial atualizado em Socorro-SP.",
};

const fmt = (n: number | string) =>
  typeof n === "number"
    ? n.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: n % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2,
      })
    : `R$ ${n}`;

export default function DayUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Day Use & Visitação"
        title={
          <>
            Viva o Parque dos Sonhos<br />
            <span className="italic text-pds-amber-light">
              mesmo sem se hospedar
            </span>
          </>
        }
        description="Duas formas de aproveitar o parque por um dia: o pacote Day Use, com refeições e atividades inclusas, ou a Visitação com tarifário avulso por atividade."
        imageHint="Visitantes na bóia-cross durante o Day Use no Parque dos Sonhos"
        imageSrc="/images/site-atual/day-use.jpg"
        imagePosition="center 40%"
      />

      {/* Comparação rápida: Day Use vs Visitação */}
      <section className="bg-pds-bone py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
              <span className="h-px w-8 bg-pds-fire" />
              Como funciona
            </p>
            <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(2rem,4vw,3rem)]">
              Duas formas de{" "}
              <span className="italic text-pds-fire">curtir o parque</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="bg-white rounded-3xl p-8 border border-pds-line">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-pds-fire/15 text-pds-fire flex items-center justify-center">
                  <Sparkles size={20} strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-pds-graphite text-[1.6rem] leading-tight">
                  Day Use
                </h3>
              </div>
              <p className="text-pds-stone leading-relaxed mb-5">
                Pacote completo: <strong className="text-pds-graphite">2 refeições</strong>{" "}
                inclusas (almoço + café caipira) e{" "}
                <strong className="text-pds-graphite">3 atividades</strong> à
                escolha entre tirolesas, rapel, arvorismo, cavalgada e mais.
              </p>
              <p className="text-pds-fire font-semibold text-[1.5rem] font-display">
                a partir de R$ 225
              </p>
              <p className="text-[0.78rem] text-pds-stone mt-1">por adulto · meio de semana</p>
            </article>
            <article className="bg-pds-graphite text-pds-cream rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-pds-amber/20 text-pds-amber-light flex items-center justify-center">
                  <Ticket size={20} strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-pds-cream text-[1.6rem] leading-tight">
                  Visitação
                </h3>
              </div>
              <p className="text-pds-cream/80 leading-relaxed mb-5">
                Só o acesso ao parque, para você consumir{" "}
                <strong className="text-pds-cream">refeições e atividades</strong>{" "}
                à parte, no seu ritmo, com tarifário avulso.
              </p>
              <p className="text-pds-amber-light font-semibold text-[1.5rem] font-display">
                a partir de R$ 19
              </p>
              <p className="text-[0.78rem] text-pds-cream/65 mt-1">por adulto · meio de semana</p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══════════════ DAY USE ═══════════════ */}
      <section className="bg-pds-cream py-24 lg:py-32 relative">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-12 items-end">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
                <Sparkles size={14} strokeWidth={2} />
                <span className="h-px w-8 bg-pds-fire" />
                Pacote · Day Use
              </p>
              <h2 className="font-display leading-[1.04] text-pds-graphite text-balance text-[clamp(2rem,4.4vw,3.2rem)]">
                Day Use no Parque dos Sonhos
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-pds-stone leading-relaxed text-[1.05rem]">
                Trabalhamos com limite diário de Day Use. Consulte a
                disponibilidade antes da sua visita.
              </p>
            </div>
          </div>

          {/* O que inclui */}
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            <article className="bg-white rounded-3xl p-7 border border-pds-line">
              <div className="w-11 h-11 rounded-xl bg-pds-green-deep text-pds-amber-light flex items-center justify-center mb-4">
                <UtensilsCrossed size={18} strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-pds-graphite text-[1.3rem] leading-tight mb-3">
                2 refeições inclusas
              </h3>
              <ul className="space-y-2">
                {DAY_USE_INCLUDES.refeicoes.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2 text-pds-stone text-[0.9rem] leading-relaxed"
                  >
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-pds-fire flex-shrink-0 mt-1"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-white rounded-3xl p-7 border border-pds-line">
              <div className="w-11 h-11 rounded-xl bg-pds-green-deep text-pds-amber-light flex items-center justify-center mb-4">
                <Mountain size={18} strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-pds-graphite text-[1.3rem] leading-tight mb-3">
                3 atividades à escolha
              </h3>
              <p className="text-pds-stone text-[0.9rem] leading-relaxed">
                {DAY_USE_INCLUDES.atividades} — tirolesas, rapel, arvorismo,
                cavalgada, charrete, trator e mais.
              </p>
            </article>
            <article className="bg-white rounded-3xl p-7 border border-pds-line">
              <div className="w-11 h-11 rounded-xl bg-pds-green-deep text-pds-amber-light flex items-center justify-center mb-4">
                <Sparkles size={18} strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-pds-graphite text-[1.3rem] leading-tight mb-3">
                Acesso à estrutura
              </h3>
              <ul className="space-y-2">
                {DAY_USE_INCLUDES.outros.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-pds-stone text-[0.9rem] leading-relaxed"
                  >
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-pds-fire flex-shrink-0 mt-1"
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Tarifário Day Use */}
          <div className="bg-white rounded-[28px] border border-pds-line overflow-hidden">
            <div className="grid md:grid-cols-2">
              {(["meioSemana", "fimSemana"] as const).map((key, i) => {
                const p = DAY_USE_PRICES[key];
                return (
                  <div
                    key={key}
                    className={`p-8 lg:p-10 ${
                      i === 0
                        ? "md:border-r border-pds-line"
                        : "bg-pds-cream/50"
                    }`}
                  >
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-pds-fire mb-3">
                      {p.label}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between border-b border-pds-line pb-3">
                        <span className="text-pds-graphite font-medium">
                          Adulto
                        </span>
                        <span className="font-display text-pds-graphite text-[1.8rem] leading-none">
                          {fmt(p.adulto)}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between border-b border-pds-line pb-3">
                        <span className="text-pds-graphite">
                          Criança 5 a 12 anos
                        </span>
                        <span className="font-display text-pds-graphite text-[1.4rem] leading-none">
                          {fmt(p.crianca5a12)}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between pt-1">
                        <span className="text-pds-stone text-[0.92rem]">
                          Criança 0 a 4 anos
                        </span>
                        <span className="text-pds-stone text-[0.82rem] italic">
                          não há day use
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button
              href={CONTACT.whatsapp.href}
              external
              variant="primary"
              size="lg"
              withIcon
            >
              <CalendarCheck size={18} strokeWidth={1.8} />
              Agendar Day Use
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ VISITAÇÃO ═══════════════ */}
      <section className="bg-pds-green-darkest text-pds-cream py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-12 items-end">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-amber-light">
                <Ticket size={14} strokeWidth={2} />
                <span className="h-px w-8 bg-pds-amber-light" />
                Visitação · Tarifário avulso
              </p>
              <h2 className="font-display leading-[1.04] text-pds-cream text-balance text-[clamp(2rem,4.4vw,3.2rem)]">
                Visitação no Parque dos Sonhos
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-pds-cream/80 leading-relaxed text-[1.05rem]">
                Pague apenas a entrada e escolha refeições e atividades
                separadamente, no seu ritmo.
              </p>
            </div>
          </div>

          {/* Tarifário entrada */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-[28px] overflow-hidden mb-8">
            <div className="px-7 py-5 bg-white/[0.03] border-b border-white/10 flex items-center gap-3">
              <Ticket
                size={18}
                strokeWidth={1.7}
                className="text-pds-amber-light"
              />
              <h3 className="font-display text-pds-cream text-[1.25rem]">
                Entrada · Visitação
              </h3>
            </div>
            <div className="grid md:grid-cols-2">
              {(["meioSemana", "fimSemana"] as const).map((key, i) => {
                const p = VISITACAO_PRICES[key];
                return (
                  <div
                    key={key}
                    className={`p-7 lg:p-9 ${
                      i === 0 ? "md:border-r border-white/10" : ""
                    }`}
                  >
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-pds-amber-light mb-4">
                      {p.label}
                    </p>
                    <ul className="space-y-2.5 text-[0.95rem]">
                      <Row label="Adulto" value={fmt(p.adulto)} highlight />
                      <Row
                        label="Melhor Idade"
                        sub="com documento"
                        value={fmt(p.melhorIdade)}
                      />
                      <Row
                        label="Estudante"
                        sub="com documento"
                        value={fmt(p.estudante)}
                      />
                      <Row
                        label="Criança 5 a 12 anos"
                        value={fmt(p.crianca5a12)}
                      />
                      <Row
                        label="Criança 0 a 4 anos"
                        value={fmt(p.crianca0a4)}
                      />
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Refeições à parte */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-[28px] overflow-hidden mb-8">
            <div className="px-7 py-5 bg-white/[0.03] border-b border-white/10 flex items-center gap-3">
              <Coffee
                size={18}
                strokeWidth={1.7}
                className="text-pds-amber-light"
              />
              <h3 className="font-display text-pds-cream text-[1.25rem]">
                Refeições à parte
              </h3>
            </div>
            <div className="divide-y divide-white/10">
              {VISITACAO_MEALS.map((m) => (
                <div
                  key={m.name}
                  className="px-7 py-4 lg:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center"
                >
                  <div className="md:col-span-6">
                    <p className="font-medium text-pds-cream">{m.name}</p>
                    {"note" in m && m.note && (
                      <p className="text-[0.78rem] text-pds-cream/55 italic mt-0.5">
                        {m.note}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-3 flex md:justify-end items-baseline gap-2">
                    <span className="text-[0.72rem] uppercase tracking-wider text-pds-cream/55">
                      Adulto
                    </span>
                    <span className="font-display text-pds-cream text-[1.15rem]">
                      {fmt(m.adulto)}
                    </span>
                  </div>
                  <div className="md:col-span-3 flex md:justify-end items-baseline gap-2">
                    <span className="text-[0.72rem] uppercase tracking-wider text-pds-cream/55">
                      Criança 5–12
                    </span>
                    <span className="font-display text-pds-cream text-[1.15rem]">
                      {fmt(m.crianca)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarifário Atividades */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-[28px] overflow-hidden">
            <div className="px-7 py-5 bg-white/[0.03] border-b border-white/10 flex flex-wrap items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <Mountain
                  size={18}
                  strokeWidth={1.7}
                  className="text-pds-amber-light"
                />
                <h3 className="font-display text-pds-cream text-[1.25rem]">
                  Atividades avulsas
                </h3>
              </div>
              <p className="text-[0.78rem] text-pds-cream/65 inline-flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-pds-amber" />
                disponível também no pacote Day Use
              </p>
            </div>
            <ul className="divide-y divide-white/10">
              {ACTIVITY_PRICES.map((a) => (
                <li
                  key={a.name}
                  className="px-7 py-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center"
                >
                  <div className="md:col-span-8">
                    <div className="flex items-center flex-wrap gap-2">
                      <p className="font-medium text-pds-cream">{a.name}</p>
                      {a.inDayUse && (
                        <span
                          title="Disponível no pacote Day Use"
                          className="inline-block w-1.5 h-1.5 rounded-full bg-pds-amber"
                        />
                      )}
                      {a.kids && (
                        <span className="text-[0.62rem] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full bg-pds-amber/15 text-pds-amber-light border border-pds-amber/30 font-semibold">
                          Kids
                        </span>
                      )}
                    </div>
                    <p className="text-[0.82rem] text-pds-cream/60 mt-0.5 leading-snug">
                      {a.detail}
                    </p>
                  </div>
                  <div className="md:col-span-4 flex md:justify-end">
                    <span className="font-display text-pds-cream text-[1.25rem]">
                      {fmt(a.price)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Aviso */}
          <div className="mt-8 flex items-start gap-3 bg-pds-amber/10 border border-pds-amber/30 rounded-2xl px-6 py-5">
            <Info
              size={18}
              strokeWidth={1.7}
              className="text-pds-amber-light flex-shrink-0 mt-0.5"
            />
            <p className="text-pds-cream/85 text-[0.9rem] leading-relaxed">
              Os valores acima são referenciais do tarifário oficial. Algumas
              atividades dependem de condições climáticas e disponibilidade de
              monitores. Confirme tudo antes da sua visita.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button
              href={CONTACT.whatsapp.href}
              external
              variant="primary"
              size="lg"
              withIcon
            >
              <CalendarCheck size={18} strokeWidth={1.8} />
              Agendar Visitação
            </Button>
          </div>
        </div>
      </section>

      {/* Imagem + CTA final */}
      <section className="bg-pds-bone py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="relative aspect-[16/7] rounded-[28px] overflow-hidden shadow-xl">
            <Image
              src="/images/site-atual/visitacao.jpg"
              alt="Cachoeira dos Sonhos — visitação no parque"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,20,16,0.15) 40%, rgba(11,20,16,0.85) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-12 text-white max-w-3xl">
              <h2 className="font-display leading-[1.05] text-balance text-[clamp(1.8rem,3.8vw,2.8rem)]">
                Vamos planejar a sua{" "}
                <span className="italic text-pds-amber-light">visita</span>?
              </h2>
              <p className="mt-3 text-white/85 text-[1rem] max-w-xl leading-relaxed">
                Nossa equipe te ajuda a montar o melhor formato para o seu
                grupo — Day Use ou Visitação.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href={CONTACT.whatsapp.href}
                  external
                  variant="primary"
                  size="md"
                  withIcon
                >
                  WhatsApp
                </Button>
                {CONTACT.reservas.map((p) => (
                  <Button
                    key={p.href}
                    href={p.href}
                    external
                    variant="ghost"
                    size="md"
                  >
                    {p.display}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({
  label,
  sub,
  value,
  highlight,
}: {
  label: string;
  sub?: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <li className="flex items-baseline justify-between gap-4 py-1">
      <span className="text-pds-cream/90">
        {label}
        {sub && (
          <span className="text-pds-cream/50 text-[0.78rem] italic ml-1.5">
            ({sub})
          </span>
        )}
      </span>
      <span
        className={`font-display whitespace-nowrap ${
          highlight
            ? "text-pds-amber-light text-[1.4rem] leading-none"
            : "text-pds-cream text-[1.05rem] leading-none"
        }`}
      >
        {value}
      </span>
    </li>
  );
}
