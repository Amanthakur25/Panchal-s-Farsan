'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import useCartStore from '@/stores/cartStore';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { getTotalItems } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#173f3d] py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-white text-[#173f3d] font-bold text-xl px-3 py-1 rounded-lg">
              PANCHAL'S FARSAN
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-yellow-300 font-medium">Home</Link>
            <Link href="/product" className="text-white hover:text-yellow-300 font-medium">Shop</Link>
            <Link href="/about" className="text-white hover:text-yellow-300 font-medium">About Us</Link>
            <Link href="/contact" className="text-white hover:text-yellow-300 font-medium">Contact Us</Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-6 hidden sm:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search for namkeen, snacks, farsan..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#173f3d]"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#173f3d]"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingBagIcon className="h-8 w-8 text-white hover:text-green-300" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            {/* Location Selector */}
            <div className="hidden md:block">
              <select className="bg-transparent border border-white text-white rounded px-2 py-1 text-sm focus:outline-none">
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Kolkata</option>
                <option>Bangalore</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;