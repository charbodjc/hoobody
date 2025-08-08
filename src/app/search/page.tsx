'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/product-card'
import { searchProducts } from '@/data/products'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = searchProducts(query)

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        {query && (
          <p className="text-muted-foreground">
            {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
          </p>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 space-y-4">
          <Search className="h-24 w-24 text-muted-foreground mx-auto" />
          <h2 className="text-2xl font-semibold">No products found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {query 
              ? `We couldn't find any products matching "${query}". Try searching with different keywords.`
              : 'Enter a search term to find products.'}
          </p>
          <Link href="/products">
            <Button className="mt-4">
              Browse All Products
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container py-8">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
