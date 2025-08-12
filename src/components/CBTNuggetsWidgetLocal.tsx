'use client'

import { useEffect } from 'react'

export default function CBTNuggetsWidgetLocal() {
  useEffect(() => {
    const initializeWidget = () => {
      if (typeof window !== 'undefined' && (window as any).CBTNuggetsTalkToUs) {
        (window as any).CBTNuggetsTalkToUs.init({
          position: 'bottom-right',
          primaryColor: '#9333ea', // purple to differentiate
          apiUrl: 'http://localhost:3030',
          autoShow: false,
          showAfterDelay: 0,
          onLoad: function() {
            console.log('Local CBT Nuggets Widget loaded');
          },
          onOpen: function() {
            console.log('Local CBT Nuggets Widget opened');
          },
          onClose: function() {
            console.log('Local CBT Nuggets Widget closed');
          }
        })
      }
    }

    if ((window as any).CBTNuggetsTalkToUs) {
      initializeWidget()
    } else {
      const checkInterval = setInterval(() => {
        if ((window as any).CBTNuggetsTalkToUs) {
          clearInterval(checkInterval)
          initializeWidget()
        }
      }, 100)

      setTimeout(() => clearInterval(checkInterval), 10000)
    }
  }, [])

  return null
}
