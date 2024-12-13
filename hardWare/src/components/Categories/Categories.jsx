// src/components/Categories/Categories.js
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Power Tools', path: 'power-tools', image: 'https://images.pexels.com/photos/162534/grinder-hitachi-power-tool-flexible-162534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Hand Tools', path: 'hand-tools',image: 'https://images.pexels.com/photos/3930093/pexels-photo-3930093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Building Materials', path: 'building-materials', image: 'https://images.pexels.com/photos/3089685/pexels-photo-3089685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Safety Equipment', path: 'safety-equipment', image: 'https://images.pexels.com/photos/744922/pexels-photo-744922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(category => (
        <div key={category.id} className="text-center">
          <img src={category.image} alt={category.name} className="h-24 mx-auto rounded-lg" />
          <h4 className="mt-2 text-gray-800 font-semibold">{category.name}</h4>
          <Link to={`/category/${category.path.toLowerCase()}`} className="text-blue-500 hover:underline mt-1 block">
            Explore
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
