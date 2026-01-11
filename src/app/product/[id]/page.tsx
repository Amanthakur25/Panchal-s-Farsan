'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { StarIcon } from '@heroicons/react/24/solid';
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import useCartStore from '@/stores/cartStore';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCartStore();

  // Find the product based on the ID
  const product = products.find(p => p.id === id) || products[0]; // fallback to first product

  // Find related products
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    addItem(product, quantity);
  };

  // Calculate discounted price if applicable
  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-600">
        <span><a href="/" className="hover:text-[#173f3d]">Home</a></span>
        <span className="mx-2">/</span>
        <span><a href="/product" className="hover:text-[#173f3d]">Shop</a></span>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-96 w-full mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex space-x-2">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-16 h-16 object-cover border-2 border-orange-600 rounded cursor-pointer"
                onClick={() => setSelectedImage(0)}
              />
              {/* Additional images could be added here */}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
              <button className="text-gray-500 hover:text-red-500">
                <HeartIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm ml-2">{product.rating} ({product.stock} reviews)</span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-gray-800">₹{finalPrice}</span>
              {product.discount && (
                <span className="text-lg text-gray-500 line-through ml-2">₹{product.price}</span>
              )}
              {product.discount && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded ml-2">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Weight: {product.weight}</h3>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={addToCart}
                className="flex-1 bg-[#173f3d] hover:bg-[#132e2c] text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Add to Cart
              </button>
              <button className="bg-[#173f3d] hover:bg-[#132e2c] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                Buy Now
              </button>
            </div>

            {/* Product Info Tabs */}
            <div className="mb-6">
              <div className="border-b border-gray-200">
                <button className="pb-2 px-4 font-medium border-b-2 border-[#173f3d] text-[#173f3d]">
                  Description
                </button>
              </div>
            </div>

            <div className="prose max-w-none">
              <h4 className="font-bold text-gray-800 mb-2">Ingredients</h4>
              <ul className="list-disc pl-5 mb-4">
                {product.ingredients?.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>

              <h4 className="font-bold text-gray-800 mb-2">Nutritional Information</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Calories</p>
                  <p className="font-medium">{product.nutritionalInfo?.calories} kcal</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Protein</p>
                  <p className="font-medium">{product.nutritionalInfo?.protein}g</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Carbs</p>
                  <p className="font-medium">{product.nutritionalInfo?.carbs}g</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Fat</p>
                  <p className="font-medium">{product.nutritionalInfo?.fat}g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}

      {/* Customer Feedback */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Feedback</h2>
        <div className="space-y-4">
          <div className="pb-4">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < 5 ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm ml-2">Verified Customer</span>
            </div>
            <p className="text-gray-600">Authentic taste and great quality. Our family favorite snack!</p>
          </div>
          <div className="pb-4">
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm ml-2">Verified Customer</span>
            </div>
            <p className="text-gray-600">Fresh and delicious. Will definitely reorder.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;