import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos de uso do site do Hotel Fazenda Parque dos Sonhos. Licenças, isenção de responsabilidade, limitações, precisão dos materiais e lei aplicável.",
};

export default function TermosDeUso() {
  return (
    <LegalPage
      eyebrow="Documentação legal"
      title={
        <>
          Termos <em className="italic font-light">de uso</em>
        </>
      }
      description="Ao acessar este site, você concorda em cumprir os termos abaixo, todas as leis e regulamentos aplicáveis."
      imageSrc="/images/site-atual/hero-panorama.jpg"
      imagePosition="center 30%"
    >
      <p>
        Ao acessar ao site <strong>Hotel Fazenda Parque dos Sonhos</strong>,
        você concorda em cumprir estes termos de serviço, todas as leis e
        regulamentos aplicáveis, e concorda que é responsável pelo cumprimento
        de todas as leis locais aplicáveis. Se você não concordar com algum
        desses termos, está proibido de usar ou acessar este site. Os materiais
        contidos neste site são protegidos pelas{" "}
        <strong>leis de direitos autorais e marcas comerciais</strong>{" "}
        aplicáveis.
      </p>

      <h2>Uso de licença</h2>
      <p>
        É concedida permissão para baixar temporariamente uma cópia dos
        materiais (informações ou software) no site Hotel Fazenda Parque dos
        Sonhos, apenas para <strong>visualização transitória pessoal e não
        comercial</strong>. Esta é a concessão de uma licença, não uma
        transferência de título e, sob esta licença, você não pode:
      </p>
      <ul>
        <li>modificar ou copiar os materiais;</li>
        <li>
          usar os materiais para qualquer finalidade comercial ou para exibição
          pública (comercial ou não comercial);
        </li>
        <li>
          tentar descompilar ou fazer engenharia reversa de qualquer software
          contido no site Hotel Fazenda Parque dos Sonhos;
        </li>
        <li>
          remover quaisquer direitos autorais ou outras notações de propriedade
          dos materiais;
        </li>
        <li>
          transferir os materiais para outra pessoa ou &ldquo;espelhe&rdquo; os
          materiais em qualquer outro servidor.
        </li>
      </ul>
      <p>
        Esta licença será automaticamente <strong>rescindida</strong> se você
        violar alguma dessas restrições e poderá ser rescindida por Hotel
        Fazenda Parque dos Sonhos a qualquer momento. Ao encerrar a
        visualização desses materiais ou após o término desta licença, você
        deve apagar todos os materiais baixados em sua posse, seja em formato
        eletrônico ou impresso.
      </p>

      <h2>Isenção de responsabilidade</h2>
      <ul>
        <li>
          Os materiais no site da Hotel Fazenda Parque dos Sonhos são
          fornecidos <strong>&ldquo;como estão&rdquo;</strong>. Hotel Fazenda
          Parque dos Sonhos não oferece garantias, expressas ou implícitas, e,
          por este meio, isenta e nega todas as outras garantias, incluindo,
          sem limitação, garantias implícitas ou condições de comercialização,
          adequação a um fim específico ou não violação de propriedade
          intelectual ou outra violação de direitos.
        </li>
        <li>
          Além disso, o Hotel Fazenda Parque dos Sonhos não garante ou faz
          qualquer representação relativa à precisão, aos resultados prováveis
          ou à confiabilidade do uso dos materiais em seu site ou de outra
          forma relacionado a esses materiais ou em sites vinculados a este
          site.
        </li>
      </ul>

      <h2>Limitações</h2>
      <p>
        Em nenhum caso o Hotel Fazenda Parque dos Sonhos ou seus fornecedores
        serão responsáveis por quaisquer danos (incluindo, sem limitação, danos
        por perda de dados ou lucro ou devido a interrupção dos negócios)
        decorrentes do uso ou da incapacidade de usar os materiais em Hotel
        Fazenda Parque dos Sonhos, mesmo que Hotel Fazenda Parque dos Sonhos ou
        um representante autorizado tenha sido notificado oralmente ou por
        escrito da possibilidade de tais danos. Como algumas jurisdições não
        permitem limitações em garantias implícitas, ou limitações de
        responsabilidade por danos consequentes ou incidentais, essas
        limitações podem não se aplicar a você.
      </p>

      <h2>Precisão dos materiais</h2>
      <p>
        Os materiais exibidos no site da Hotel Fazenda Parque dos Sonhos podem
        incluir <strong>erros técnicos, tipográficos ou fotográficos</strong>.
        Hotel Fazenda Parque dos Sonhos não garante que qualquer material em
        seu site seja preciso, completo ou atual. Hotel Fazenda Parque dos
        Sonhos pode fazer alterações nos materiais contidos em seu site a
        qualquer momento, sem aviso prévio. No entanto, Hotel Fazenda Parque
        dos Sonhos não se compromete a atualizar os materiais.
      </p>

      <h2>Links</h2>
      <p>
        O Hotel Fazenda Parque dos Sonhos não analisou todos os sites vinculados
        ao seu site e não é responsável pelo conteúdo de nenhum site vinculado.
        A inclusão de qualquer link não implica endosso por Hotel Fazenda
        Parque dos Sonhos do site. O uso de qualquer site vinculado é{" "}
        <strong>por conta e risco do usuário</strong>.
      </p>

      <h2>Modificações</h2>
      <p>
        O Hotel Fazenda Parque dos Sonhos pode <strong>revisar estes termos</strong>{" "}
        de serviço do site a qualquer momento, sem aviso prévio. Ao usar este
        site, você concorda em ficar vinculado à versão atual desses termos de
        serviço.
      </p>

      <h2>Lei aplicável</h2>
      <p>
        Estes termos e condições são regidos e interpretados de acordo com as
        leis aplicáveis ao Hotel Fazenda Parque dos Sonhos e você se submete
        irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou
        localidade.
      </p>
    </LegalPage>
  );
}
