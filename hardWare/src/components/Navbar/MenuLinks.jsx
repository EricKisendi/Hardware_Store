import { useAuth } from '../../context/useAuth'; // Import useAuth to access authentication context
import useCart from '../../context/useCart'; // Import useCart to access cart context
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom'; // Correct import for 'Link'

const MenuLinks = () => {
  const { user, logout } = useAuth(); // Destructure user and logout from the AuthContext
  const { cart } = useCart(); // Destructure cart from the CartContext

  return (
    <>
      <Link to="/" className="hover:text-yellow-500">Home</Link>
      <Dropdown />
      <Link to="/about" className="hover:text-yellow-500">About</Link>
      <Link to="/policy" className="hover:text-yellow-500">Policy</Link>

      <Link to="/cart" className="relative hover:text-yellow-500 ml-4">
        🛒 Cart
        {cart?.items?.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2">
            {cart.items.length}
          </span>
        )}
      </Link>

      {user ? (
        <>
          <Link to="/dashboard" className="hover:text-yellow-500 ml-4">Dashboard</Link>
          <button onClick={logout} className="hover:text-red-500 ml-4">Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="hover:text-yellow-500 ml-4">Login</Link>
          <Link to="/signup" className="hover:text-yellow-500 ml-4">Signup</Link>
        </>
      )}
    </>
  );
};

export default MenuLinks;
