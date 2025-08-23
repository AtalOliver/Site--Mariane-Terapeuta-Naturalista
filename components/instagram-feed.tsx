"use client"

import { Instagram } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface InstagramFeedProps {
  onInstagramClick: () => void
}

const instagramPosts = [
  {
    id: "1",
    image: "/instagram-atendimento.jpg",
    caption: "Cuidar da pele é também cuidar do seu bem-estar por inteiro. 🌿",
    link: "https://www.instagram.com/marianeterapeutanaturista/", // Substitua pelo link real do post
  },
  {
    id: "2",
    image: "/instagram-clientes.jpg",
    caption: "Escolher Eco Encanto é escolher beleza, saúde e sustentabilidade no mesmo gesto. ✨",
    link: "https://www.instagram.com/marianeterapeutanaturista/",
  },
  {
    id: "3",
    image: "/instagram-hidratacao.png",
    caption: "Resultados que você sente e sua pele mostra. 💚",
    link: "https://www.instagram.com/marianeterapeutanaturista/",
  },
  {
    id: "4",
    image: "/instagram-espuma.jpg",
    caption: "Sua pele limpa, macia e feliz. Por isso ela é a nossa queridinha.",
    link: "https://www.instagram.com/marianeterapeutanaturista/",
  },
]

export default function InstagramFeed({ onInstagramClick }: InstagramFeedProps) {
  return (
    <div className="mb-12 animate-bounce-in">
      <h3 className="text-2xl font-bold text-center mb-8">Últimas do Instagram</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open(post.link, "_blank")}
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.caption}
              width={200}
              height={200}
              className="w-full h-48 object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm line-clamp-2">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-secondary hover:bg-gray-100"
          onClick={onInstagramClick}
        >
          <Instagram className="mr-2 h-5 w-5" />
          Seguir no Instagram
        </Button>
      </div>
    </div>
  )
}
