import { useState, useEffect, useRef } from 'react';
import MenuLinks from './MenuLinks';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
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
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-md relative">
      <div className="text-2xl font-bold">HardwareStore</div>

      <div className="hidden md:flex space-x-6 items-center">
        <MenuLinks />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? 'X' : '≡'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuRef}>
          <HamburgerMenu onClose={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
