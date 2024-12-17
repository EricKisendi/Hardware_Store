import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the categories dynamically
  const categories = [
    { name: 'Power Tools', path: 'power-tools' },
    { name: 'Hand Tools', path: 'hand-tools' },
    { name: 'Building Materials', path: 'building-materials' },
    { name: 'Safety Equipment', path: 'safety-equipment' },
    { name: 'Electrical', path: 'electrical' },
    { name: 'Plumbing', path: 'plumbing' },
    { name: 'Carpentry', path: 'carpentry' },
    { name: 'Paint & Supplies', path: 'paints' },
    { name: 'Steel', path: 'steel' },
    { name: 'Glues', path: 'glues' },
    { name: 'Gas', path: 'gas' },
    { name: 'Curtains', path: 'curtains' },
    { name: 'Cement', path: 'cement' },
    { name: 'Home Equipment', path: 'home-equipment' },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-yellow-500">Products</button>
      {isOpen && (
        <div className="absolute top-full mt-2 z-50 bg-gray-800 text-white rounded shadow-lg w-48 max-h-64 overflow-y-auto">
          <Link
            to="/products"
            className="block px-4 py-2 hover:bg-gray-700 font-semibold border-b border-gray-700"
          >
            All Products
          </Link>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.path}`}
              className="block px-4 py-2 hover:bg-gray-700"
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
