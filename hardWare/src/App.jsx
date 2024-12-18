import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import CategoryPage from './pages/CategoryPages.jsx';
import ProductPage from './pages/ProductPage.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import UserLogin from './pages/UserLogin.jsx';
import UserSignup from './pages/UserSignup.jsx';
import Cart from './components/Cart.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { CartProvider } from './context/CartContext';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import CheckoutPage from './pages/CheckoutPage.jsx';
import Checkout from './pages/Checkout';
import Policy from './pages/Policy.jsx'

const App = () => {
  return (
    <Router> {/* Router wraps the entire app */}
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path='/policy' element={<Policy />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout1" element={<Checkout />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
