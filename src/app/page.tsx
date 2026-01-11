'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const HomePage = () => {
  // Mock carousel data
  const carouselSlides = [
    {
      id: 1,
      title: 'Authentic Gujarati Farsan',
      subtitle: 'Traditional recipes with premium ingredients',
      image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=1200&h=400&q=80',
    },
    {
      id: 2,
      title: 'Premium Quality Snacks',
      subtitle: 'Freshly prepared with natural ingredients',
      image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=1200&h=400&q=80',
    },
    {
      id: 3,
      title: 'Packaged for Freshness',
      subtitle: 'Sealed to maintain taste and crunch',
      image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=1200&h=400&q=80',
    },
  ];

  // Get best sellers (first 6 products)
  const bestSellers = products.slice(0, 6);

  // Get featured categories
  const categories = [
    { name: 'Chips', slug: 'product', image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80' },
    { name: 'Nuts', slug: 'product', image: 'https://images.unsplash.com/photo-1603569283847-aa6f0c79a3ad?auto=format&fit=crop&w=400&h=300&q=80' },
    { name: 'Savory Snacks', slug: 'product', image: 'https://images.unsplash.com/photo-1563729780190-5f7a64f0ae4b?auto=format&fit=crop&w=400&h=300&q=80' },
    { name: 'Sev', slug: 'product', image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=400&h=300&q=80' },
  ];

  // Simple carousel implementation
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-orange-600' : 'bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Popular Favorites</h2>
          <Link href="/product" className="flex items-center text-orange-600 hover:text-orange-700 font-medium">
            View All
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link 
                href={`/${category.slug}`}
                key={category.name}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.slice(6, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Authentic Traditional Recipes</h2>
          <p className="text-lg text-gray-600 mb-6">Experience the taste of authentic Gujarat with our traditional snacks</p>
          <Link href="/product" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
