// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'; // Ensure paths are correct
import Footer from './components/Footer/Footer.jsx'; 
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import CategoryPage from './pages/CategoryPages.jsx';
import ProductPage from './pages/ProductPage'; // Import the component
// import Policies from './pages/Policies/Policies.jsx';
// import NotFound from './pages/NotFound/NotFound.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* Dynamic route */}
        {/* <Route path="/policies" element={<Policies />} /> */}
        {/* <Route path="*" element={<NotFound />} /> 404 Page */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
