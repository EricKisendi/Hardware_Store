import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import axios from 'axios'; // To send payment details

const CheckoutPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // Send payment details to the backend (you can later integrate with Stripe or another provider)
      const paymentData = {
        cardNumber: paymentDetails.cardNumber,
        expiryDate: paymentDetails.expiryDate,
        cvv: paymentDetails.cvv,
      };

      const response = await axios.post('http://localhost:5000/api/payment', paymentData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Redirect to the order confirmation page
      console.log('Payment Success:', response.data);
      navigate('/order-confirmation'); // Redirect to a success page after successful payment
    } catch (error) {
      console.error('Payment Error:', error.response?.data?.message || error.message);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Payment Information</h2>

      <form onSubmit={handlePayment} className="space-y-6">
        <div>
          <label htmlFor="cardNumber" className="block text-lg font-medium">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="expiryDate" className="block text-lg font-medium">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="cvv" className="block text-lg font-medium">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
