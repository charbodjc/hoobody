import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CBTNuggetsWidget from '@/components/CBTNuggetsWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hoobody - Your Premium Shopping Destination',
  description: 'Discover amazing products at Hoobody.com - Quality, Style, and Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
        
        {/* CBT Nuggets Talk to Us Widget */}
        <CBTNuggetsWidget />
      </body>
    </html>
  )
}
