import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-pds-green-darkest text-pds-cream py-28 lg:py-40">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 image-placeholder rounded-none opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,58,31,0.55) 0%, rgba(11,31,18,0.95) 70%)",
        }}
      />
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[440px] h-[440px] rounded-full bg-pds-fire/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-pds-amber/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 text-center">
        <p className="mb-6 inline-flex items-center justify-center gap-3 text-[0.7rem] font-semibold tracking-[0.32em] uppercase text-pds-amber-light">
          <span className="h-px w-8 bg-pds-amber-light" />
          Sua aventura começa aqui
          <span className="h-px w-8 bg-pds-amber-light" />
        </p>
        <h2 className="font-display leading-[1.02] text-balance text-pds-cream text-[clamp(2.4rem,6vw,5rem)]">
          Pronto para
          <br />
          <span className="italic text-pds-amber-light">viver tudo isso?</span>
        </h2>

        <p className="mt-8 max-w-xl mx-auto text-pds-cream/80 text-[1.1rem] leading-relaxed text-pretty">
          Garanta agora sua reserva e venha descobrir o que faz do Parque dos
          Sonhos um destino único.
        </p>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Button href="/contato" variant="primary" size="lg" withIcon>
            Reservar agora
          </Button>
          <Button
            href={CONTACT.whatsapp.href}
            external
            variant="outline-light"
            size="lg"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <div className="mt-14 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-pds-cream/65 text-[0.86rem]">
          <a
            href={CONTACT.address.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pds-cream transition-colors"
          >
            {CONTACT.address.line1} · Socorro/SP
          </a>
          <span className="hidden lg:inline w-px h-4 bg-white/15" />
          {CONTACT.reservas.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="hover:text-pds-cream transition-colors"
            >
              {p.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
