import { Product, Category } from '@/types'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80'
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80'
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and garden',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
  },
  {
    id: '4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Gear for active lifestyle',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80'
  }
]

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Premium over-ear headphones with active noise cancellation, 30-hour battery life, and superior sound quality.',
    price: 299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    stock: 15,
    featured: true,
    rating: 4.8,
    reviews: 256
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitoring, GPS, and smartphone integration with 7-day battery life.',
    price: 399.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    stock: 23,
    featured: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: '3',
    name: '4K Webcam',
    description: 'Professional-grade webcam with 4K resolution, auto-focus, and built-in ring light for video calls and streaming.',
    price: 179.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=800&q=80',
    stock: 42,
    featured: false,
    rating: 4.5,
    reviews: 98
  },
  {
    id: '4',
    name: 'Portable SSD 1TB',
    description: 'Ultra-fast external storage with USB-C connectivity, shock-resistant design, and 1050MB/s transfer speeds.',
    price: 129.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&q=80',
    stock: 67,
    featured: false,
    rating: 4.7,
    reviews: 312
  },
  
  // Fashion
  {
    id: '5',
    name: 'Premium Leather Jacket',
    description: 'Genuine leather jacket with modern cut, multiple pockets, and premium YKK zippers. Available in multiple colors.',
    price: 449.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    stock: 8,
    featured: true,
    rating: 4.9,
    reviews: 145
  },
  {
    id: '6',
    name: 'Designer Sunglasses',
    description: 'UV400 protection polarized lenses with titanium frame. Includes premium case and cleaning kit.',
    price: 189.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    stock: 34,
    featured: false,
    rating: 4.4,
    reviews: 87
  },
  {
    id: '7',
    name: 'Canvas Backpack',
    description: 'Vintage-style canvas backpack with laptop compartment, multiple pockets, and adjustable straps.',
    price: 79.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    stock: 56,
    featured: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: '8',
    name: 'Running Shoes',
    description: 'Lightweight performance running shoes with responsive cushioning and breathable mesh upper.',
    price: 129.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    stock: 91,
    featured: false,
    rating: 4.7,
    reviews: 423
  },
  
  // Home & Garden
  {
    id: '9',
    name: 'Smart Air Purifier',
    description: 'HEPA filtration system with app control, air quality monitoring, and coverage up to 500 sq ft.',
    price: 249.99,
    category: 'home-garden',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    stock: 19,
    featured: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: '10',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable lumbar support, breathable mesh back, and premium padding for all-day comfort.',
    price: 399.99,
    category: 'home-garden',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
    stock: 12,
    featured: false,
    rating: 4.5,
    reviews: 298
  },
  {
    id: '11',
    name: 'Indoor Plant Collection',
    description: 'Set of 5 low-maintenance indoor plants with decorative pots. Perfect for home or office.',
    price: 89.99,
    category: 'home-garden',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    stock: 28,
    featured: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '12',
    name: 'Smart LED Light Strips',
    description: '16.4ft RGB LED strips with app control, music sync, and voice assistant compatibility.',
    price: 49.99,
    category: 'home-garden',
    image: 'https://images.unsplash.com/photo-1565636192335-5c75d64a8d1f?w=800&q=80',
    stock: 102,
    featured: false,
    rating: 4.3,
    reviews: 556
  },
  
  // Sports & Outdoors
  {
    id: '13',
    name: 'Yoga Mat Premium',
    description: 'Extra thick 6mm eco-friendly yoga mat with alignment lines and carrying strap.',
    price: 69.99,
    category: 'sports-outdoors',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    stock: 45,
    featured: false,
    rating: 4.7,
    reviews: 189
  },
  {
    id: '14',
    name: 'Camping Tent 4-Person',
    description: 'Waterproof family tent with easy setup, two doors, and excellent ventilation system.',
    price: 219.99,
    category: 'sports-outdoors',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    stock: 14,
    featured: true,
    rating: 4.8,
    reviews: 267
  },
  {
    id: '15',
    name: 'Adjustable Dumbbells Set',
    description: 'Space-saving adjustable dumbbells from 5 to 50 lbs with quick-release system.',
    price: 349.99,
    category: 'sports-outdoors',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    stock: 21,
    featured: false,
    rating: 4.9,
    reviews: 412
  },
  {
    id: '16',
    name: 'Hydration Backpack',
    description: '2L water reservoir backpack with multiple compartments, perfect for hiking and cycling.',
    price: 59.99,
    category: 'sports-outdoors',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    stock: 67,
    featured: false,
    rating: 4.5,
    reviews: 145
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  )
}
