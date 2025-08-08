# hoobody
# Hoobody.com - E-commerce Test Platform

A modern, fully-functional e-commerce website built with Next.js and TypeScript, designed for testing LiveKit integration from the cbtnuggets-crm project.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Product Catalog**: Browse products by category with search and filtering
- **Shopping Cart**: Full cart functionality with persistent storage
- **Checkout Flow**: Complete checkout process with form validation
- **Product Details**: Detailed product pages with images and descriptions
- **Search**: Real-time product search functionality
- **Categories**: Electronics, Fashion, Home & Garden, Sports & Outdoors
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository** (if applicable):
```bash
git clone [repository-url]
cd hoobody
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
hoobody/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── cart/         # Shopping cart page
│   │   ├── category/     # Category pages
│   │   ├── checkout/     # Checkout page
│   │   ├── product/      # Product detail pages
│   │   ├── products/     # All products page
│   │   ├── search/       # Search results page
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── ui/          # UI components (Button, Card, etc.)
│   │   ├── header.tsx   # Site header/navigation
│   │   ├── footer.tsx   # Site footer
│   │   └── product-card.tsx # Product card component
│   ├── data/            # Mock data
│   │   └── products.ts  # Product and category data
│   ├── lib/             # Utility functions
│   │   ├── cart-context.tsx # Shopping cart state management
│   │   └── utils.ts     # Helper functions
│   └── types/           # TypeScript type definitions
│       └── index.ts     # Shared types
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎯 Key Features for LiveKit Testing

This e-commerce platform is specifically designed to test LiveKit integration features:

### Customer Support Integration Points
- Product inquiry buttons (ready for video call integration)
- Live shopping assistance areas
- Real-time support chat placeholders
- Video demonstration zones on product pages

### Test Scenarios
1. **Product Consultation**: Initiate video calls from product pages
2. **Shopping Assistance**: Real-time help during browsing
3. **Checkout Support**: Video assistance during checkout
4. **Order Support**: Post-purchase video consultations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features Overview

### Homepage
- Hero section with call-to-action
- Featured products showcase
- Category browsing
- Service highlights

### Product Catalog
- Grid/list view toggle
- Sort by price, rating, name
- Filter by category
- Real-time search

### Shopping Cart
- Add/remove items
- Quantity adjustment
- Persistent storage (localStorage)
- Price calculations
- Free shipping threshold

### Checkout
- Contact information form
- Shipping address
- Payment details (mock)
- Order summary
- Order confirmation

## 🎨 Customization

### Adding Products
Edit `src/data/products.ts` to add or modify products:

```typescript
export const products: Product[] = [
  {
    id: 'unique-id',
    name: 'Product Name',
    description: 'Product description',
    price: 99.99,
    category: 'category-slug',
    image: 'image-url',
    stock: 10,
    featured: true,
    rating: 4.5,
    reviews: 100
  }
]
```

### Modifying Categories
Update categories in the same file:

```typescript
export const categories: Category[] = [
  {
    id: 'unique-id',
    name: 'Category Name',
    slug: 'category-slug',
    description: 'Category description',
    image: 'image-url'
  }
]
```

## 🔗 LiveKit Integration Guide

To integrate LiveKit for video calling features:

1. **Install LiveKit dependencies**:
```bash
npm install livekit-client livekit-server-sdk
```

2. **Add LiveKit components** in areas marked for integration:
- Product consultation buttons
- Customer support widgets
- Live shopping features

3. **Configure LiveKit settings**:
- Add environment variables for LiveKit server URL and API keys
- Set up authentication tokens
- Configure room settings

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   - Change the port: `npm run dev -- -p 3001`

2. **Module not found errors**:
   - Clear node_modules: `rm -rf node_modules`
   - Reinstall: `npm install`

3. **Build errors**:
   - Clear Next.js cache: `rm -rf .next`
   - Rebuild: `npm run build`

## 📄 License

This project is created for testing purposes and is provided as-is.

## 🤝 Support

For questions about LiveKit integration, refer to the [LiveKit documentation](https://docs.livekit.io/).

---

Built with ❤️ for testing LiveKit integration with cbtnuggets-crm project.
