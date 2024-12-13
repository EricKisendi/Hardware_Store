import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import PropTypes from 'prop-types'; // Import PropTypes

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // While authentication status is loading, you can show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // Redirect to the login page if the user is not authenticated
  return user ? children : <Navigate to="/login" replace />;
};

// PropTypes validation for the 'children' prop
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // 'children' should be a valid React node
};

export default PrivateRoute;