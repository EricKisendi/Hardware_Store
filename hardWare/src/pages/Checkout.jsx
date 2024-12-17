import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../context/useCart'; // Custom hook for cart context

const Checkout = () => {
  const { cart, fetchCart } = useCart();
  const navigate = useNavigate();

  // Contact details (update these accordingly)
  const [whatsAppNumber] = useState('254793504177'); // Shop owner's WhatsApp number
  const [email] = useState('owner@example.com');     // Shop owner's email

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Format order details into a custom message
  const formatOrderDetails = () => {
    if (!cart || !cart.items.length) return ''; // Avoid generating an empty message

    let message = '🛒 *Hello, I would like to order the following products*:\n\n';
    message += cart.items
      .map(
        (item, index) =>
          `${index + 1}. *${item.product.name}* - Qty: ${item.quantity} - Price: $${item.product.price.toFixed(2)}`
      )
      .join('\n');

    message += `\n\n💰 *Total*: $${cart.total.toFixed(2)}\n\n`;
    // message += 'Thank you for shopping with us! Please confirm payment and delivery details.';
    return message;
  };

  // Handle sending order details via WhatsApp
  const handleWhatsAppCheckout = () => {
    const message = encodeURIComponent(formatOrderDetails());
    if (!message) {
      alert('Your cart is empty.');
      return;
    }
    window.open(`https://wa.me/${whatsAppNumber}?text=${message}`, '_blank');
  };

  // Handle sending order details via Email
  const handleEmailCheckout = () => {
    const subject = encodeURIComponent('Order Inquiry');
    const body = encodeURIComponent(formatOrderDetails());
    if (!body) {
      alert('Your cart is empty.');
      return;
    }
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  if (!cart || cart.items.length === 0) {
    return <p className="text-center text-xl font-semibold">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Order Summary</h2>

      <ul className="divide-y divide-gray-300 mb-6">
        {cart.items.map((item) => (
          <li key={item.product._id} className="flex justify-between items-center py-4">
            <span className="text-lg">{item.product.name} (x{item.quantity})</span>
            <span className="text-lg font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold text-right mb-6">Total: ${cart.total.toFixed(2)}</h3>

      <div className="flex flex-col space-y-4">
        <button
          onClick={handleWhatsAppCheckout}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-center"
        >
          Send Order via WhatsApp
        </button>

        <button
          onClick={handleEmailCheckout}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center"
        >
          Send Order via Email
        </button>

        <button
          onClick={() => navigate('/cart')}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 text-center"
        >
          Back to Cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;
