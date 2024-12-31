import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link
import Loader from "../Preliminaries/Loader"; // Adjust the path to your Loader component

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch all products and filter featured ones
  const fetchProducts = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(
        "https://hardware-backend-gqcn.onrender.com/api/products"
      );
      console.log(response.data); // Inspect the full response
      const allProducts = response.data.products || []; // Default to empty array if no products found
      const featured = allProducts.filter((product) => product.isFeatured === true); // Ensure isFeatured is explicitly true
      setFeaturedProducts(featured);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader /> {/* Your custom loader */}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Link
            key={product._id} // Use product _id as key for each product card
            to={`/product/${product._id}`} // Navigate to the product page using its ID
            className="bg-white p-4 shadow-md rounded-lg text-center hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-40 mx-auto rounded"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
