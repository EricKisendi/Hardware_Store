// src/components/Footer/Footer.js

import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Logo & Tagline */}
          <div className="w-full md:w-1/3 space-y-3">
            <img
              src="https://t3.ftcdn.net/jpg/04/08/78/12/360_F_408781239_SioZtkPoH8lRZuL0MHG4oa2C2IyHJx0c.jpg"
              alt="Logo"
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-400">
              Your trusted partner for quality hardware and building materials.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 flex flex-col space-y-2">
            <h3 className="font-bold text-gray-200 mb-3">Quick Links</h3>
            <a href="/" className="text-sm hover:text-white">Home</a>
            <a href="/products" className="text-sm hover:text-white">Products</a>
            <a href="/about" className="text-sm hover:text-white">About Us</a>
            <a href="/policy" className="text-sm hover:text-white">Policies</a>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-2">
            <h3 className="font-bold text-gray-200 mb-3">Contact Us</h3>
            <p className="text-sm flex items-center">
              <FaPhone className="mr-2" /> +254 734 567 969
            </p>
            <p className="text-sm flex items-center">
              <FaMapMarkerAlt className="mr-2" /> 123 Hardware Lane, Industry City
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="text-gray-400 hover:text-white text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-gray-400 hover:text-white text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-gray-400 hover:text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Hardware Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
