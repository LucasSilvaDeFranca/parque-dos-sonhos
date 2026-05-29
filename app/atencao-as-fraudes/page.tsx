import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";
import { CONTACT } from "@/lib/constants";
import { AlertTriangle, Globe, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Atenção às fraudes — Canais oficiais",
  description:
    "Alerta sobre páginas falsas em redes sociais. A Rede dos Sonhos não oferece pacotes ou descontos fora dos canais oficiais. Confira aqui telefone e sites verdadeiros.",
};

const OFFICIAL_SITES = [
  "rededossonhos.com.br",
  "campodossonhos.com.br",
  "parquedossonhos.com.br",
  "terradossonhos.com.br",
  "colinadossonhos.com.br",
];

export default function AtencaoAsFraudes() {
  return (
    <LegalPage
      eyebrow="Comunicado importante"
      title={
        <>
          Atenção <em className="italic font-light">às fraudes</em>
        </>
      }
      description="Alerta sobre páginas falsas em redes sociais e canais não autorizados em nome da Rede dos Sonhos."
      imageSrc="/images/site-atual/hero-panorama.jpg"
      imageHint="Hotel Fazenda Parque dos Sonhos em Socorro-SP"
      imagePosition="center 30%"
    >
      <div className="warning">
        <strong>
          <span className="inline-flex items-center gap-2">
            <AlertTriangle size={18} strokeWidth={1.8} /> Aviso
          </span>
        </strong>
        A Rede dos Sonhos <strong>não entra em contato</strong> por meio de
        redes sociais ou aplicativos não oficiais oferecendo pacotes, promoções
        ou descontos. Fique atento(a) a perfis e páginas duvidosas.
      </div>

      <p>
        A <strong>Rede dos Sonhos Hotéis Fazenda</strong>, composta pelos
        estabelecimentos Campo dos Sonhos, Parque dos Sonhos, Terra dos Sonhos
        e Colina dos Sonhos, vem por meio deste comunicado esclarecer uma
        importante questão relacionada à segurança dos nossos clientes.
      </p>

      <p>
        Gostaríamos de alertá-los sobre a existência de{" "}
        <strong>páginas falsas em redes sociais</strong> que se passam por
        representantes dos nossos hotéis. É importante ressaltar que a Rede dos
        Sonhos Hotéis Fazenda não entra em contato por meio desses canais
        oferecendo pacotes, promoções ou descontos.
      </p>

      <p>
        Para garantir a sua segurança e evitar qualquer tipo de fraude, pedimos
        que fiquem atentos e evitem interagir com perfis ou páginas duvidosas
        nas redes sociais.
      </p>

      <h2>Nossos canais oficiais</h2>

      <div className="not-prose mt-6 rounded-2xl border border-pds-line bg-white p-6 lg:p-8 shadow-sm">
        <div className="flex items-center gap-4 pb-5 border-b border-pds-line">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-pds-fire/10 text-pds-fire flex items-center justify-center">
            <Phone size={20} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-pds-graphite/60 font-semibold">
              Telefone
            </p>
            <a
              href={CONTACT.reservas[0].href}
              className="font-display text-pds-green-darkest text-[1.25rem] hover:text-pds-fire transition-colors"
            >
              {CONTACT.reservas[0].display}
            </a>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pds-green/10 text-pds-green-deep flex items-center justify-center">
              <Globe size={17} strokeWidth={1.8} />
            </div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-pds-graphite/60 font-semibold">
              Sites oficiais
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pl-12">
            {OFFICIAL_SITES.map((site) => (
              <li key={site}>
                <a
                  href={`https://${site}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pds-graphite hover:text-pds-fire transition-colors text-[0.98rem]"
                >
                  {site}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8">
        Reforçamos que <strong>não enviamos promoções ou descontos</strong> por
        nenhum outro canal além dos mencionados acima. A segurança e a
        satisfação dos nossos clientes são de extrema importância para nós, e
        estamos comprometidos em garantir uma experiência confiável e
        transparente.
      </p>

      <p>
        Se tiverem alguma dúvida ou necessitarem de informações adicionais, por
        favor, entrem em contato conosco pelos meios oficiais mencionados
        anteriormente. Estamos sempre à disposição para atendê-los da melhor
        maneira possível.
      </p>

      <p>
        Agradecemos a compreensão e confiança de todos os nossos clientes.
        Esperamos recebê-los em breve em nossos hotéis fazenda, onde o sonho e
        a tranquilidade se encontram.
      </p>

      <p className="mt-10 text-pds-graphite/70 italic">
        Atenciosamente,
        <br />
        <strong className="not-italic">Rede dos Sonhos Hotéis Fazenda</strong>
      </p>
    </LegalPage>
  );
}
