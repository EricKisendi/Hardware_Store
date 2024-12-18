import axios from 'axios';

export const createOrder = async (orderData, token) => {
  const response = await axios.post('https://hardware-backend-gqcn.onrender.com/api/orders', orderData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
