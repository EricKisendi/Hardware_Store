import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios";
import Loader from "../components/Preliminaries/Loader"; // Adjust the path to your Loader component

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const limit = 10; // Number of products per page

  // Fetch products from the backend
  const fetchProducts = async (page) => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(`https://hardware-backend-gqcn.onrender.com/api/products?page=${page}&limit=${limit}`);
      const { products, totalPages } = response.data;
      setProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch data when page changes
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader /> {/* Your custom loader */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 shadow">
              <Link to={`/product/${product._id}`}> {/* Link to product page */}
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-sm text-gray-700">{product.description}</p>
                <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              </Link>
              {/* <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add to Cart
              </button> */}
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
