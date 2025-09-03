"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import InstagramFeed from "@/components/instagram-feed"
import {
  Leaf,
  Heart,
  Sparkles,
  Mail,
  Instagram,
  MessageCircle,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Phone,
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Catiana",
      text: "Gente quem já se permitiu esse momento? Esse presente pra pele? Os produtos @Mariane|Terapeuta Naturista além de ser tudo natural é muito bom e cheiroso. A vontade que dá é ficar aí um bom tempo. Obrigada Mari pelo cuidado e carinho",
      rating: 5,
    },
    {
      name: "Rose",
      text: "Eu preciso voltar! Morrendo de saudades.",
      rating: 5,
    },
    {
      name: "Cleu",
      text: "Bom dia Mari, bom dia meninas, confesso que estava com muito receio de fazer tratamento, mas hoje não quero parar, foi muito benéfico para mim, inicio sentia muitas dores nas articulações, mas hoje n sinto nada, desinchei bastante, estou na menopausa então meu corpo mudou muito, mas estou gostando bastante do resultado desses dias. Só tenho que agradecer pelo ensinamento, bjs querida.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5571992353171", "_blank")
  }

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/marianeterapeutanaturista?igsh=MXd5MmJkY2tybHB2Mg%3D%3D", "_blank")
  }

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/aLxfAcdCcrPdsrQx7", "_blank")
  }

  const handleBlogClick = () => {
    window.location.href = "/blog"
  }

  const handleLinhaEcoClick = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSobreClick = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContatosClick = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("contatos")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: "smooth" }}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo-mariane.png"
                alt="Mariane Oliveira - Terapeuta Naturalista"
                width={200}
                height={70}
                className="h-16 w-auto"
                loading="lazy"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={handleSobreClick} className="text-gray-700 hover:text-primary transition-colors">
                Sobre
              </button>
              <Link href="#servicos" className="text-gray-700 hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#produtos" className="text-gray-700 hover:text-primary transition-colors">
                Eco Encanto
              </Link>
              <Link href="#depoimentos" className="text-gray-700 hover:text-primary transition-colors">
                Depoimentos
              </Link>
              <Link href="#comunidade" className="text-gray-700 hover:text-primary transition-colors">
                Comunidade
              </Link>
              <button onClick={handleBlogClick} className="text-gray-700 hover:text-primary transition-colors">
                Blog
              </button>
              <button onClick={handleContatosClick} className="text-gray-700 hover:text-primary transition-colors">
                Contatos
              </button>
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
                <button
                  onClick={(e) => {
                    handleSobreClick(e)
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-primary transition-colors text-left"
                >
                  Sobre
                </button>
                <Link
                  href="#servicos"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="#produtos"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Eco Encanto
                </Link>
                <Link
                  href="#depoimentos"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Depoimentos
                </Link>
                <Link
                  href="#comunidade"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comunidade
                </Link>
                <button
                  onClick={() => {
                    handleBlogClick()
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-primary transition-colors text-left"
                >
                  Blog
                </button>
                <button
                  onClick={(e) => {
                    handleContatosClick(e)
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-primary transition-colors text-left"
                >
                  Contatos
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-56 md:pt-52 pb-12 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Mobile Video Background (default, hidden on md and up) */}
        <div className="md:hidden absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-primary/20"></div>
        </div>

        {/* Desktop/Tablet Video Background (hidden on small screens) */}
        <div className="hidden md:block absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://xsbo8pvpi2htywlw.public.blob.vercel-storage.com/video%20hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Decorative Logo Elements (always visible) */}
        <div className="absolute top-20 right-10 opacity-10 z-5">
          <Image src="/mariane-logo.png" alt="" width={200} height={200} className="animate-float" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 z-5">
          <Image src="/mariane-logo.png" alt="" width={150} height={150} className="animate-float" />
        </div>

        {/* Content for Mobile (text + buttons) */}
        <div className="container mx-auto text-center relative z-10 md:hidden">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light font-serif tracking-wide text-gray-800 mb-6 leading-tight transition-all duration-1000 animate-fade-in-up">
              O cuidado natural que
              <span className="text-primary block animate-slide-in-left"> transforma e revela </span>
              <span className="text-secondary block animate-slide-in-right"> a sua melhor versão</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 animate-fade-in-up">
              Sou Mariane Oliveira, terapeuta naturalista especializada em estética natural e protocolos personalizados.
              Através de métodos naturais e da linha de produtos Eco Encanto, ajudo você a reconectar-se com seu
              bem-estar integral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 animate-bounce-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-white/80"
                onClick={handleLinhaEcoClick}
              >
                Linha Eco Encanto
              </Button>
            </div>
          </div>
        </div>

        {/* Content for Desktop/Tablet (buttons only, positioned) */}
        <div className="hidden md:flex absolute bottom-12 right-12 z-10 flex-col gap-4 items-end">
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleWhatsAppClick}>
            <MessageCircle className="mr-2 h-5 w-5" />
            Agendar Consulta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white bg-white/80"
            onClick={handleLinhaEcoClick}
          >
            Linha Eco Encanto
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 animate-float">
          <Leaf className="h-12 w-12 text-secondary/40" />
        </div>
        <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="h-10 w-10 text-primary/40" />
        </div>
        <div className="absolute bottom-10 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Heart className="h-8 w-8 text-primary/30" />
        </div>
      </section>

      {/* Sobre Section */}
      <section
        id="sobre"
        className="py-16 bg-gradient-to-br from-primary/15 via-white via-50% to-secondary/20 relative"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light font-serif text-gray-800 mb-4 animate-fade-in-up tracking-wide text-center">
              Quem é Mariane Oliveira?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16 lg:max-w-6xl lg:mx-auto lg:gap-8 lg:px-8">
            <div className="relative animate-slide-in-left">
              <Image
                src="/mari-atendimento.jpg"
                alt="Mariane Oliveira em seu consultório"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg object-cover lg:rounded-3xl lg:shadow-xl lg:opacity-95 lg:transition-all lg:duration-300 lg:hover:scale-103 lg:hover:opacity-100"
                loading="lazy"
              />
            </div>
            <div className="animate-slide-in-right">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sou terapeuta naturalista. Atendo pessoas que buscam equilíbrio, saúde e bem-estar através da estética
                natural e protocolos naturais personalizados.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Minha missão é levar consciência sobre saúde e uma vida natural e equilibrada através dos produtos
                naturais. Busco compartilhar aquilo que vivo, transbordar na vida do outro. E uso o natural como meio
                disso.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Estética Natural</Badge>
                <Badge variant="secondary">Aromaterapia</Badge>
                <Badge variant="secondary">Óleos Essenciais</Badge>
                <Badge variant="secondary">Eco Encanto</Badge>
                <Badge variant="secondary">Protocolos Personalizados</Badge>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
            <div className="animate-slide-in-left">
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tudo começou com uma dor pessoal, e uma descoberta. Nunca tinha usado produtos naturais até sofrer um
                corte químico no cabelo. Foi um choque, mas também um ponto de virada. Buscando alternativas para
                recuperar os fios, encontrei um aliado simples e poderoso: o óleo de coco. Ele transformou meu cabelo e
                acendeu em mim algo ainda maior, o desejo de compartilhar essa solução com outras pessoas. Foi assim que
                comecei, vendendo óleo de coco, depois óleo de rícino. Nessa mesma época, em uma viagem com meu esposo,
                que estava desempregado, conheci as argilas naturais em uma feira. Fiquei encantada com o potencial dos
                produtos naturais e vi ali uma nova oportunidade de empreender. Surgia, então, a Eco Encanto, minha
                linha de produtos naturais, feita com propósito, simplicidade e verdade.
              </p>
              <p className="text-gray-600 leading-relaxed">
                E com a Eco Encanto, ofereço uma linha de produtos naturais que refletem minha jornada, meu propósito e
                o que acredito: a cura começa pelo simples, pelo natural, pelo verdadeiro.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <Image
                src="/kit-eco-encanto.jpg"
                alt="Produtos da linha Eco Encanto"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 bg-gradient-to-br from-muted via-white to-accent/40 relative">
        <div className="absolute bottom-0 left-0 opacity-5">
          <Image src="/mariane-logo.png" alt="" width={250} height={250} loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Protocolos faciais naturais personalizados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-bounce-in">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Limpeza de pele Orgânica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Limpeza profunda utilizando produtos orgânicos, removendo impurezas e revitalizando a pele.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-secondary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-secondary">Revitalização Facial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Tratamento para restaurar o viço e a luminosidade da pele, combatendo os sinais de cansaço e
                  envelhecimento.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Detox Facial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Processo de desintoxicação da pele, eliminando toxinas e promovendo um aspecto mais saudável e
                  equilibrado.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16"></div>
          <div className="grid md:grid-cols-3 gap-8 animate-bounce-in">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Clareamento Vegano</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Técnica de clareamento da pele utilizando produtos veganos, minimizando manchas e uniformizando o tom.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-secondary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-secondary">Rejuvenescimento Pro Age</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Tratamento focado em retardar os sinais de envelhecimento, promovendo a saúde e a vitalidade da pele
                  madura.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Hidratação Facial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  Sessão de hidratação profunda para nutrir e proteger a pele, restaurando a sua barreira natural.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Produtos Eco Encanto Section */}
      <section id="produtos" className="py-16 bg-gradient-to-br from-white via-secondary/10 to-primary/10 relative">
        <div className="absolute top-10 right-10 opacity-5">
          <Image src="/mariane-logo.png" alt="" width={200} height={200} loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Linha Eco Encanto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Produtos naturais artesanais desenvolvidos para complementar seus cuidados terapêuticos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-bounce-in">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-to-br from-white to-primary/5">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src="/oleos-vegetais-eco-encanto.jpg"
                  alt="Óleos Vegetais Naturais e Blends Eco Encanto"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Óleos Vegetais Naturais e Blends</CardTitle>
                <CardDescription className="text-center">
                  Óleos puros e naturais selecionados para aromaterapia, massagem e cuidados terapêuticos diários.
                  <br />
                  <span className="font-medium">Blends</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-to-br from-white to-secondary/5">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src="/serum-eco-encanto.jpg"
                  alt="Sérum Eco Encanto"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-secondary">Sérum</CardTitle>
                <CardDescription className="text-center">
                  nutre profundamente a pele, auxilia na diminuição de manchas e proporciona hidratação intensa.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-to-br from-white to-primary/5">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src="/batom-eco-encanto.jpg"
                  alt="Cosméticos Naturais Eco Encanto"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Cosméticos Artesanais</CardTitle>
                <CardDescription className="text-center">
                  Sabonetes, cremes e produtos de beleza feitos com ingredientes naturais e técnicas artesanais.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 bg-gradient-to-br from-accent/50 via-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Depoimentos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Veja o que minhas clientes dizem sobre sua jornada de transformação.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-bounce-in">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-primary/5">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="font-semibold text-primary">{testimonials[currentTestimonial].name}</p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidade Section */}
      <section
        id="comunidade"
        className="py-16 bg-gradient-to-br from-secondary via-primary/20 to-accent text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Junte-se à Nossa Comunidade</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up">
              Faça parte de uma comunidade que valoriza o bem-estar natural e compartilha experiências de vida saudável.
            </p>
          </div>

          {/* Instagram Preview */}
          <InstagramFeed onInstagramClick={handleInstagramClick} />
        </div>
      </section>

      {/* Contatos Section */}
      <section id="contatos" className="py-16 bg-gradient-to-br from-muted via-white to-accent/30 relative">
        <div className="absolute bottom-0 right-0 opacity-5">
          <Image src="/mariane-logo.png" alt="" width={250} height={250} loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Estou aqui para ajudar você em sua jornada de bem-estar natural.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:max-w-5xl lg:mx-auto lg:gap-8">
            <div className="animate-slide-in-left px-4 md:px-0">
              <form action="https://formsubmit.co/marianecarmooliveira@gmail.com" method="POST">
                {/* FormSubmit configuration fields */}
                <input type="hidden" name="_subject" value="Nova mensagem do site - Mariane Terapeuta" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://mariane-terapeuta.vercel.app/#contatos" />

                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-primary/5">
                  <CardHeader>
                    <CardTitle className="text-primary">Envie uma Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input name="name" placeholder="Seu nome" required className="w-full" />
                    <Input name="email" type="email" placeholder="Seu e-mail" required className="w-full" />
                    <Input name="phone" type="tel" placeholder="Telefone (opcional)" className="w-full" />
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem"
                      rows={4}
                      required
                      className="w-full resize-none"
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Enviar Mensagem
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </div>

            <div className="animate-slide-in-right px-4 md:px-0">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-primary">Contato Direto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-600">(71) 99235-3171</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-600 break-all">marianecarmooliveira@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-600">@marianeterapeutanaturista</span>
                  </div>
                  <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLocationClick}>
                    <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-600 hover:text-primary transition-colors">Ver localização</span>
                  </div>

                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4">
                    <Button
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 w-full sm:flex-1"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white bg-white w-full sm:flex-1"
                      onClick={handleInstagramClick}
                    >
                      <Instagram className="mr-2 h-5 w-5" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-mariane.png"
                alt="Mariane Oliveira - Terapeuta Naturalista"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
                loading="lazy"
              />
              <p className="text-gray-400 leading-relaxed">
                Bem-estar natural através de protocolos personalizados e produtos artesanais.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <button
                  onClick={handleSobreClick}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  Sobre
                </button>
                <Link href="#servicos" className="block text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
                <Link href="#produtos" className="block text-gray-400 hover:text-white transition-colors">
                  Eco Encanto
                </Link>
                <button
                  onClick={handleBlogClick}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  Blog
                </button>
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
