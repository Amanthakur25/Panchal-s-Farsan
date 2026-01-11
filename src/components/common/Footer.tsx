import Link from 'next/link';
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { 
  Facebook as FacebookIcon, 
  Instagram as InstagramIcon, 
  Twitter as TwitterIcon 
} from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#173f3d]">PANCHAL'S FARSAN</h3>
            <p className="text-gray-300 mb-4">
              Authentic Indian namkeen and snacks since 1937. Bringing traditional flavors to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500">
                <TwitterIcon size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-orange-500">Home</Link></li>
              <li><Link href="/product" className="text-gray-300 hover:text-orange-500">Shop</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-orange-500">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#173f3d]">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/product" className="text-gray-300 hover:text-[#173f3d]">All Products</Link></li>
              <li><Link href="/product" className="text-gray-300 hover:text-[#173f3d]">Chips</Link></li>
              <li><Link href="/product" className="text-gray-300 hover:text-[#173f3d]">Nuts</Link></li>
              <li><Link href="/product" className="text-gray-300 hover:text-[#173f3d]">Savory Snacks</Link></li>
              <li><Link href="/product" className="text-gray-300 hover:text-[#173f3d]">Sev</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="text-orange-500 mt-1 mr-2 w-5 h-5" />
                <span className="text-gray-300">+91 94073 50770</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="text-orange-500 mt-1 mr-2 w-5 h-5" />
                <span className="text-gray-300">panchalsfarsan229@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="text-orange-500 mt-1 mr-2 w-5 h-5" />
                <span className="text-gray-300">123, Market Street, Ahmedabad, Gujarat - 380001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Panchal's Farsan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;