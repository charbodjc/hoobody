'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Star } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAdding(true)
    addToCart(product)
    
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute top-2 left-2" variant="default">
              Featured
            </Badge>
          )}
          {product.stock <= 10 && product.stock > 0 && (
            <Badge className="absolute top-2 right-2" variant="destructive">
              Only {product.stock} left
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1 mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-primary">
              {formatCurrency(product.price)}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full" 
            onClick={handleAddToCart}
            disabled={product.stock === 0 || isAdding}
          >
            {product.stock === 0 ? (
              'Out of Stock'
            ) : isAdding ? (
              'Added!'
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
