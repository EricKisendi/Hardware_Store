import axios from 'axios';

export const createOrder = async (orderData, token) => {
  const response = await axios.post('http://localhost:5000/api/orders', orderData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
