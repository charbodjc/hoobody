import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CBTNuggetsWidget from '@/components/CBTNuggetsWidget'
import CBTNuggetsWidgetLocal from '@/components/CBTNuggetsWidgetLocal'
import CBTNuggetsWidgetSwitcher from '@/components/CBTNuggetsWidgetSwitcher'

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
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* CBT Nuggets Talk to Us Widgets */}
        <CBTNuggetsWidget />
        <CBTNuggetsWidgetLocal />
        <CBTNuggetsWidgetSwitcher />
      </body>
    </html>
  )
}
