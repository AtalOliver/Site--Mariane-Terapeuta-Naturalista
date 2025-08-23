interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
}

interface InstagramResponse {
  data: InstagramPost[]
  paging?: {
    cursors: {
      before: string
      after: string
    }
    next?: string
  }
}

export async function getInstagramPosts(limit = 4): Promise<InstagramPost[]> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!accessToken) {
    console.warn("Instagram access token not found. Using fallback posts.")
    return getFallbackPosts()
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&limit=${limit}&access_token=${accessToken}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data: InstagramResponse = await response.json()

    // Filter only images and carousels (no videos for better performance)
    return data.data.filter((post) => post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM")
  } catch (error) {
    console.error("Error fetching Instagram posts:", error)
    return getFallbackPosts()
  }
}

function getFallbackPosts(): InstagramPost[] {
  return [
    {
      id: "1",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=200&width=200&text=Dicas+Naturais",
      permalink: "https://www.instagram.com/marianeterapeutanaturista",
      caption: "Dicas de cuidados naturais para sua pele...",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=200&width=200&text=Aromaterapia",
      permalink: "https://www.instagram.com/marianeterapeutanaturista",
      caption: "Benefícios da aromaterapia no dia a dia...",
      timestamp: new Date().toISOString(),
    },
    {
      id: "3",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=200&width=200&text=Eco+Encanto",
      permalink: "https://www.instagram.com/marianeterapeutanaturista",
      caption: "Produtos naturais Eco Encanto...",
      timestamp: new Date().toISOString(),
    },
    {
      id: "4",
      media_type: "IMAGE",
      media_url: "/placeholder.svg?height=200&width=200&text=Tratamentos",
      permalink: "https://www.instagram.com/marianeterapeutanaturista",
      caption: "Tratamentos faciais orgânicos...",
      timestamp: new Date().toISOString(),
    },
  ]
}
