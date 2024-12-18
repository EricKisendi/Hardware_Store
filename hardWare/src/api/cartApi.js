import axios from 'axios';

// Base URL for API
const API_URL = 'https://hardware-backend-gqcn.onrender.com/api/cart';

// Add product to cart
export const addToCart = async (productId, quantity, token) => {
  return await axios.post(
    `${API_URL}/add`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// Get cart
export const getCart = async (token) => {
  return await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
};

// Update cart
export const updateCart = async (productId, quantity, token) => {
  return await axios.put(
    `${API_URL}/update`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// Remove product from cart
export const removeFromCart = async (productId, token) => {
  return await axios.delete(`${API_URL}/remove`, {
    headers: { Authorization: `Bearer ${token}` },
    data: { productId },
  });
};