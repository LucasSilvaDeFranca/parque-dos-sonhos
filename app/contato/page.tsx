import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQList } from "@/components/contact/FAQ";
import { CONTACT } from "@/lib/constants";
import { MessageCircle, Phone, MapPin, Mail, Clock, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato — Fale com a gente",
  description:
    "Fale com a equipe do Parque dos Sonhos. WhatsApp, telefone, e-mail e formulário de contato. Estamos prontos para planejar sua experiência.",
};

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    title: CONTACT.whatsapp.display,
    sub: "Atendimento rápido e direto",
    href: CONTACT.whatsapp.href,
    external: true,
    accent: "bg-[#25D366]",
  },
  {
    icon: Phone,
    label: "Reservas",
    title: CONTACT.reservas[0].display,
    sub: "Central de reservas",
    href: CONTACT.reservas[0].href,
    accent: "bg-pds-fire",
  },
  {
    icon: Mail,
    label: "E-mail",
    title: CONTACT.email.address,
    sub: "Resposta em até 24h úteis",
    href: CONTACT.email.href,
    accent: "bg-pds-green",
  },
  {
    icon: MapPin,
    label: "Endereço",
    title: "Socorro · SP",
    sub: `${CONTACT.address.line1}`,
    href: CONTACT.address.mapsHref,
    external: true,
    accent: "bg-pds-amber",
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Fale com{" "}
            <span className="italic text-pds-amber-light">a gente</span>
          </>
        }
        description="Nossa equipe está pronta para te ajudar a planejar sua experiência no Parque dos Sonhos."
        imageHint="Crianças se divertindo nas atividades do Parque dos Sonhos"
        imageSrc="/images/site-atual/criancas.jpg"
        imagePosition="center 30%"
      />

      {/* Channels */}
      <section className="bg-pds-bone pt-20 lg:pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHANNELS.map(({ icon: Icon, label, title, sub, href, external, accent }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group bg-white border border-pds-line rounded-3xl p-6 hover:border-pds-amber hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${accent}`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <span className="text-pds-stone text-[0.62rem] uppercase tracking-[0.22em] font-semibold">
                    {label}
                  </span>
                </div>
                <p className="font-display text-pds-graphite text-[1.15rem] leading-tight">
                  {title}
                </p>
                <p className="mt-1.5 text-pds-stone text-[0.85rem]">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + side info */}
      <section className="bg-pds-bone pb-24 lg:pb-32 pt-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="bg-white border border-pds-line rounded-[28px] p-7 lg:p-10">
              <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire">
                Formulário
              </p>
              <h2 className="font-display leading-[1.05] text-pds-graphite text-balance text-[clamp(1.6rem,3.2vw,2.4rem)] mb-8">
                Conte para nós como podemos te ajudar
              </h2>
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-pds-green-darkest text-pds-cream rounded-[28px] p-8 relative overflow-hidden">
              <div className="absolute inset-0 grain pointer-events-none" />
              <div className="relative">
                <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-amber-light mb-5">
                  Como chegar
                </p>
                <h3 className="font-display text-[1.6rem] leading-tight mb-4">
                  Caminho Turístico do Rio do Peixe
                </h3>
                <address className="not-italic text-pds-cream/85 space-y-1 text-[0.97rem] leading-relaxed">
                  <p>{CONTACT.address.line1}</p>
                  <p>{CONTACT.address.line2}</p>
                  <p>{CONTACT.address.line3}</p>
                </address>
                <p className="mt-4 text-[0.78rem] font-mono text-pds-amber-light/85">
                  {CONTACT.address.coords}
                </p>
                <a
                  href={CONTACT.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-pds-amber-light hover:text-white text-[0.92rem] font-medium transition-colors"
                >
                  Abrir no Google Maps
                  <span aria-hidden>→</span>
                </a>
                <div className="mt-7 pt-7 border-t border-white/10 grid grid-cols-2 gap-4 text-[0.85rem]">
                  <div>
                    <p className="text-pds-amber-light/80 text-[0.62rem] uppercase tracking-[0.18em] font-semibold">
                      De São Paulo
                    </p>
                    <p className="text-pds-cream/85 mt-1">≈ 2h · 140 km</p>
                  </div>
                  <div>
                    <p className="text-pds-amber-light/80 text-[0.62rem] uppercase tracking-[0.18em] font-semibold">
                      De Socorro
                    </p>
                    <p className="text-pds-cream/85 mt-1">15 km</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-pds-line rounded-[28px] p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-pds-cream text-pds-fire flex items-center justify-center flex-shrink-0">
                  <Clock size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-pds-fire mb-2">
                    Atendimento
                  </p>
                  <p className="text-pds-graphite font-display text-[1.1rem] leading-snug">
                    Segunda a sábado · 8h às 18h
                  </p>
                  <p className="text-pds-stone text-[0.85rem] mt-1">
                    Aos domingos via WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-pds-line py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-12 lg:mb-16">
            <div className="lg:col-span-5">
              <p className="mb-4 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.32em] uppercase text-pds-fire">
                <span className="h-px w-10 bg-pds-fire/70" />
                Perguntas Frequentes
              </p>
              <h2 className="font-display leading-[1.05] text-balance text-pds-green-darkest text-[clamp(1.9rem,3.6vw,2.8rem)]">
                Dúvidas <em className="italic font-light">comuns</em> antes da sua chegada
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <p className="text-pds-graphite/85 text-[1.02rem] leading-relaxed">
                Reunimos as perguntas que mais recebemos sobre check-in, cancelamentos,
                crianças, como chegar e o que levar na mala. Se a sua dúvida não estiver
                aqui, fale com a gente pelo WhatsApp ou pelo formulário acima — respondemos
                rápido.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-pds-stone text-[0.85rem]">
                <HelpCircle size={15} strokeWidth={1.8} className="text-pds-amber" />
                Clique em cada pergunta para abrir a resposta.
              </p>
            </div>
          </div>

          <FAQList />
        </div>
      </section>
    </>
  );
}
