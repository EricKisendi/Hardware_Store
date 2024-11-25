// src/components/About.jsx

const About = () => {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-gray-800 shadow-lg rounded-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-10 text-gray-700 tracking-wide animate-fade-in">
                Why Choose <span className="text-yellow-500">[Your Store Name]</span>
            </h1>
            
            <section className="mb-8 lg:mb-12 text-center animate-slide-up">
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-gray-600">
                    At <span className="text-yellow-500 font-semibold">[Your Store Name]</span>, we believe in providing tools and hardware that make every project 
                    a success. With years of experience, we understand the needs of professionals and DIY enthusiasts alike.
                </p>
            </section>
            
            <section className="mb-8 lg:mb-12 px-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 lg:mb-8 text-gray-700">
                    What Sets Us Apart
                </h2>
                <ul className="space-y-6">
                    <li className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <span className="font-semibold text-yellow-500">High-Quality Products</span> - We carefully select products from trusted brands, ensuring reliability and durability for every project.
                    </li>
                    <li className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <span className="font-semibold text-yellow-500">Competitive Pricing</span> - We offer top-quality tools at prices that keep your budget intact.
                    </li>
                    <li className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <span className="font-semibold text-yellow-500">Expert Guidance</span> - Our knowledgeable team is here to help you choose the right products for your needs.
                    </li>
                    <li className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <span className="font-semibold text-yellow-500">Customer Satisfaction</span> - From purchase to support, we prioritize building lasting relationships and ensuring a smooth experience.
                    </li>
                </ul>
            </section>
            
            <section className="p-6 sm:p-8 bg-gray-100 rounded-lg shadow-md text-center transition transform duration-300 hover:scale-105 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 lg:mb-6">
                    Our Promise to You
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
                    We’re committed to quality, value, and integrity. When you shop with <span className="text-yellow-500 font-semibold">[Your Store Name]</span>, you’re not just buying 
                    tools – you’re investing in your projects with confidence. Let us be your trusted partner in achieving remarkable results.
                </p>
            </section>
        </div>
    );
};

export default About;
