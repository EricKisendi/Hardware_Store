import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const categories = [
    { name: 'Power Tools', path: 'power-tools' },
    { name: 'Hand Tools', path: 'hand-tools' },
    { name: 'Building Materials', path: 'building-materials' },
    { name: 'Safety Equipment', path: 'safety-equipment' },
    { name: 'Electrical', path: 'electrical' }
  ];

  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-50 p-6">
      <div className="flex flex-col space-y-4">
        {/* Main Navigation Links */}
        <Link to="/" className="text-white text-lg hover:text-yellow-500">Home</Link>
        
        {/* Products Section */}
        <div>
          <button className="text-white text-lg hover:text-yellow-500">Products</button>
          <div className="flex flex-col pl-4 mt-2">
            <Link to="/products" className="text-white py-1 hover:text-yellow-500">All Products</Link>
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.path}`}
                className="text-white py-1 hover:text-yellow-500"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Other Links */}
        <Link to="/about" className="text-white text-lg hover:text-yellow-500">About</Link>
        <Link to="/policy" className="text-white text-lg hover:text-yellow-500">Policy</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;