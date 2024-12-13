import { useContext } from 'react';
import CartContext from './CartContext'; // Import CartContext correctly

const useCart = () => useContext(CartContext);

export default useCart; // Default export
