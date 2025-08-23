"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, MessageCircle, Menu, X } from "lucide-react"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "A Importância da Hidratação Natural para a Saúde da Pele",
    slug: "hidratacao-natural-saude-pele",
    excerpt:
      "Cuidados internos e externos para uma pele mais saudável. A hidratação é um dos pilares da saúde da pele e não se resume a cremes: começa de dentro para fora.",
    image: "/blog/hidratacao-natural.jpg",
    date: "2025-01-20",
    readTime: "5 min",
    category: "Cuidados Naturais",
    tags: ["hidratação", "pele saudável", "natural"],
    content: `
      <p>A hidratação é fundamental para manter a saúde e beleza da pele. Muitas pessoas acreditam que apenas produtos tópicos são suficientes, mas a verdadeira hidratação começa de dentro para fora.</p>
      
      <h2>Por que a hidratação é essencial?</h2>
      <p>Nossa pele é composta por aproximadamente 64% de água. Quando não mantemos níveis adequados de hidratação, a pele perde elasticidade, desenvolve linhas finas e pode apresentar descamação e irritação.</p>
      
      <h2>Hidratação interna</h2>
      <p>Beber água suficiente é o primeiro passo. Recomendo pelo menos 2 litros por dia, mas isso pode variar conforme seu peso e atividade física. Chás de ervas como camomila e hibisco também contribuem para a hidratação.</p>
      
      <h2>Cuidados externos naturais</h2>
      <p>Use produtos com ingredientes naturais como ácido hialurônico vegetal, aloe vera e óleos vegetais. Na Eco Encanto, desenvolvemos fórmulas que respeitam o pH natural da pele.</p>
      
      <h2>Dicas práticas</h2>
      <ul>
        <li>Evite banhos muito quentes</li>
        <li>Use umidificador no quarto</li>
        <li>Aplique hidratante na pele ainda úmida</li>
        <li>Consuma alimentos ricos em água como pepino e melancia</li>
      </ul>
      
      <p>Lembre-se: a hidratação é um cuidado diário que reflete na saúde geral do seu corpo, não apenas na aparência da pele.</p>
    `,
  },
  {
    id: 2,
    title: "Alimentação e Pele: O que você come reflete na sua aparência",
    slug: "alimentacao-pele-aparencia",
    excerpt:
      "Nutrientes que transformam sua pele de dentro para fora. A pele é um reflexo do que colocamos no prato, rica em vitaminas e antioxidantes.",
    image: "/blog/alimentacao-pele.jpg",
    date: "2025-01-18",
    readTime: "6 min",
    category: "Nutrição e Beleza",
    tags: ["alimentação", "nutrição", "beleza natural"],
    content: `
      <p>A expressão "você é o que você come" nunca foi tão verdadeira quanto quando falamos sobre a saúde da pele. Os nutrientes que consumimos se refletem diretamente na aparência, textura e vitalidade da nossa pele.</p>
      
      <h2>Alimentos que favorecem a pele</h2>
      <p>Vegetais coloridos são ricos em antioxidantes que combatem os radicais livres. Cenoura, abóbora e batata-doce fornecem betacaroteno, que protege contra danos solares.</p>
      
      <h2>Gorduras boas para a pele</h2>
      <p>Ômega-3 presente em peixes, linhaça e chia mantém a barreira cutânea saudável. Abacate e nozes fornecem vitamina E, um poderoso antioxidante.</p>
      
      <h2>Alimentos a evitar</h2>
      <p>Açúcar refinado e alimentos processados podem causar inflamação e acelerar o envelhecimento. Laticínios em excesso podem agravar a acne em pessoas sensíveis.</p>
      
      <h2>Hidratação através dos alimentos</h2>
      <p>Pepino, melancia, tomate e folhas verdes contribuem para a hidratação natural da pele. Inclua-os diariamente em suas refeições.</p>
      
      <h2>Suplementação natural</h2>
      <p>Colágeno vegetal, vitamina C natural e zinco podem complementar uma dieta equilibrada. Sempre consulte um profissional antes de iniciar suplementação.</p>
      
      <p>Transforme sua alimentação em um ritual de beleza natural. Sua pele agradecerá!</p>
    `,
  },
  {
    id: 3,
    title: "Chás Medicinais para Detox e Revitalização da Pele",
    slug: "chas-medicinais-detox-pele",
    excerpt:
      "Infusões que equilibram corpo e mente. Os chás são verdadeiros aliados da beleza natural, ricos em antioxidantes que combatem o envelhecimento.",
    image: "/blog/chas-medicinais.jpg",
    date: "2025-01-15",
    readTime: "4 min",
    category: "Fitoterapia",
    tags: ["chás", "detox", "antioxidantes"],
    content: `
      <p>Os chás medicinais são uma forma deliciosa e natural de cuidar da pele de dentro para fora. Cada erva possui propriedades específicas que contribuem para a saúde e beleza da pele.</p>
      
      <h2>Chá Verde - O antioxidante poderoso</h2>
      <p>Rico em catequinas, o chá verde combate os radicais livres e possui propriedades anti-inflamatórias. Beba 2-3 xícaras por dia para obter benefícios máximos.</p>
      
      <h2>Hibisco - Para uma pele radiante</h2>
      <p>O hibisco é rico em vitamina C e antocianinas, que estimulam a produção de colágeno e melhoram a circulação sanguínea, deixando a pele com aspecto mais jovem.</p>
      
      <h2>Camomila - Calmante natural</h2>
      <p>Além de relaxar, a camomila possui propriedades anti-inflamatórias que ajudam a acalmar peles sensíveis e irritadas. Ideal para beber antes de dormir.</p>
      
      <h2>Hortelã - Refrescante e purificante</h2>
      <p>A hortelã ajuda na digestão e possui propriedades antimicrobianas. Uma boa digestão reflete diretamente na saúde da pele.</p>
      
      <h2>Como preparar</h2>
      <p>Use água filtrada aquecida a 80°C (não fervente). Deixe as ervas em infusão por 5-10 minutos. Evite adoçar com açúcar refinado - prefira mel ou stevia.</p>
      
      <h2>Dica especial</h2>
      <p>Você pode usar chás frios como tônicos faciais! O chá verde gelado é excelente para fechar os poros e tonificar a pele.</p>
    `,
  },
  {
    id: 4,
    title: "Protocolos Personalizados: Por que cada pele pede um cuidado diferente",
    slug: "protocolos-personalizados-pele",
    excerpt:
      "O olhar único para resultados duradouros. Cada pele é única e fatores como idade, rotina e genética influenciam suas necessidades específicas.",
    image: "/blog/protocolos-personalizados.jpg",
    date: "2025-01-12",
    readTime: "7 min",
    category: "Tratamentos",
    tags: ["protocolos", "personalizado", "cuidados"],
    content: `
      <p>Não existe uma fórmula única para cuidar da pele. Cada pessoa possui características únicas que demandam uma abordagem personalizada e cuidadosa.</p>
      
      <h2>Fatores que influenciam sua pele</h2>
      <p>Genética, idade, hormônios, estilo de vida, clima e até mesmo o nível de estresse afetam diretamente a saúde da sua pele. Por isso, protocolos padronizados raramente funcionam para todos.</p>
      
      <h2>Avaliação completa</h2>
      <p>Em meus atendimentos, realizo uma análise detalhada que inclui:</p>
      <ul>
        <li>Tipo de pele (oleosa, seca, mista, sensível)</li>
        <li>Histórico de tratamentos anteriores</li>
        <li>Rotina atual de cuidados</li>
        <li>Objetivos específicos</li>
        <li>Restrições e sensibilidades</li>
      </ul>
      
      <h2>Protocolos adaptativos</h2>
      <p>Desenvolvo protocolos que evoluem junto com sua pele. O que funciona no inverno pode não ser ideal no verão. Hormônios mudam, a pele envelhece, e o protocolo deve acompanhar essas transformações.</p>
      
      <h2>Produtos Eco Encanto personalizados</h2>
      <p>Nossa linha permite combinações específicas para cada necessidade. Posso ajustar concentrações de ativos e recomendar produtos complementares.</p>
      
      <h2>Acompanhamento contínuo</h2>
      <p>O protocolo personalizado inclui reavaliações periódicas. Monitoro os resultados e faço ajustes necessários para garantir que você alcance seus objetivos.</p>
      
      <p>Investir em um protocolo personalizado é investir em resultados duradouros e em uma pele verdadeiramente saudável.</p>
    `,
  },
  {
    id: 5,
    title: "Rejuvenescimento Pro Age: Cuidados Naturais para Amar Suas Marcas",
    slug: "rejuvenescimento-pro-age",
    excerpt:
      "Envelhecer bem é um ato de amor-próprio. O conceito pro age convida a olhar para o envelhecimento com carinho, aceitando cada fase da vida.",
    image: "/blog/rejuvenescimento-pro-age.jpg",
    date: "2025-01-10",
    readTime: "6 min",
    category: "Anti-idade Natural",
    tags: ["pro age", "envelhecimento", "amor-próprio"],
    content: `
      <p>O movimento pro age revoluciona nossa relação com o envelhecimento. Não se trata de negar a idade, mas de envelhecer com saúde, beleza e autoestima.</p>
      
      <h2>O que é o conceito Pro Age?</h2>
      <p>Pro age significa "a favor da idade". É uma filosofia que celebra cada fase da vida, focando na saúde e bem-estar em vez de tentar parar o tempo.</p>
      
      <h2>Cuidados naturais para peles maduras</h2>
      <p>Peles maduras precisam de hidratação intensa, estímulo à renovação celular e proteção antioxidante. Uso ingredientes como:</p>
      <ul>
        <li>Ácido hialurônico vegetal para hidratação profunda</li>
        <li>Vitamina C natural para estímulo ao colágeno</li>
        <li>Óleos vegetais ricos em ômega para nutrição</li>
        <li>Peptídeos naturais para firmeza</li>
      </ul>
      
      <h2>Tratamentos pro age</h2>
      <p>Desenvolvo protocolos que respeitam a maturidade da pele, usando técnicas suaves mas eficazes. Massagens faciais, máscaras nutritivas e séruns concentrados fazem parte do arsenal pro age.</p>
      
      <h2>Beleza interior</h2>
      <p>O pro age também inclui cuidados internos: alimentação rica em antioxidantes, hidratação adequada, exercícios regulares e manejo do estresse.</p>
      
      <h2>Autoestima e aceitação</h2>
      <p>Cada ruga conta uma história. O objetivo não é apagá-las, mas cuidar da pele para que ela reflita sua vitalidade interior. Beleza não tem idade!</p>
      
      <h2>Produtos Eco Encanto Pro Age</h2>
      <p>Nossa linha pro age foi desenvolvida especialmente para peles maduras, com texturas ricas e ativos potentes, mas sempre naturais e seguros.</p>
      
      <p>Envelhecer é um privilégio. Vamos fazer isso com estilo e saúde!</p>
    `,
  },
  {
    id: 6,
    title: "Detox Facial: Como funciona e quais os benefícios para a pele",
    slug: "detox-facial-beneficios",
    excerpt:
      "Renovação e equilíbrio para sua pele. O detox facial limpa profundamente os poros, elimina toxinas e devolve a vitalidade natural.",
    image: "/blog/detox-facial.jpg",
    date: "2025-01-08",
    readTime: "5 min",
    category: "Tratamentos",
    tags: ["detox", "limpeza", "renovação"],
    content: `
      <p>O detox facial é um tratamento profundo que vai além da limpeza superficial. É um processo de renovação que elimina impurezas acumuladas e revitaliza a pele.</p>
      
      <h2>Como funciona o detox facial?</h2>
      <p>O processo envolve várias etapas que trabalham em sinergia para purificar a pele:</p>
      <ul>
        <li>Limpeza profunda com produtos naturais</li>
        <li>Esfoliação suave para remover células mortas</li>
        <li>Vapor de ervas para abrir os poros</li>
        <li>Extração cuidadosa de comedões</li>
        <li>Máscaras purificantes com argila</li>
        <li>Hidratação e proteção final</li>
      </ul>
      
      <h2>Benefícios do detox facial</h2>
      <p>Os resultados são visíveis desde a primeira sessão:</p>
      <ul>
        <li>Poros visivelmente menores</li>
        <li>Pele mais lisa e uniforme</li>
        <li>Redução de cravos e espinhas</li>
        <li>Melhora na textura da pele</li>
        <li>Aumento da luminosidade natural</li>
      </ul>
      
      <h2>Ingredientes naturais utilizados</h2>
      <p>Uso apenas produtos naturais no detox facial:</p>
      <ul>
        <li>Argila verde para peles oleosas</li>
        <li>Argila branca para peles sensíveis</li>
        <li>Carvão ativado para purificação profunda</li>
        <li>Óleos essenciais de tea tree e lavanda</li>
      </ul>
      
      <h2>Frequência recomendada</h2>
      <p>Para peles oleosas: a cada 15-20 dias. Para peles secas ou sensíveis: mensalmente. O protocolo é sempre personalizado conforme sua necessidade.</p>
      
      <h2>Cuidados pós-detox</h2>
      <p>Após o tratamento, evite exposição solar direta por 24h e use apenas produtos suaves. A pele estará mais receptiva, então é o momento ideal para aplicar séruns nutritivos.</p>
    `,
  },
  {
    id: 7,
    title: "Clareamento Vegano: Alternativas Naturais e Seguras para Manchas na Pele",
    slug: "clareamento-vegano-manchas",
    excerpt:
      "A natureza como aliada para uniformizar o tom da pele. Manchas podem ser tratadas de forma segura com ativos naturais como argila branca e vitamina C vegetal.",
    image: "/blog/clareamento-vegano.jpg",
    date: "2025-01-05",
    readTime: "6 min",
    category: "Tratamentos",
    tags: ["clareamento", "vegano", "manchas"],
    content: `
      <p>As manchas na pele podem afetar a autoestima, mas existem alternativas naturais e seguras para tratá-las sem agredir a pele ou o meio ambiente.</p>
      
      <h2>Tipos de manchas</h2>
      <p>Diferentes tipos de manchas requerem abordagens específicas:</p>
      <ul>
        <li>Melasma: causado por hormônios e sol</li>
        <li>Manchas solares: resultado da exposição UV</li>
        <li>Hiperpigmentação pós-inflamatória: após acne ou lesões</li>
        <li>Sardas: predisposição genética</li>
      </ul>
      
      <h2>Ativos naturais clareadores</h2>
      <p>A natureza oferece ingredientes poderosos para clarear manchas:</p>
      <ul>
        <li>Vitamina C natural: estimula renovação celular</li>
        <li>Arbutin vegetal: inibe produção de melanina</li>
        <li>Ácido kójico natural: clareia suavemente</li>
        <li>Niacinamida: uniformiza o tom da pele</li>
        <li>Extrato de alcaçuz: anti-inflamatório e clareador</li>
      </ul>
      
      <h2>Protocolo de clareamento natural</h2>
      <p>O tratamento segue etapas específicas:</p>
      <ol>
        <li>Avaliação do tipo de mancha</li>
        <li>Preparação da pele com esfoliação suave</li>
        <li>Aplicação de ativos clareadores</li>
        <li>Hidratação e proteção</li>
        <li>Proteção solar rigorosa</li>
      </ol>
      
      <h2>Cuidados essenciais</h2>
      <p>O sucesso do clareamento depende de:</p>
      <ul>
        <li>Uso diário de protetor solar FPS 60+</li>
        <li>Evitar exposição solar desnecessária</li>
        <li>Constância no tratamento</li>
        <li>Paciência - resultados aparecem em 8-12 semanas</li>
      </ul>
      
      <h2>Produtos Eco Encanto para clareamento</h2>
      <p>Desenvolvemos uma linha específica com ativos naturais concentrados, testados e aprovados para todos os tipos de pele, incluindo as mais sensíveis.</p>
      
      <p>Lembre-se: o clareamento natural é um processo gradual, mas os resultados são duradouros e seguros.</p>
    `,
  },
  {
    id: 8,
    title: "Exercícios Faciais: Academia Natural da Pele",
    slug: "exercicios-faciais-academia-pele",
    excerpt:
      "Movimentos simples que fazem diferença. A ginástica facial fortalece músculos, melhora a circulação e suaviza linhas de expressão.",
    image: "/blog/exercicios-faciais.jpg",
    date: "2025-01-03",
    readTime: "4 min",
    category: "Exercícios Faciais",
    tags: ["ginástica facial", "exercícios", "anti-idade"],
    content: `
      <p>Assim como exercitamos o corpo, podemos exercitar os músculos do rosto para mantê-los tonificados e retardar o envelhecimento natural.</p>
      
      <h2>Como funcionam os exercícios faciais?</h2>
      <p>O rosto possui mais de 40 músculos. Quando exercitados regularmente, eles se fortalecem, melhoram a circulação sanguínea e estimulam a produção de colágeno.</p>
      
      <h2>Benefícios comprovados</h2>
      <ul>
        <li>Redução de linhas de expressão</li>
        <li>Melhora do contorno facial</li>
        <li>Aumento da firmeza da pele</li>
        <li>Melhora da circulação</li>
        <li>Relaxamento da tensão facial</li>
      </ul>
      
      <h2>Exercícios básicos para começar</h2>
      
      <h3>Para a testa:</h3>
      <p>Coloque as mãos na testa e tente franzir, fazendo resistência com as mãos. Mantenha por 10 segundos, repita 5 vezes.</p>
      
      <h3>Para os olhos:</h3>
      <p>Feche os olhos com força por 5 segundos, depois abra bem. Repita 10 vezes. Isso fortalece o músculo orbicular.</p>
      
      <h3>Para as bochechas:</h3>
      <p>Encha as bochechas de ar e passe o ar de um lado para outro por 30 segundos. Excelente para tonificar.</p>
      
      <h3>Para o pescoço:</h3>
      <p>Incline a cabeça para trás e faça movimentos de mastigação. Isso trabalha os músculos do pescoço e papada.</p>
      
      <h2>Quando praticar</h2>
      <p>Dedique 10-15 minutos diários, preferencialmente pela manhã. A constância é mais importante que a intensidade.</p>
      
      <h2>Dicas importantes</h2>
      <ul>
        <li>Sempre com as mãos limpas</li>
        <li>Movimentos suaves, sem forçar</li>
        <li>Hidrate bem a pele antes dos exercícios</li>
        <li>Seja paciente - resultados aparecem em 4-6 semanas</li>
      </ul>
      
      <p>A ginástica facial é um investimento no futuro da sua pele. Comece hoje mesmo!</p>
    `,
  },
  {
    id: 9,
    title: "Produtos Naturais: Por que escolher fórmulas livres de químicos agressivos",
    slug: "produtos-naturais-quimicos",
    excerpt:
      "Pureza e eficácia a favor da sua pele. Optar por produtos naturais é investir em saúde, utilizando óleos vegetais e extratos botânicos.",
    image: "/blog/produtos-naturais.jpg",
    date: "2025-01-01",
    readTime: "5 min",
    category: "Produtos Naturais",
    tags: ["produtos naturais", "eco encanto", "sustentável"],
    content: `
      <p>A escolha por produtos naturais vai além da tendência - é uma decisão consciente que beneficia sua pele, sua saúde e o meio ambiente.</p>
      
      <h2>Por que evitar químicos agressivos?</h2>
      <p>Muitos produtos convencionais contêm substâncias que podem causar:</p>
      <ul>
        <li>Irritação e sensibilização da pele</li>
        <li>Desequilíbrio do pH natural</li>
        <li>Ressecamento excessivo</li>
        <li>Dependência química</li>
        <li>Impacto ambiental negativo</li>
      </ul>
      
      <h2>Ingredientes a evitar</h2>
      <ul>
        <li>Parabenos: conservantes que podem ser disruptores hormonais</li>
        <li>Sulfatos: detergentes agressivos que ressecam</li>
        <li>Silicones: criam barreira artificial na pele</li>
        <li>Fragrâncias sintéticas: podem causar alergias</li>
        <li>Álcool desnaturado: resseca e irrita</li>
      </ul>
      
      <h2>Benefícios dos produtos naturais</h2>
      <p>Ingredientes naturais oferecem:</p>
      <ul>
        <li>Compatibilidade com a pele</li>
        <li>Nutrição profunda</li>
        <li>Ação sinérgica dos componentes</li>
        <li>Menor risco de reações adversas</li>
        <li>Sustentabilidade ambiental</li>
      </ul>
      
      <h2>Ingredientes naturais poderosos</h2>
      <p>A natureza oferece ativos incríveis:</p>
      <ul>
        <li>Óleos vegetais: nutrição e proteção</li>
        <li>Extratos botânicos: propriedades terapêuticas</li>
        <li>Argilas: purificação e mineralização</li>
        <li>Óleos essenciais: aromaterpia e benefícios específicos</li>
        <li>Águas florais: hidratação e equilíbrio</li>
      </ul>
      
      <h2>A filosofia Eco Encanto</h2>
      <p>Nossa linha foi desenvolvida com ingredientes cuidadosamente selecionados, processos sustentáveis e embalagens eco-friendly. Cada produto é uma declaração de amor à natureza e à sua pele.</p>
      
      <h2>Como fazer a transição</h2>
      <p>Mude gradualmente, observando como sua pele responde. Comece com produtos básicos como limpador e hidratante, depois expanda sua rotina natural.</p>
      
      <p>Escolher produtos naturais é escolher saúde, sustentabilidade e eficácia verdadeira.</p>
    `,
  },
  {
    id: 10,
    title: "Protocolo Natural – Detox com Desparasitação",
    slug: "protocolo-detox-desparasitacao",
    excerpt:
      "Limpeza profunda do corpo para renovar saúde e beleza. O protocolo combina técnicas naturais que auxiliam na eliminação de toxinas e parasitas.",
    image: "/blog/protocolo-detox.jpg",
    date: "2024-12-28",
    readTime: "8 min",
    category: "Detox Corporal",
    tags: ["detox", "desparasitação", "renovação"],
    content: `
      <p>O protocolo de detox com desparasitação é uma abordagem holística que visa limpar o organismo de toxinas e parasitas, refletindo diretamente na saúde da pele e bem-estar geral.</p>
      
      <h2>Por que fazer detox?</h2>
      <p>Nosso corpo está constantemente exposto a toxinas do ambiente, alimentos processados e estresse. Essa sobrecarga pode manifestar-se através de:</p>
      <ul>
        <li>Pele opaca e sem brilho</li>
        <li>Acne e inflamações</li>
        <li>Fadiga constante</li>
        <li>Problemas digestivos</li>
        <li>Baixa imunidade</li>
      </ul>
      
      <h2>O que são parasitas?</h2>
      <p>Parasitas são organismos que vivem às custas do hospedeiro. Podem ser microscópicos ou visíveis, afetando a absorção de nutrientes e causando inflamação sistêmica.</p>
      
      <h2>Sinais de sobrecarga tóxica</h2>
      <ul>
        <li>Pele com aspecto cansado</li>
        <li>Olheiras persistentes</li>
        <li>Inchaço abdominal</li>
        <li>Alterações no humor</li>
        <li>Dificuldade para perder peso</li>
        <li>Unhas fracas e cabelos opacos</li>
      </ul>
      
      <h2>Protocolo natural de 21 dias</h2>
      
      <h3>Semana 1 - Preparação</h3>
      <ul>
        <li>Eliminação de açúcar refinado e processados</li>
        <li>Aumento do consumo de água</li>
        <li>Introdução de chás depurativos</li>
        <li>Sucos verdes matinais</li>
      </ul>
      
      <h3>Semana 2 - Detox intensivo</h3>
      <ul>
        <li>Jejum intermitente supervisionado</li>
        <li>Suplementação com fibras naturais</li>
        <li>Ervas antiparasitárias (artemísia, cravo, noz preta)</li>
        <li>Probióticos para reequilibrar a flora</li>
      </ul>
      
      <h3>Semana 3 - Reconstrução</h3>
      <ul>
        <li>Reintrodução gradual de alimentos</li>
        <li>Foco em nutrientes reparadores</li>
        <li>Fortalecimento do sistema imunológico</li>
        <li>Manutenção dos hábitos saudáveis</li>
      </ul>
      
      <h2>Benefícios observados</h2>
      <p>Após o protocolo completo, os clientes relatam:</p>
      <ul>
        <li>Pele mais luminosa e uniforme</li>
        <li>Redução de inflamações</li>
        <li>Mais energia e disposição</li>
        <li>Melhora na digestão</li>
        <li>Perda de peso natural</li>
        <li>Sono mais reparador</li>
      </ul>
      
      <h2>Acompanhamento profissional</h2>
      <p>Este protocolo deve ser realizado com acompanhamento profissional. Cada pessoa tem necessidades específicas e o programa é adaptado individualmente.</p>
      
      <p>Investir em um detox completo é investir em uma nova versão de si mesmo, mais saudável e radiante.</p>
    `,
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5571992353171", "_blank")
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: "smooth" }}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Image
                  src="/logo-mariane.png"
                  alt="Mariane Oliveira - Terapeuta Naturalista"
                  width={180}
                  height={60}
                  className="h-12 w-auto cursor-pointer"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/#sobre" className="text-gray-700 hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="/#servicos" className="text-gray-700 hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="/#produtos" className="text-gray-700 hover:text-primary transition-colors">
                Eco Encanto
              </Link>
              <Link href="/#depoimentos" className="text-gray-700 hover:text-primary transition-colors">
                Depoimentos
              </Link>
              <Link href="/#comunidade" className="text-gray-700 hover:text-primary transition-colors">
                Comunidade
              </Link>
              <Link href="/blog" className="text-primary font-semibold">
                Blog
              </Link>
              <Link href="/#contatos" className="text-gray-700 hover:text-primary transition-colors">
                Contatos
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/#sobre"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="/#servicos"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="/#produtos"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Eco Encanto
                </Link>
                <Link
                  href="/#depoimentos"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Depoimentos
                </Link>
                <Link
                  href="/#comunidade"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comunidade
                </Link>
                <Link href="/blog" className="text-primary font-semibold" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
                <Link
                  href="/#contatos"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contatos
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Article Content */}
      <article className="mt-20 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-light font-serif text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString("pt-BR")}
              <Clock className="h-4 w-4 ml-6 mr-2" />
              {post.readTime}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Gostou do conteúdo? Agende sua consulta!</h3>
            <p className="text-gray-600 mb-6">
              Desenvolvo protocolos personalizados para suas necessidades específicas.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleWhatsAppClick}>
              <MessageCircle className="h-5 w-5 mr-2" />
              Agendar Consulta
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-serif text-gray-800 mb-8">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-gray-600 text-sm line-clamp-3">{relatedPost.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <Image
                  src="/logo-mariane.png"
                  alt="Mariane Oliveira - Terapeuta Naturalista"
                  width={180}
                  height={60}
                  className="h-12 w-auto mb-4 brightness-0 invert cursor-pointer"
                  loading="lazy"
                />
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Bem-estar natural através de protocolos personalizados e produtos artesanais.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <Link href="/#sobre" className="block text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
                <Link href="/#servicos" className="block text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
                <Link href="/#produtos" className="block text-gray-400 hover:text-white transition-colors">
                  Eco Encanto
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Limpeza Orgânica</p>
                <p className="text-gray-400">Revitalização Facial</p>
                <p className="text-gray-400">Detox Facial</p>
                <p className="text-gray-400">Produtos Eco Encanto</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-2">
                <p className="text-gray-400">(71) 99235-3171</p>
                <p className="text-gray-400">marianecarmooliveira@gmail.com</p>
                <p className="text-gray-400">@marianeterapeutanaturista</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Mariane Oliveira - Terapeuta Naturalista. Todos os direitos reservados.
            </p>
            <span id="copyright" className="text-gray-500 text-sm block mt-2">
              &copy; 2025 Sara Oliveira - Desenvolvedora Web
            </span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:animate-none transition-all duration-300 hover:scale-110"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
