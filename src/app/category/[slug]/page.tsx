import { notFound } from 'next/navigation'
import ProductCard from '@/components/product-card'
import { getProductsByCategory, categories } from '@/data/products'
import Image from 'next/image'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find(c => c.slug === slug)
  const products = getProductsByCategory(slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Category Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {category.name}
            </h1>
            <p className="text-white/90 text-lg">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {products.length} products in {category.name}
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No products available in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
