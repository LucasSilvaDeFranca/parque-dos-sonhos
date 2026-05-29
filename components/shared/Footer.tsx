import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, NAV, LEGAL_NAV, CERTIFICATIONS } from "@/lib/constants";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.6H7.6V14h2.8v8h3.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pds-green-darkest text-pds-cream">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-pds-green-deep/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[520px] h-[520px] rounded-full bg-pds-green/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-3 space-y-6">
            <Logo tone="light" size="lg" showTagline />
            <p className="text-pds-cream/70 leading-relaxed text-[0.95rem] max-w-sm">
              O maior complexo de aventura de Socorro-SP. Hotel fazenda
              certificado em segurança e acessibilidade, à divisa SP/MG.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-pds-amber hover:text-pds-graphite transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-pds-amber hover:text-pds-graphite transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={CONTACT.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-pds-amber hover:text-pds-graphite transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-pds-amber-light text-[0.78rem] uppercase tracking-[0.22em] mb-5">
              Navegar
            </h3>
            <ul className="space-y-3">
              {NAV.map((item) => {
                const linkClassName =
                  "text-pds-cream/85 hover:text-pds-amber-light transition-colors text-[0.95rem]";
                return (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href as never} className={linkClassName}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-pds-amber-light text-[0.78rem] uppercase tracking-[0.22em] mb-5">
              Institucional
            </h3>
            <ul className="space-y-3">
              {LEGAL_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as never}
                    className="text-pds-cream/85 hover:text-pds-amber-light transition-colors text-[0.95rem]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-pds-amber-light text-[0.78rem] uppercase tracking-[0.22em] mb-5">
              Telefones
            </h3>
            <ul className="space-y-4 text-[0.95rem]">
              <li className="flex gap-3">
                <Phone
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-pds-amber"
                  strokeWidth={1.6}
                />
                <a
                  href={CONTACT.reservas[0].href}
                  className="text-pds-cream/85 hover:text-white transition-colors"
                >
                  <span className="block text-[0.78rem] text-pds-cream/55 mb-0.5">
                    Reservas
                  </span>
                  {CONTACT.reservas[0].display}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle
                  size={18}
                  className="flex-shrink-0 mt-0.5 text-pds-amber"
                  strokeWidth={1.6}
                />
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pds-cream/85 hover:text-white transition-colors"
                >
                  <span className="block text-[0.78rem] text-pds-cream/55 mb-0.5">
                    WhatsApp · Informações
                  </span>
                  {CONTACT.whatsapp.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 grid gap-8 lg:grid-cols-2 items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-pds-cream/55 font-semibold">
              Certificações
            </span>
            {CERTIFICATIONS.map((c) => (
              <span
                key={c.code}
                className="text-pds-cream/80 text-[0.78rem] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-pds-amber" />
                <span className="font-medium">{c.code}</span>
                <span className="text-pds-cream/45">·</span>
                <span>{c.short}</span>
              </span>
            ))}
          </div>
          <p className="text-pds-cream/50 text-[0.78rem] lg:text-right">
            © {new Date().getFullYear()} Hotel Fazenda Parque dos Sonhos · Socorro/SP · CNPJ disponível sob consulta
          </p>
        </div>
      </div>
    </footer>
  );
}
