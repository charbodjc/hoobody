'use client'

import { useState, useMemo } from 'react'
import ProductCard from '@/components/product-card'
import { products, categories } from '@/data/products'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'name'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [showSortMenu, setShowSortMenu] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? products 
      : products.filter(p => p.category === selectedCategory)

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.name.localeCompare(b.name)
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      }
    })
  }, [selectedCategory, sortBy])

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name: A to Z' },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-muted-foreground">
          Browse our complete collection of {products.length} premium products
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            size="sm"
          >
            All Categories
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.slug ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.slug)}
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative ml-auto">
          <Button
            variant="outline"
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="min-w-[180px] justify-between"
          >
            {sortOptions.find(opt => opt.value === sortBy)?.label}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          
          {showSortMenu && (
            <div className="absolute right-0 z-10 mt-2 w-full rounded-md border bg-background shadow-lg">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors"
                  onClick={() => {
                    setSortBy(option.value as SortOption)
                    setShowSortMenu(false)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-4">
        Showing {filteredAndSortedProducts.length} products
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
