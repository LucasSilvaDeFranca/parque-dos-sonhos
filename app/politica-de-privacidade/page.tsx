import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de privacidade e cookies do site do Hotel Fazenda Parque dos Sonhos. Como coletamos, usamos e protegemos suas informações.",
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalPage
      eyebrow="Sua privacidade importa"
      title={
        <>
          Política de <em className="italic font-light">privacidade</em>
        </>
      }
      description="Como coletamos, usamos e protegemos as informações que você nos confia ao navegar em nosso site."
      imageSrc="/images/site-atual/hero-panorama.jpg"
      imageHint="Hotel Fazenda Parque dos Sonhos em Socorro-SP"
      imagePosition="center 35%"
      updatedAt="Janeiro de 2022"
    >
      <p>
        A sua privacidade é importante para nós. É política do{" "}
        <strong>Hotel Fazenda Parque dos Sonhos</strong> respeitar a sua
        privacidade em relação a qualquer informação sua que possamos coletar
        no site, e outros sites que possuímos e operamos.
      </p>

      <p>
        Solicitamos informações pessoais apenas quando{" "}
        <strong>realmente precisamos delas</strong> para lhe fornecer um
        serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e
        consentimento. Também informamos por que estamos coletando e como será
        usado.
      </p>

      <p>
        Apenas retemos as informações coletadas pelo tempo necessário para
        fornecer o serviço solicitado. Quando armazenamos dados, protegemos
        dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
        bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </p>

      <p>
        <strong>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros
        </strong>
        , exceto quando exigido por lei.
      </p>

      <p>
        O nosso site pode ter links para sites externos que não são operados
        por nós. Esteja ciente de que não temos controle sobre o conteúdo e
        práticas desses sites e não podemos aceitar responsabilidade por suas
        respectivas políticas de privacidade.
      </p>

      <p>
        Você é livre para recusar a nossa solicitação de informações pessoais,
        entendendo que talvez não possamos fornecer alguns dos serviços
        desejados.
      </p>

      <p>
        O uso continuado de nosso site será considerado como aceitação de
        nossas práticas em torno de privacidade e informações pessoais. Se você
        tiver alguma dúvida sobre como lidamos com dados do usuário e
        informações pessoais, entre em contato conosco.
      </p>

      <h2>Política de cookies</h2>

      <h3>O que são cookies?</h3>
      <p>
        Como é prática comum em quase todos os sites profissionais, este site
        usa cookies, que são pequenos arquivos baixados no seu computador, para
        melhorar sua experiência. Esta página descreve quais informações eles
        coletam, como as usamos e por que às vezes precisamos armazenar esses
        cookies. Também compartilharemos como você pode impedir que esses
        cookies sejam armazenados — no entanto, isso pode fazer o downgrade ou
        &ldquo;quebrar&rdquo; certos elementos da funcionalidade do site.
      </p>

      <h3>Como usamos os cookies?</h3>
      <p>
        Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente,
        na maioria dos casos, não existem opções padrão do setor para desativar
        os cookies sem desativar completamente a funcionalidade e os recursos
        que eles adicionam a este site. É recomendável que você deixe todos os
        cookies se não tiver certeza se precisa ou não deles, caso sejam usados
        para fornecer um serviço que você usa.
      </p>

      <h3>Desativar cookies</h3>
      <p>
        Você pode impedir a configuração de cookies ajustando as configurações
        do seu navegador (consulte a Ajuda do navegador para saber como fazer
        isso). Esteja ciente de que a desativação de cookies afetará a
        funcionalidade deste e de muitos outros sites que você visita. A
        desativação de cookies geralmente resultará na desativação de
        determinadas funcionalidades e recursos deste site. Portanto, é
        recomendável que você não desative os cookies.
      </p>

      <h3>Cookies que definimos</h3>
      <ul>
        <li>
          <strong>Cookies relacionados à conta:</strong> se você criar uma
          conta conosco, usaremos cookies para o gerenciamento do processo de
          inscrição e administração geral. Esses cookies geralmente serão
          excluídos quando você sair do sistema, porém, em alguns casos, eles
          poderão permanecer posteriormente para lembrar as preferências do seu
          site ao sair.
        </li>
        <li>
          <strong>Cookies relacionados ao login:</strong> utilizamos cookies
          quando você está logado, para que possamos lembrar dessa ação. Isso
          evita que você precise fazer login sempre que visitar uma nova
          página. Esses cookies são normalmente removidos ou limpos quando você
          efetua logout para garantir que você possa acessar apenas a recursos
          e áreas restritas ao efetuar login.
        </li>
        <li>
          <strong>Cookies relacionados a boletins por e-mail:</strong> este
          site oferece serviços de assinatura de boletim informativo ou e-mail
          e os cookies podem ser usados para lembrar se você já está registrado
          e se deve mostrar determinadas notificações válidas apenas para
          usuários inscritos/não inscritos.
        </li>
        <li>
          <strong>Cookies de processamento de pedidos:</strong> este site
          oferece facilidades de comércio eletrônico ou pagamento e alguns
          cookies são essenciais para garantir que seu pedido seja lembrado
          entre as páginas, para que possamos processá-lo adequadamente.
        </li>
        <li>
          <strong>Cookies relacionados a pesquisas:</strong> periodicamente,
          oferecemos pesquisas e questionários para fornecer informações
          interessantes, ferramentas úteis ou para entender nossa base de
          usuários com mais precisão.
        </li>
        <li>
          <strong>Cookies relacionados a formulários:</strong> quando você
          envia dados por meio de um formulário como os encontrados nas páginas
          de contato ou nos formulários de comentários, os cookies podem ser
          configurados para lembrar os detalhes do usuário para correspondência
          futura.
        </li>
        <li>
          <strong>Cookies de preferências do site:</strong> para proporcionar
          uma ótima experiência neste site, fornecemos a funcionalidade para
          definir suas preferências de como esse site é executado quando você o
          usa.
        </li>
      </ul>

      <h3>Cookies de terceiros</h3>
      <p>
        Em alguns casos especiais, também usamos cookies fornecidos por
        terceiros confiáveis. A seção a seguir detalha quais cookies de
        terceiros você pode encontrar através deste site.
      </p>
      <ul>
        <li>
          Este site usa o <strong>Google Analytics</strong>, que é uma das
          soluções de análise mais difundidas e confiáveis da Web, para nos
          ajudar a entender como você usa o site e como podemos melhorar sua
          experiência. Esses cookies podem rastrear itens como quanto tempo
          você gasta no site e as páginas visitadas, para que possamos
          continuar produzindo conteúdo atraente.
        </li>
        <li>
          Análises de terceiros são usadas para rastrear e medir o uso deste
          site, para que possamos continuar produzindo conteúdo atrativo.
        </li>
        <li>
          Periodicamente, testamos novos recursos e fazemos alterações sutis na
          maneira como o site se apresenta. Esses cookies podem ser usados para
          garantir que você receba uma experiência consistente enquanto
          estiver no site, enquanto entendemos quais otimizações os nossos
          usuários mais apreciam.
        </li>
      </ul>

      <h2>Compromisso do usuário</h2>
      <p>
        O usuário se compromete a fazer uso adequado dos conteúdos e da
        informação que o Hotel Fazenda Parque dos Sonhos oferece no site e com
        caráter enunciativo, mas não limitativo:
      </p>
      <ol>
        <li>
          Não se envolver em atividades que sejam ilegais ou contrárias à boa
          fé e à ordem pública;
        </li>
        <li>
          Não difundir propaganda ou conteúdo de natureza racista, xenofóbica,
          jogos de azar, qualquer tipo de pornografia ilegal, de apologia ao
          terrorismo ou contra os direitos humanos;
        </li>
        <li>
          Não causar danos aos sistemas físicos (hardwares) e lógicos
          (softwares) do Hotel Fazenda Parque dos Sonhos, de seus fornecedores
          ou terceiros, para introduzir ou disseminar vírus informáticos ou
          quaisquer outros sistemas de hardware ou software que sejam capazes
          de causar danos anteriormente mencionados.
        </li>
      </ol>

      <h2>Mais informações</h2>
      <p>
        Esperamos que esteja esclarecido e, como mencionado anteriormente, se
        houver algo que você não tem certeza se precisa ou não, geralmente é
        mais seguro deixar os cookies ativados, caso interaja com um dos
        recursos que você usa em nosso site.
      </p>
    </LegalPage>
  );
}
