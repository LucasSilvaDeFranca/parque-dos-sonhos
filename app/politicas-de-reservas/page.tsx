import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Políticas de reservas, cancelamento e no-show",
  description:
    "Políticas de hospedagem, reservas, cancelamento e desistências (no-show) do Hotel Fazenda Parque dos Sonhos. Check-in, check-out, prazos e condições.",
};

export default function PoliticasDeReservas() {
  return (
    <LegalPage
      eyebrow="Antes da sua estadia"
      title={
        <>
          Políticas de <em className="italic font-light">reservas</em>,
          cancelamento e no-show
        </>
      }
      description="Condições contratuais que regem sua hospedagem. Leia com atenção antes de confirmar sua reserva."
      imageSrc="/images/site-atual/hero-panorama.jpg"
      imagePosition="center 35%"
    >
      <h2>Hospedagem</h2>
      <p>
        Nossos preços estão estabelecidos de acordo com o{" "}
        <strong>período de utilização</strong> e a{" "}
        <strong>quantidade de ocupantes</strong> em nossas acomodações.
      </p>

      <div className="callout">
        <strong>Horários de check-in e check-out</strong>
        Check-in a partir das <strong>18:00</strong> · Check-out até{" "}
        <strong>16:00</strong>
      </div>

      <p>
        Uma <strong>criança até 4 anos</strong> no mesmo aposento que os pais
        não paga.
      </p>
      <p>
        Para permanecer na área do Hotel antes ou após o período contratado,
        informe-se com a recepção sobre a disponibilidade e valores.
      </p>

      <h2>Reserva</h2>
      <p>
        A partir do pagamento de <strong>25% do valor total das diárias</strong>{" "}
        e envio do comprovante por e-mail, a reserva será confirmada.
      </p>
      <p>
        Reserva para <strong>grupos</strong>, a confirmação somente se dará com
        o pagamento de <strong>50% do valor total</strong>.
      </p>
      <p>
        O saldo de pagamento das diárias será cobrado no{" "}
        <strong>check-out</strong>.
      </p>

      <h2>Cancelamento ou alteração</h2>
      <p>
        Havendo necessidade de cancelamento ou alteração da data da reserva, o
        cliente deverá <strong>comunicar por escrito ao Hotel</strong>,{" "}
        <strong>não sendo aceito cancelamento ou alteração por telefone</strong>
        .
      </p>
      <p>
        Não será cobrada taxa de cancelamento ou transferência de data, somente
        a eventual diferença de preço entre um período e outro, se houver,
        observando-se o seguinte prazo limite:
      </p>
      <ul>
        <li>
          <strong>15 dias de antecedência</strong> da data de entrada para baixa
          ou alta temporada
        </li>
      </ul>
      <p className="text-pds-graphite/70 text-sm italic mt-3">
        Obs.: Sempre de acordo com a disponibilidade de vagas do Hotel.
      </p>

      <h3>Cancelamento de reserva para grupos e eventos</h3>
      <p>
        Solicitações com até <strong>30 dias antecedentes</strong> ao início do
        pacote.
      </p>

      <div className="warning">
        <strong>Importante</strong>
        Cancelamento <strong>fora do prazo limite</strong> não haverá
        restituição do valor pago.
      </div>

      <h2>Desistências</h2>

      <h3>Desistência sem cancelamento — &ldquo;no-show&rdquo;</h3>
      <p>
        O não comparecimento sem comunicação prévia por escrito, na data
        prevista de chegada, será considerado{" "}
        <strong>&ldquo;no-show&rdquo;</strong> (desistência sem cancelamento). A
        vaga permanecerá disponível por <strong>24 horas</strong>, a partir do
        horário de entrada. Após este período a reserva será cancelada (com
        retenção de 100% do valor pago), disponibilizando a vaga para outro
        interessado.
      </p>
      <div className="warning">
        <strong>Atenção</strong>
        Não haverá restituição do valor pago em caso de no-show.
      </div>

      <h3>Desistência após a entrada</h3>
      <p>
        A desistência na chegada ou após a entrada no Hotel, como também a
        saída antecipada por qualquer motivo, implica em{" "}
        <strong>cobrança do valor integral do pacote</strong> conforme
        negociado na reserva, não dando direito a qualquer tipo de restituição,
        reembolso em dinheiro ou crédito em novas diárias.
      </p>

      <h2>Importante</h2>
      <p>
        Visamos, com este contrato, manter o padrão de qualidade no
        atendimento, sem perdas para o nosso Hotel e para o nosso cliente.
      </p>

      <div className="callout mt-10">
        <strong>Dúvidas sobre sua reserva?</strong>
        Nossa equipe está à disposição para esclarecer todas as condições antes
        do pagamento.{" "}
        <Link href="/contato">Fale com a gente</Link> ou consulte nossa{" "}
        <Link href="/atencao-as-fraudes">página sobre canais oficiais</Link>.
      </div>
    </LegalPage>
  );
}
