import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Preliminaries/Loader'

const CategoryPage = () => {
  const { category } = useParams(); // Dynamically get the category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Show a loading state
      try {
        const response = await axios.get(`http://localhost:5000/api/products/category/${encodeURIComponent(category)}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]); // Re-run when the category changes

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 capitalize">{category} Products</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
        {/* Use the custom loader */}
        <Loader />
      </div>
      ) : products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card p-4 bg-white shadow rounded hover:shadow-lg transition">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-sm text-gray-700">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
