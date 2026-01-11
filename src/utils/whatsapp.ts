import { CartItem } from '@/stores/types';

export const generateWhatsAppOrderLink = (items: CartItem[], total: number, address: string, name: string, phone: string) => {
  const orderDetails = items.map(item => 
    `${item.product.name} (x${item.quantity}) - ₹${(item.product.price * item.quantity).toFixed(2)}`
  ).join(', ');

  const message = `Order Details: ${orderDetails}, Total: ₹${total.toFixed(2)}, Delivery to: ${address}, Customer: ${name}, Phone: ${phone}`;
  
  // Using a placeholder phone number - in a real app, this would be the actual business number
  const phoneNumber = '919876543210';
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};