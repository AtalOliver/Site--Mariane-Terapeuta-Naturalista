import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-12 w-48" />
            <div className="hidden md:flex space-x-8">
              {[...Array(7)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-16" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="mt-20 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Skeleton className="h-8 w-96 mx-auto mb-4" />
          <Skeleton className="h-16 w-full max-w-4xl mx-auto mb-8" />
          <div className="max-w-4xl mx-auto mb-12">
            <Skeleton className="h-10 w-full mb-6" />
            <div className="flex flex-wrap gap-2 justify-center">
              {[...Array(9)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-24" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid Skeleton */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-0 shadow-lg rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Skeleton className="h-4 w-20 mr-4" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-14" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
