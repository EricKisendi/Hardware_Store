import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Preliminaries/Loader'; // Assuming you have a custom loader component

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />; // Replace with your loader
  }

  if (!product) {
    return <p className="text-red-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full max-h-96 object-cover mb-4 rounded"
      />
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-600 mb-4">Stock: {product.stock}</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
