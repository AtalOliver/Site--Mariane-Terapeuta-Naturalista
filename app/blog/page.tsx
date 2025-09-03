"use client"

import { useState, useMemo, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Search, MessageCircle, Menu, X, ChevronDown } from "lucide-react"

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [postsToShow, setPostsToShow] = useState(6)

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
    },
    {
      id: 11,
      title: "Receitas Saudáveis: Nutrição que Transforma sua Pele de Dentro para Fora",
      slug: "receitas-saudaveis-pele",
      excerpt:
        "Descubra receitas nutritivas e deliciosas que nutrem sua pele de dentro para fora. Alimentos ricos em antioxidantes, vitaminas e minerais que promovem uma pele radiante e saudável.",
      image: "/blog/receitas-saudaveis.png",
      date: "2025-01-22",
      readTime: "7 min",
      category: "Nutrição e Beleza",
      tags: ["receitas", "nutrição", "alimentação saudável", "antioxidantes"],
    },
  ]

  const categories = [
    "Todos",
    "Cuidados Naturais",
    "Tratamentos",
    "Produtos Naturais",
    "Fitoterapia",
    "Nutrição e Beleza",
    "Anti-idade Natural",
    "Exercícios Faciais",
    "Detox Corporal",
  ]

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, postsToShow)
  }, [filteredPosts, postsToShow])

  const handleWhatsAppClick = useCallback(() => {
    window.open("https://wa.me/5571992353171", "_blank")
  }, [])

  const handleInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/marianeterapeutanaturista?igsh=MXd5MmJkY2tybHB2Mg%3D%3D", "_blank")
  }, [])

  const loadMorePosts = useCallback(() => {
    setPostsToShow((prev) => Math.min(prev + 6, filteredPosts.length))
  }, [filteredPosts.length])

  const hasMorePosts = displayedPosts.length < filteredPosts.length

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
                  className="h-16 w-auto cursor-pointer"
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

      {/* Hero Section */}
      <section className="relative mt-20 py-16 px-6 bg-gradient-to-br from-primary/15 via-white via-50% to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao site
            </Link>
            <h1 className="text-4xl md:text-5xl font-light font-serif text-gray-800 mb-4 tracking-wide">
              Bem-vindo(a) ao Blog da
              <br />
              Terapeuta Naturalista Mariane Oliveira
            </h1>
            <div className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed space-y-4">
              <p>Aqui você encontra conteúdos especiais sobre cuidados naturais com a pele, bem-estar e autocuidado.</p>
              <p>
                Mariane é Terapeuta Naturalista e desenvolve protocolos personalizados que unem técnica, natureza e
                equilíbrio — desde a limpeza profunda e revitalização facial, até clareamento vegano, detox e
                rejuvenescentes pro age.
              </p>
              <p>
                Além disso, ela também assina a Eco Encanto, sua linha exclusiva de produtos naturais e artesanais que
                potencializam os resultados dos tratamentos e levam a natureza para a sua rotina de beleza.
              </p>
              <p className="text-primary font-medium">
                🌿 Inspire-se, descubra dicas valiosas e conheça mais sobre o universo dos cuidados naturais e
                artesanais.
              </p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category)
                    setPostsToShow(6) // Reset pagination when changing category
                  }}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {displayedPosts.map((post, index) => (
              <Card
                key={post.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-to-br from-white to-primary/5"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    loading={index < 4 ? "eager" : "lazy"}
                    priority={index < 4}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-gray-800 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white bg-transparent">
                      Ler artigo
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {hasMorePosts && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMorePosts}
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-white bg-transparent"
              >
                <ChevronDown className="h-4 w-4 mr-2" />
                Carregar mais artigos
              </Button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum artigo encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>

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
                <Link href="/#contatos" className="block text-gray-400 hover:text-white transition-colors">
                  Contatos
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
