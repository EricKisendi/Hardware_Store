// src/components/PromoBanner/PromoBanner.js

const PromoBanner = () => {
  return (
    <div className="relative bg-yellow-200 p-6 md:p-12 rounded-lg shadow-md text-center">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800">Exclusive Offer: 20% Off All Power Tools</h3>
      <p className="mt-2 text-gray-700">For a limited time only, save on our top-rated power tools.</p>
      <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded">Shop Sale</button>
    </div>
  );
};

export default PromoBanner;
