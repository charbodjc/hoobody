'use client'

import Link from 'next/link'
import { Search, Menu, User, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Hoobody
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-6">
            <Link href="/products" className="transition-colors hover:text-primary">
              All Products
            </Link>
            <Link href="/category/electronics" className="transition-colors hover:text-primary">
              Electronics
            </Link>
            <Link href="/category/fashion" className="transition-colors hover:text-primary">
              Fashion
            </Link>
            <Link href="/category/home-garden" className="transition-colors hover:text-primary">
              Home & Garden
            </Link>
            <Link href="/category/sports-outdoors" className="transition-colors hover:text-primary">
              Sports
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm"
              />
            </form>
            
            <nav className="flex flex-col space-y-2">
              <Link href="/products" className="py-2 text-sm font-medium transition-colors hover:text-primary">
                All Products
              </Link>
              <Link href="/category/electronics" className="py-2 text-sm font-medium transition-colors hover:text-primary">
                Electronics
              </Link>
              <Link href="/category/fashion" className="py-2 text-sm font-medium transition-colors hover:text-primary">
                Fashion
              </Link>
              <Link href="/category/home-garden" className="py-2 text-sm font-medium transition-colors hover:text-primary">
                Home & Garden
              </Link>
              <Link href="/category/sports-outdoors" className="py-2 text-sm font-medium transition-colors hover:text-primary">
                Sports & Outdoors
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
