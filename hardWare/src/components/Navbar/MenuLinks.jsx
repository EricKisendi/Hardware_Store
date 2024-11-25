import Dropdown from './Dropdown';
import { Link } from 'react-router-dom'; // Capitalize 'Link' for correct import

const MenuLinks = () => (
  <>
    <Link to="/" className="hover:text-yellow-500">Home</Link>
    <Dropdown />
    <Link to="/about" className="hover:text-yellow-500">About</Link>
    <Link to="/policy" className="hover:text-yellow-500">Policy</Link>
  </>
);

export default MenuLinks;
