import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { CONTACT, CERTIFICATIONS, AWARDS } from "@/lib/constants";
import {
  FACILITIES,
  ACCESSIBILITY_EQUIPMENT,
  HOTEL_STATS,
  HOTEL_DISTANCES,
} from "@/lib/content/hotel";
import {
  Shield,
  Accessibility,
  Award,
  MapPin,
  Check,
  Compass,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "O Hotel — Muito mais que um hotel fazenda",
  description:
    "Hotel Fazenda voltado ao ecoturismo, turismo de aventura e turismo rural. 20 alqueires na divisa SP/MG, 30 acomodações, 24 atividades e acessibilidade total.",
};

export default function OHotelPage() {
  return (
    <>
      <PageHero
        eyebrow="O hotel"
        title={
          <>
            Conheça o nosso<br />
            <span className="italic text-pds-amber-light">hotel fazenda</span>
          </>
        }
        description="Um hotel fazenda voltado ao ecoturismo, turismo de aventura e turismo rural. Situado na divisa entre São Paulo e Minas Gerais, em 20 alqueires de cenário exuberante com cachoeiras, trilhas, animais e grutas."
        imageHint="Vista aérea do Hotel Fazenda Parque dos Sonhos em Socorro-SP"
        imageSrc="/images/site-atual/o-hotel-hero.jpg"
        imagePosition="center 50%"
      />

      {/* Story */}
      <section className="bg-pds-bone py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-pds-stone leading-relaxed text-[1.05rem]">
            <p className="text-pretty">
              O Hotel Fazenda Parque dos Sonhos fica a{" "}
              <strong className="text-pds-graphite">15 km de Socorro</strong>{" "}
              (SP), a <strong className="text-pds-graphite">22 km de Bueno
              Brandão</strong> (MG) e a{" "}
              <strong className="text-pds-graphite">2 horas de São Paulo</strong>{" "}
              (140 km), na divisa entre os dois estados.
            </p>
            <p className="text-pretty">
              Em <strong className="text-pds-graphite">20 alqueires</strong> de
              cenário exuberante, você encontra cachoeiras, trilhas ecológicas,
              animais, grutas e <strong className="text-pds-graphite">24
              atividades</strong> de aventura para todas as idades.
            </p>
            <p className="text-pretty">
              O destaque é a{" "}
              <strong className="text-pds-graphite">Cachoeira dos Sonhos</strong>{" "}
              — uma praia de água doce com entretenimento para toda a família,
              ambiente ideal para a prática de ecoturismo, turismo de aventura
              e turismo rural, tudo em um único lugar.
            </p>
            <p className="text-pretty">
              Todas as nossas dependências são adaptadas para pessoas com
              deficiência ou mobilidade reduzida. Nossa equipe é treinada para
              garantir conforto e segurança durante todos os passeios e
              atividades.
            </p>
          </div>

          {/* Localização */}
          <aside className="lg:col-span-5">
            <div className="bg-white border border-pds-line rounded-3xl p-7 sticky top-24">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-pds-green-deep text-pds-amber-light flex items-center justify-center">
                  <MapPin size={18} strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-pds-graphite text-[1.3rem]">
                  Localização
                </h3>
              </div>
              <ul className="space-y-3 mb-6">
                {HOTEL_DISTANCES.map((d) => (
                  <li
                    key={d.from}
                    className="flex items-baseline justify-between gap-3 border-b border-pds-line/60 pb-2.5 last:border-0"
                  >
                    <span className="text-pds-stone text-[0.95rem]">
                      {d.from}
                    </span>
                    <span className="font-display text-pds-graphite text-[1.1rem] whitespace-nowrap">
                      {d.km} km
                      {"time" in d && d.time && (
                        <span className="text-pds-stone text-[0.82rem] font-sans ml-2">
                          · {d.time}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-pds-stone text-[0.88rem] leading-relaxed">
                Estrada da Varginha, km 7 — Bairro do Limoeiro · divisa Socorro
                (SP) / Bueno Brandão (MG).
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats faixa */}
      <section className="bg-pds-graphite text-pds-cream py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {HOTEL_STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-pds-amber-light text-[2.6rem] md:text-[3rem] leading-none">
                {s.value}
              </p>
              <p className="mt-2 text-pds-cream/70 text-[0.82rem] leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Estrutura / Facilities */}
      <section className="bg-pds-cream py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
              <span className="h-px w-8 bg-pds-fire" />
              Estrutura completa
            </p>
            <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(2rem,4.4vw,3.2rem)]">
              Tudo para você curtir{" "}
              <span className="italic text-pds-fire">cada momento</span>
            </h2>
            <p className="mt-5 text-pds-stone text-[1.02rem] leading-relaxed">
              Restaurante, lanchonete, sala de primeiros socorros e oito espaços
              dedicados ao lazer, à gastronomia e à inclusão.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {FACILITIES.map((f) => (
              <article
                key={f.slug}
                className="bg-white rounded-3xl p-7 border border-pds-line hover:border-pds-amber transition-colors flex flex-col"
              >
                {f.icon ? (
                  <div className="w-14 h-14 mb-5 relative">
                    <Image
                      src={f.icon}
                      alt=""
                      aria-hidden
                      fill
                      sizes="56px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : null}
                <h3 className="font-display text-pds-graphite text-[1.2rem] leading-tight mb-2">
                  {f.name}
                </h3>
                <p className="text-pds-fire text-[0.78rem] font-semibold tracking-wide uppercase mb-3">
                  {f.short}
                </p>
                <p className="text-pds-stone text-[0.9rem] leading-relaxed flex-1">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tour virtual 360º */}
      <section className="bg-pds-graphite text-pds-cream py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />
        <div className="absolute top-0 -right-32 w-[520px] h-[520px] rounded-full bg-pds-green/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-40 w-[480px] h-[480px] rounded-full bg-pds-fire/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-amber-light">
              <Compass size={14} strokeWidth={2} />
              <span className="h-px w-8 bg-pds-amber-light" />
              Tour virtual 360º
            </p>
            <h2 className="font-display leading-[1.05] text-pds-cream text-balance text-[clamp(2rem,4.4vw,3.2rem)]">
              Conheça o hotel{" "}
              <span className="italic text-pds-amber-light">
                antes de chegar
              </span>
            </h2>
            <p className="mt-5 text-pds-cream/75 text-[1.02rem] leading-relaxed">
              Passeie pelas áreas comuns, acomodações e atrativos do parque em
              uma visita imersiva 360º.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl ring-1 ring-pds-amber/10">
            <iframe
              src="https://hotelfazendaparquedossonhos.mvtour.com.br/"
              title="Tour virtual 360º — Hotel Fazenda Parque dos Sonhos"
              width="100%"
              height="600"
              allowFullScreen
              loading="lazy"
              className="block w-full border-0"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://hotelfazendaparquedossonhos.mvtour.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pds-amber-light text-[0.92rem] hover:text-pds-amber transition-colors"
            >
              Abrir tour em tela cheia
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* Acessibilidade — seção dedicada */}
      <section className="bg-pds-bone py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
              <Accessibility size={14} strokeWidth={2} />
              <span className="h-px w-8 bg-pds-fire" />
              Acessibilidade total
            </p>
            <h2 className="font-display leading-[1.04] text-pds-graphite text-balance text-[clamp(2rem,4.2vw,3rem)]">
              Aventura para{" "}
              <span className="italic text-pds-fire">todas as pessoas</span>
            </h2>
            <p className="mt-6 text-pds-stone leading-relaxed text-[1.02rem] text-pretty">
              O Parque dos Sonhos é referência nacional em acessibilidade.{" "}
              <strong className="text-pds-graphite">
                27 das 30 acomodações
              </strong>{" "}
              são adaptadas para pessoas com deficiência ou mobilidade reduzida,
              e grande parte das atividades de aventura é executada com
              equipamentos específicos de inclusão.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {ACCESSIBILITY_EQUIPMENT.map((item) => (
                <li
                  key={item}
                  className="bg-white border border-pds-line rounded-2xl p-5 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-pds-green-deep text-pds-amber-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <p className="text-pds-graphite text-[0.92rem] leading-snug">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-pds-green-darkest text-pds-cream py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-amber-light">
              <span className="h-px w-8 bg-pds-amber-light" />
              Certificações & Prêmios
            </p>
            <h2 className="font-display leading-[1.05] text-pds-cream text-balance text-[clamp(2rem,4.4vw,3.2rem)]">
              Pioneiros em{" "}
              <span className="italic text-pds-amber-light">
                segurança e inclusão
              </span>
            </h2>
            <p className="mt-6 text-pds-cream/80 leading-relaxed text-pretty">
              Fomos um dos primeiros empreendimentos do mundo a receber
              certificação em segurança de aventura, e o primeiro do Brasil em
              acessibilidade hoteleira.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.code}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-pds-amber text-pds-graphite flex items-center justify-center flex-shrink-0">
                  {i === 0 ? (
                    <Shield size={20} strokeWidth={1.7} />
                  ) : (
                    <Accessibility size={20} strokeWidth={1.7} />
                  )}
                </div>
                <div>
                  <p className="font-mono text-[0.72rem] tracking-[0.12em] text-pds-amber-light font-semibold mb-1.5">
                    {c.code}
                  </p>
                  <h3 className="font-display text-pds-cream text-[1.3rem] leading-snug">
                    {c.title}
                  </h3>
                </div>
              </div>
            ))}

            {AWARDS.map((a) => (
              <div
                key={a.year}
                className="bg-pds-amber text-pds-graphite rounded-2xl p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-pds-graphite text-pds-amber-light flex items-center justify-center flex-shrink-0">
                  <Award size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[0.72rem] tracking-[0.18em] uppercase font-semibold mb-1.5">
                    {a.org} · {a.year}
                  </p>
                  <ul className="font-display space-y-1">
                    {a.titles.map((t) => (
                      <li key={t} className="text-[1.15rem] leading-snug">
                        “{t}”
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Selos reais */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white rounded-2xl p-5 flex items-center justify-center">
                <Image
                  src="/images/certificacoes/abnt-iso-21101.png"
                  alt="Selo ABNT NBR ISO 21101"
                  width={300}
                  height={94}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="bg-white rounded-2xl p-5 flex items-center justify-center">
                <Image
                  src="/images/certificacoes/abnt-9050.png"
                  alt="Selo ABNT NBR 9050"
                  width={300}
                  height={94}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 text-center">
          <Button
            href={CONTACT.whatsapp.href}
            external
            variant="primary"
            size="lg"
            withIcon
          >
            Tire suas dúvidas pelo WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
