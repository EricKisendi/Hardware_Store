import axios from 'axios';

const API_URL = 'https://hardware-backend-gqcn.onrender.com/api/auth';

export const signup = async (userData) => {
  return await axios.post(`${API_URL}/signup`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};
