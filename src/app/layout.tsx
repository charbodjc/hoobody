import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Use swap to show text immediately with fallback font
  preload: false, // Disable automatic preloading to avoid unused preload warning
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'arial'], // Comprehensive fallback fonts
  adjustFontFallback: true, // Automatically adjust fallback fonts to reduce CLS
  variable: '--font-inter', // Use CSS variable for better control
})

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
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* CBT Nuggets Talk to Us Widget */}
        <Script 
          src="https://crm.cbtnuggets.com/widget/talk-to-us.js"
          strategy="afterInteractive"
        />
        <Script
          id="cbt-nuggets-widget-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof CBTNuggetsTalkToUs !== 'undefined') {
                CBTNuggetsTalkToUs.init({
                  position: 'bottom-right',
                  primaryColor: '#f5bf41',
                  apiUrl: 'https://crm.cbtnuggets.com',
                  autoShow: false,
                  showAfterDelay: 0,
                  onLoad: function() {
                    console.log('Widget loaded');
                  },
                  onOpen: function() {
                    console.log('Widget opened');
                  },
                  onClose: function() {
                    console.log('Widget closed');
                  }
                });
              } else {
                // Wait for the script to load
                window.addEventListener('load', function() {
                  if (typeof CBTNuggetsTalkToUs !== 'undefined') {
                    CBTNuggetsTalkToUs.init({
                      position: 'bottom-right',
                      primaryColor: '#f5bf41',
                      apiUrl: 'https://crm.cbtnuggets.com',
                      autoShow: false,
                      showAfterDelay: 0,
                      onLoad: function() {
                        console.log('Widget loaded');
                      },
                      onOpen: function() {
                        console.log('Widget opened');
                      },
                      onClose: function() {
                        console.log('Widget closed');
                      }
                    });
                  }
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}
