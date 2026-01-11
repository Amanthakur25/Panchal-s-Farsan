# Haldiram's Clone - Next.js Frontend

This is a frontend clone of the Haldiram's website built with Next.js, TypeScript, and Tailwind CSS. The application replicates the frontend of the popular Indian snacks, namkeens, sweets, and related products online store.

## Features

- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop
- **Product Catalog**: Browse products across multiple categories (Namkeen, Sweets, Snacks, Ready to Eat, Gifts)
- **Shopping Cart**: Add/remove items, update quantities with persistent storage using localStorage
- **Product Details**: Detailed product pages with images, descriptions, ingredients, and nutritional info
- **Search Functionality**: Global search across all products
- **Filters & Sorting**: Filter by price, subcategory, and sort by various criteria
- **Checkout Process**: Simple form with WhatsApp order placement integration
- **SEO Optimized**: Proper meta tags and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Heroicons and React Feather
- **Type Safety**: TypeScript

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd haldiram-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── product/[id]/       # Dynamic product pages
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── search/            # Search results page
│   └── ...                # Other category pages
├── components/            # Reusable UI components
│   ├── common/            # Shared components (Header, Footer)
│   ├── ui/                # UI components (ProductCard, etc.)
│   └── modals/            # Modal components
├── data/                  # Product data and other static data
├── stores/                # Zustand stores (cart, etc.)
└── utils/                 # Utility functions (WhatsApp link generator, etc.)
```

## Key Functionalities

### Shopping Cart
- Uses Zustand with localStorage persistence
- Add, remove, and update quantities
- Real-time cart count updates in header

### WhatsApp Order Integration
- On checkout, generates a pre-filled WhatsApp message with order details
- Includes product names, quantities, total price, and delivery address
- Opens WhatsApp in a new tab for easy ordering

### Product Management
- 25+ sample products across different categories
- Placeholder images from Unsplash
- Rating system and discount display

### Search & Filtering
- Global search functionality
- Category-specific filtering
- Price range sliders
- Sorting options (price, popularity, rating)

## Pages Included

- **Home Page** (/): Hero carousel, best sellers, category browsing
- **Category Pages** (/namkeen, /sweets, /snacks, /ready-to-eat, /gifts): Filterable product listings
- **Product Detail Page** (/product/[id]): Detailed product information
- **Cart Page** (/cart): Shopping cart management
- **Checkout Page** (/checkout): Order form with WhatsApp integration
- **About Page** (/about): Company information
- **Contact Page** (/contact): Contact form and information
- **Search Page** (/search): Dynamic search results

## Custom Components

- **ProductCard**: Displays product information with add-to-cart functionality
- **Header**: Sticky navigation with search and cart icon
- **Footer**: Site footer with links and contact information
- **Carousel**: Home page banner carousel

## Dependencies

- `next`: Latest version with App Router
- `react`, `react-dom`: Core React libraries
- `tailwindcss`: Styling framework
- `zustand`: State management
- `@heroicons/react`: Icons
- `react-feather`: Additional icons

## Environment

This is a frontend-only application with no backend dependencies. All data is hardcoded for demonstration purposes.

## Contributing

Feel free to fork this repository and submit pull requests for improvements. The application is designed to be easily extensible with additional features and pages.

## License

This project is created for educational purposes. The original Haldiram's brand and content belong to their respective owners.