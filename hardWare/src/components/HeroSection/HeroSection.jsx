// src/components/HeroSection/HeroSection.js
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-80 md:h-[500px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold">Quality Tools for Every Project</h1>
        <p className="mt-2 text-sm md:text-lg">Explore our wide selection of premium hardware and building materials</p>
        <Link to="/products" className="mt-4">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
