'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import useCartStore from '@/stores/cartStore';
import { CartItem } from '@/stores/types';

const CartPage = () => {
  const { items, updateQuantity, removeItem, getSubtotal, getTax, getTotal } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/" className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {items.map((item: CartItem) => (
              <div key={item.product.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                <div className="w-24 h-24 flex-shrink-0 mr-6">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{item.product.name}</h3>
                  <p className="text-gray-600 text-sm">{item.product.weight}</p>
                  
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                    
                    <button 
                      onClick={() => handleRemoveItem(item.product.id)}
                      className="ml-4 text-red-500 hover:text-red-700 flex items-center"
                    >
                      <TrashIcon className="h-5 w-5 mr-1" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-gray-800">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm line-through">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{getSubtotal().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">₹{getTax().toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{getTotal().toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout"
              className="w-full bg-[#173f3d] hover:bg-[#132e2c] text-white py-3 px-6 rounded-lg font-medium transition-colors text-center block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;