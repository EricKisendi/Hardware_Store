// src/components/FeaturedProducts/FeaturedProducts.js

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Hammer', price: '$19.99', image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Power Drill', price: '$129.99', image: 'https://images.pexels.com/photos/4981773/pexels-photo-4981773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'Saw', price: '$49.99', image: 'https://images.pexels.com/photos/4206114/pexels-photo-4206114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-lg text-center">
          <img src={product.image} alt={product.name} className="h-40 mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
          <p className="text-blue-600 font-bold">{product.price}</p>
          <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">View Item</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
