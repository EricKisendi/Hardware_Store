import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Preliminaries/Loader';
import useCart from '../context/useCart'; // Import useCart for cart operations

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchCart } = useCart(); // Destructure fetchCart to refresh the cart after adding an item

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://hardware-backend-gqcn.onrender.com/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
      await axios.post(
        `http://localhost:5000/api/cart/add`,
        { productId: product._id, quantity: 1 }, // Send product ID and quantity
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart(); // Refresh the cart
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart. Please try again.');
    }
  };

  if (loading) {
    return <Loader />;
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
      <button
        onClick={handleAddToCart}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
