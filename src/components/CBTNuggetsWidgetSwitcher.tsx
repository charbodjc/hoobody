'use client'

export default function CBTNuggetsWidgetSwitcher() {
  const reinit = (mode: 'prod' | 'local') => {
    const apiUrl = mode === 'prod' ? 'https://crm.cbtnuggets.com' : 'http://localhost:3030'
    const primaryColor = mode === 'prod' ? '#1e3a8a' : '#9333ea'
    if (typeof window !== 'undefined' && (window as any).CBTNuggetsTalkToUs) {
      ;(window as any).CBTNuggetsTalkToUs.init({
        position: 'bottom-right',
        primaryColor,
        apiUrl,
        autoShow: false,
        showAfterDelay: 0,
        onLoad: () => console.log(`[CBTN] ${mode} widget loaded`),
        onOpen: () => console.log(`[CBTN] ${mode} widget opened`),
        onClose: () => console.log(`[CBTN] ${mode} widget closed`),
      })
    }
  }

  return (
    <div className="fixed bottom-20 right-4 z-[9999] flex gap-2">
      <button
        onClick={() => reinit('prod')}
        className="px-3 py-1 text-xs rounded border bg-white shadow"
      >
        Prod widget
      </button>
      <button
        onClick={() => reinit('local')}
        className="px-3 py-1 text-xs rounded border bg-white shadow"
      >
        Local widget
      </button>
    </div>
  )
}


