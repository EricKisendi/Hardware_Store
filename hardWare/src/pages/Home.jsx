// src/pages/Home.js

import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Categories from '../components/Categories/Categories';
import PromoBanner from '../components/PromoBanner/PromoBanner';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="my-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Categories Section */}
      <section className="my-12 bg-gray-100 py-8 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Shop by Category</h2>
        <Categories />
      </section>

      {/* Promo Banner */}
      <section className="my-12 px-6 md:px-12 lg:px-24">
        <PromoBanner />
      </section>
    </div>
  );
};

export default Home;
