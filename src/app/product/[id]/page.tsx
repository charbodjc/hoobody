'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductById, getProductsByCategory } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ProductCard from '@/components/product-card'
import { formatCurrency } from '@/lib/utils'
import { Star, Truck, Shield, ArrowLeft } from 'lucide-react'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const product = getProductById(resolvedParams.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary">Products</Link>
        <span>/</span>
        <Link href={`/category/${product.category}`} className="hover:text-primary capitalize">
          {product.category.replace('-', ' ')}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Back Button */}
      <Link href="/products">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </Link>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.featured && (
            <Badge className="absolute top-4 left-4" variant="default">
              Featured
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-primary">
                {formatCurrency(product.price)}
              </span>
              {product.price > 50 && (
                <Badge variant="secondary">Free Shipping</Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.stock > 0 ? (
                <>
                  <div className="h-2 w-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-green-600">
                    In Stock ({product.stock} available)
                  </span>
                </>
              ) : (
                <>
                  <div className="h-2 w-2 bg-red-500 rounded-full" />
                  <span className="text-sm text-red-600">Out of Stock</span>
                </>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">100% Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
