'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Eye } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

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
            variant="outline"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
