import { useAuth } from '../../context/useAuth'; // Import useAuth to access authentication context
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom'; // Correct import for 'Link'

const MenuLinks = () => {
  const { user, logout } = useAuth(); // Destructure user and logout from the AuthContext

  return (
    <>
      <Link to="/" className="hover:text-yellow-500">Home</Link>
      <Dropdown />
      <Link to="/about" className="hover:text-yellow-500">About</Link>
      <Link to="/policy" className="hover:text-yellow-500">Policy</Link>

      {user ? (
        <>
          <Link to="/dashboard" className="hover:text-yellow-500">Dashboard</Link>
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
