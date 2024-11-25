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
    { name: 'Electrical', path: 'electrical' }
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-yellow-500">Products</button>
      {isOpen && (
        <div className="absolute top-full mt-2 bg-gray-800 text-white rounded shadow-lg p-4">
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
