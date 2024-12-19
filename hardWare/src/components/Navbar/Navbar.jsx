import { useState, useEffect, useRef } from 'react';
import MenuLinks from './MenuLinks';
import HamburgerMenu from './HamburgerMenu';
import useCart from '../../context/useCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="relative flex items-center justify-between bg-gray-900 text-white px-4 py-3 shadow-md w-full">
      {/* Logo Section */}
      <div className="text-xl font-bold flex-shrink-0">
        <Link to="/" className="hover:text-yellow-500">
          HardwareStore
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <MenuLinks />
        <Link to="/cart" className="relative hover:text-yellow-500">
          <span role="img" aria-label="Cart" className="text-xl">
            🛒
          </span>
          {cart?.items?.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2">
              {cart.items.length}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center md:hidden space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        <Link to="/cart" className="relative hover:text-yellow-500">
          <span role="img" aria-label="Cart" className="text-xl">
            🛒
          </span>
          {cart?.items?.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2">
              {cart.items.length}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-2 bg-gray-800 w-full max-w-xs rounded-md shadow-lg z-50 md:hidden overflow-visible"
        >
          <HamburgerMenu onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
