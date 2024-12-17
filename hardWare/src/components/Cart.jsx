import { useEffect } from 'react';
import useCart from '../context/useCart'; // Custom hook for cart context
import { removeFromCart, updateCart } from '../api/cartApi';
import { useNavigate } from 'react-router-dom'; // For redirection
import axios from 'axios'; // To make the checkout request
// import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, fetchCart, loading } = useCart();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Remove an item from the cart
  const handleRemove = async (productId) => {
    await removeFromCart(productId, token);
    fetchCart();
  };

  // Update the quantity of an item in the cart
  const handleUpdateQuantity = async (productId, quantity) => {
    await updateCart(productId, quantity, token);
    fetchCart();
  };

  // Handle the checkout process
  const handleCheckout = async () => {
    try {
      // Prepare the data for the checkout request
      const orderData = {
        items: cart.items.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
        total: cart.total,
        address: '123 Main St, Anytown, USA', // Replace this with a real address input if needed
      };

      // Send POST request to the backend checkout endpoint
      const response = await axios.post('http://localhost:5000/api/orders', orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Handle success (redirect or show success message)
      console.log('Order Success:', response.data);
      navigate('/checkout1'); // Redirect to a success page
    } catch (error) {
      console.error('Checkout Error:', error.response?.data?.message || error.message);
      alert('Checkout failed. Please try again.');
    }
  };

  if (loading) return <p className="text-center text-xl font-semibold">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Cart</h2>

      {cart && cart.items.length > 0 ? (
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item.product._id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.imageUrl || 'default-image.jpg'}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-gray-500">Price: ${item.product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={() => handleUpdateQuantity(item.product._id, item.quantity - 1)}
                  >
                    -
                  </button>
                </div>
                <button
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                  onClick={() => handleRemove(item.product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">Your cart is empty.</p>
      )}

      {cart && cart.items.length > 0 && (
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-xl font-semibold">Total: ${cart?.total.toFixed(2)}</h3>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 focus:outline-none"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}

      {/* This is another approach button to make facilitae payment by connecting user to the owner via whatsapp and email */}
      {/* <Link to="/checkout1">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
          Proceed to Checkout
        </button>
      </Link> */}
    </div>
  );
};

export default Cart;
