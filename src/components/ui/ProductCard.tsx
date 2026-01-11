import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Product } from '@/data/products';
import useCartStore from '@/stores/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCartStore();
  
  const addToCart = () => {
    addItem(product, 1);
  };

  // Calculate discounted price if applicable
  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-800 mb-1 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 truncate">{product.weight}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
              />
            ))}
          </div>
          <span className="text-gray-600 text-xs ml-1">{product.rating}</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-lg font-bold text-gray-800">₹{finalPrice}</span>
              {product.discount && (
                <span className="text-sm text-gray-500 line-through ml-2">₹{product.price}</span>
              )}
            </div>
          </div>
          
          <button
            onClick={addToCart}
            className="w-full bg-[#173f3d] hover:bg-[#132e2c] text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;