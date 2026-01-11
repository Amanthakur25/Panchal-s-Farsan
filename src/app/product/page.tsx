'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { FunnelIcon } from '@heroicons/react/24/outline';

const ProductPage = () => {
  // Filter all products as we want to display everything
  const productItems = products;

  // State for filters
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>('all');

  // Get unique subcategories for filtering
  const subCategories = ['all', ...new Set(productItems.map(p => p.subCategory).filter(Boolean) as string[])];

  // Apply filters
  let filteredProducts = [...productItems];

  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Apply subcategory filter
  if (subCategoryFilter !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.subCategory?.toLowerCase() === subCategoryFilter.toLowerCase()
    );
  }

  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Sort by popularity (could be based on sales, ratings, etc.)
      filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        <span><a href="/" className="hover:text-[#173f3d]">Home</a></span>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">Products</span>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 mb-6 md:mb-0 md:mr-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <FunnelIcon className="h-5 w-5 mr-2 text-[#173f3d]" />
              Filters
            </h3>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Subcategory Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Subcategory</h4>
              <div className="space-y-2">
                {subCategories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={`subcat-${category}`}
                      name="subcategory"
                      checked={subCategoryFilter === category}
                      onChange={() => setSubCategoryFilter(category)}
                      className="mr-2"
                    />
                    <label htmlFor={`subcat-${category}`} className="text-sm">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
            
            {/* Sorting Options */}
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#173f3d]"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-[#173f3d] text-white">1</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">2</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">3</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">Next</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;