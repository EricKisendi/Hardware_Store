import { useEffect } from 'react';
import useCart from '../context/useCart'; // Correct default import
import { removeFromCart, updateCart } from '../api/cartApi';

const Cart = () => {
  const { cart, fetchCart, loading } = useCart();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleRemove = async (productId) => {
    await removeFromCart(productId, token);
    fetchCart();
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    await updateCart(productId, quantity, token);
    fetchCart();
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
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 focus:outline-none">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
