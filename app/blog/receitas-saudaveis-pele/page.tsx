"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2, MessageCircle, Menu, X, Heart } from "lucide-react"

export default function ReceitasSaudaveisPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5571992353171", "_blank")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Receitas Saudáveis: Nutrição que Transforma sua Pele",
        url: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
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
                  priority
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
                <Link href="/#sobre" className="text-gray-700 hover:text-primary transition-colors">
                  Sobre
                </Link>
                <Link href="/#servicos" className="text-gray-700 hover:text-primary transition-colors">
                  Serviços
                </Link>
                <Link href="/#produtos" className="text-gray-700 hover:text-primary transition-colors">
                  Eco Encanto
                </Link>
                <Link href="/blog" className="text-primary font-semibold">
                  Blog
                </Link>
                <Link href="/#contatos" className="text-gray-700 hover:text-primary transition-colors">
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
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary">Nutrição e Beleza</Badge>
              <Badge variant="outline">receitas</Badge>
              <Badge variant="outline">nutrição</Badge>
              <Badge variant="outline">alimentação saudável</Badge>
              <Badge variant="outline">antioxidantes</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-light font-serif text-gray-800 mb-6 leading-tight">
              Receitas Saudáveis: Nutrição que Transforma sua Pele de Dentro para Fora
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                22 de janeiro de 2025
                <Clock className="h-4 w-4 ml-4 mr-2" />7 min de leitura
              </div>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/blog/receitas-saudaveis.png"
                alt="Receitas Saudáveis para uma Pele Radiante"
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A beleza da pele começa de dentro para fora. O que colocamos no nosso prato reflete diretamente na nossa
              aparência, e uma alimentação rica em nutrientes específicos pode ser o segredo para uma pele radiante e
              saudável.
            </p>

            <p className="mb-8">
              Como terapeuta naturalista, sempre enfatizo que os cuidados externos são potencializados quando combinados
              com uma nutrição adequada. Hoje, compartilho com vocês receitas especiais que são verdadeiros tratamentos
              de beleza naturais, ricas em antioxidantes, vitaminas e minerais essenciais para a saúde da pele.
            </p>

            <h2 className="text-3xl font-serif text-gray-800 mb-6 mt-12">
              <Heart className="inline h-6 w-6 text-primary mr-2" />
              Receitas que Nutrem sua Pele
            </h2>

            {/* Receita 1 - Espaguete de Legumes */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Espaguete de Legumes com Feijão Preto</CardTitle>
                <CardDescription>Rico em antioxidantes e fibras que auxiliam na desintoxicação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/blog/espaguete-legumes.jpg"
                      alt="Espaguete de Legumes com Feijão Preto"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ingredientes:</h4>
                    <ul className="space-y-1 mb-4 text-sm">
                      <li>• 2 abobrinhas médias</li>
                      <li>• 2 cenouras médias</li>
                      <li>• 1 xícara de feijão preto cozido</li>
                      <li>• 2 tomates em fatias</li>
                      <li>• Azeite extra virgem</li>
                      <li>• Temperos naturais a gosto</li>
                    </ul>
                    <h4 className="font-semibold mb-3 mt-4">Modo de Preparo:</h4>
                    <p className="text-sm mb-4">
                      Em uma panela acrescente o azeite, a cebola, o alho e o alho-poró para refogar. Na sequência
                      adicione os legumes já ralados e adicione o sal e os temperinhos secos, deixe refogando até o
                      ponto ideal que vai variar de acordo com o gosto. Uns preferem ao dente, outros mais cozidos.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Benefícios:</strong> Rico em betacaroteno, vitamina C e antioxidantes que combatem o
                      envelhecimento precoce e promovem a renovação celular.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Receita 2 - Pudim de Banana */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Pudim de Banana Natural</CardTitle>
                <CardDescription>Fonte de potássio e vitaminas do complexo B para pele hidratada</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/blog/pudim-banana.jpg"
                      alt="Pudim de Banana Natural"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ingredientes:</h4>
                    <ul className="space-y-1 mb-4 text-sm">
                      <li>• 4 bananas maduras</li>
                      <li>• 3 ovos orgânicos</li>
                      <li>• 1 xícara de leite vegetal</li>
                      <li>• Mel ou açúcar de coco</li>
                      <li>• Canela em pó</li>
                    </ul>
                    <h4 className="font-semibold mb-3 mt-4">Modo de Preparo:</h4>
                    <p className="text-sm mb-4">
                      Bata todos os ingredientes no liquidificador. Coloque na forma untada com a calda e coloque para
                      assar na air fryer 20 min a 180°, mais 5 min a 200° para dourar. Para a calda da forma, unte com
                      melaço de cana.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Benefícios:</strong> Rico em potássio e vitaminas do complexo B, essenciais para manter a
                      hidratação natural da pele e prevenir ressecamento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Receita 3 - Panqueca de Fígado */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Panqueca Nutritiva de Fígado</CardTitle>
                <CardDescription>Fonte de ferro e vitamina A para pele luminosa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/blog/panqueca-figado.jpg"
                      alt="Panqueca Nutritiva de Fígado"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ingredientes:</h4>
                    <ul className="space-y-1 mb-4 text-sm">
                      <li>• 200g de fígado bovino</li>
                      <li>• 2 ovos</li>
                      <li>• Farinha integral</li>
                      <li>• Espaguete de legumes</li>
                      <li>• Temperos naturais</li>
                    </ul>
                    <h4 className="font-semibold mb-3 mt-4">Modo de Preparo:</h4>
                    <p className="text-sm mb-4">
                      Refogue a cebola, alho-poró e couve em um fio de azeite até murcharem. Deixe esfriar um pouco.
                      Coloque no liquidificador: o refogado, o fígado picado, os ovos, os temperos e a farinha (se
                      estiver usando). Dica: se usar limão ou vinagre, adicione agora. Bata até ficar uma massa bem
                      homogênea. Aqueça uma frigideira antiaderente com um fio de óleo ou azeite. Despeje porções da
                      massa formando panquecas pequenas. Cozinhe em fogo médio por cerca de 2-3 minutos de cada lado, ou
                      até dourar e firmar bem. Sirva quente — vai bem puro ou acompanhado.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Benefícios:</strong> Excelente fonte de ferro e vitamina A, nutrientes fundamentais para a
                      renovação celular e luminosidade natural da pele.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Receita 4 - Bolo de Fubá com Laranja */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Bolo de Fubá com Laranja</CardTitle>
                <CardDescription>Rico em vitamina C e antioxidantes naturais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/blog/bolo-fuba-laranja.jpg"
                      alt="Bolo de Fubá com Laranja"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ingredientes:</h4>
                    <ul className="space-y-1 mb-4 text-sm">
                      <li>• 2 xícaras de fubá</li>
                      <li>• Suco e raspas de 2 laranjas</li>
                      <li>• 3 ovos orgânicos</li>
                      <li>• Óleo de coco</li>
                      <li>• Açúcar de coco</li>
                    </ul>
                    <h4 className="font-semibold mb-3 mt-4">Modo de Preparo:</h4>
                    <p className="text-sm mb-4">
                      Enquanto você prepara o bolo, já deixe o forno ir aquecendo. No liquidificador, coloque os ovos, o
                      óleo, o sal, e as laranjas descascadas. Bata por cerca de 1 minuto, até que a mistura fique
                      homogênea. Adicione a fibra de maçã e bata novamente por mais um minuto. Acrescente o fubá e o
                      amido de milho. Bata por mais 30 segundos, apenas até os ingredientes estarem bem incorporados.
                      Por último, adicione o fermento e misture rapidamente, apenas para incorporar. Unte a forma com
                      margarina e um fio de óleo. Isso ajuda a criar um desmoldante caseiro eficiente. Transfira a massa
                      para a forma e dê leves batidinhas para remover bolhas de ar. Asse em forno pré-aquecido a 180°C
                      por cerca de 30-40 minutos, ou até que, ao inserir um palito, ele saia limpo. Deixe esfriar por
                      alguns minutos antes de desenformar.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Benefícios:</strong> A vitamina C da laranja estimula a produção de colágeno, enquanto o
                      fubá fornece energia e nutrientes para uma pele saudável.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-serif text-gray-800 mb-6 mt-12">Dicas Importantes</h2>

            <div className="bg-primary/10 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Hidratação:</strong> Beba pelo menos 2 litros de água por dia para potencializar os
                    benefícios dos nutrientes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Ingredientes orgânicos:</strong> Sempre que possível, opte por ingredientes orgânicos para
                    evitar toxinas.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Variedade:</strong> Inclua diferentes cores de alimentos para garantir diversos
                    antioxidantes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Consistência:</strong> Os resultados aparecem com o consumo regular dessas receitas
                    nutritivas.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg mb-8">
              Lembre-se: a beleza natural é um reflexo do cuidado integral que temos conosco. Essas receitas, aliadas
              aos tratamentos naturais e produtos da linha Eco Encanto, criam uma sinergia perfeita para uma pele
              radiante e saudável.
            </p>

            <div className="bg-secondary/20 p-6 rounded-lg text-center">
              <p className="text-lg font-medium text-gray-800 mb-4">Quer potencializar ainda mais os resultados?</p>
              <p className="mb-6">
                Combine essas receitas com nossos protocolos personalizados e produtos naturais da Eco Encanto.
              </p>
              <Button onClick={handleWhatsAppClick} className="bg-primary hover:bg-primary/90">
                Agende sua Consulta
              </Button>
            </div>
          </div>
        </div>
      </article>

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
