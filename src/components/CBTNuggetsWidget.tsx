'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    CBTNuggetsTalkToUs: {
      init: (config: {
        position: string
        primaryColor: string
        apiUrl: string
        autoShow: boolean
        showAfterDelay: number
        onLoad?: () => void
        onOpen?: () => void
        onClose?: () => void
      }) => void
    }
  }
}

export default function CBTNuggetsWidget() {
  useEffect(() => {
    // Initialize widget when it's available
    const initializeWidget = () => {
      if (typeof window !== 'undefined' && window.CBTNuggetsTalkToUs) {
        window.CBTNuggetsTalkToUs.init({
          position: 'bottom-right',
          primaryColor: '#1e3a8a',
          apiUrl: 'https://crm.cbtnuggets.com',
          autoShow: false,
          showAfterDelay: 0,
          onLoad: function() {
            console.log('CBT Nuggets Widget loaded');
          },
          onOpen: function() {
            console.log('CBT Nuggets Widget opened');
          },
          onClose: function() {
            console.log('CBT Nuggets Widget closed');
          }
        });
      }
    };

    // Check if script is already loaded
    if (window.CBTNuggetsTalkToUs) {
      initializeWidget();
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (window.CBTNuggetsTalkToUs) {
          clearInterval(checkInterval);
          initializeWidget();
        }
      }, 100);

      // Clean up interval after 10 seconds to prevent memory leak
      setTimeout(() => clearInterval(checkInterval), 10000);
    }
  }, []);

  return (
    <Script 
      src="https://crm.cbtnuggets.com/widget/talk-to-us.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('CBT Nuggets script loaded');
      }}
    />
  );
}
