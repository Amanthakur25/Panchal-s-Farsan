'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { Suspense } from 'react';

const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      // Simulate search with a small delay
      setTimeout(() => {
        const results = products.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.subCategory?.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setIsLoading(false);
      }, 300);
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Search Results for "{query}"
      </h1>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#173f3d]"></div>
          <p className="mt-4 text-gray-600">Searching for products...</p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            Found {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} for "{query}"
          </p>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">
                We couldn't find any products matching "{query}". Please try a different search term.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Search Results
        </h1>
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#173f3d]"></div>
          <p className="mt-4 text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;