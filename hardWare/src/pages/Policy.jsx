const Policy = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">🛠️ Our Policies</h1>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 flex items-center">
          🔒 Privacy Policy
        </h2>
        <ul className="list-disc space-y-4 text-gray-600 pl-5">
          <li><strong>What Information We Collect:</strong> Name, email, phone number, shipping address, and payment details.</li>
          <li><strong>How We Use Your Information:</strong> To process orders, provide support, and send promotional emails.</li>
          <li><strong>Data Protection:</strong> We use SSL encryption and secure servers to protect your data.</li>
          <li><strong>Sharing Information:</strong> We only share data with trusted third parties like shipping providers.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your experience.</li>
          <li><strong>Your Rights:</strong> You can access, correct, or delete your personal data.</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 flex items-center">
          📦 Shipping Policy
        </h2>
        <ul className="list-disc space-y-4 text-gray-600 pl-5">
          <li><strong>Shipping Locations:</strong> We ship within the United States and internationally.</li>
          <li><strong>Processing Time:</strong> Orders are processed within 1-2 business days.</li>
          <li><strong>Shipping Rates:</strong> Standard Shipping: $5.99 (free over $100), Express Shipping: $14.99.</li>
          <li><strong>Delivery Times:</strong> Standard: 5-7 days, Express: 2-3 days.</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 flex items-center">
          🔄 Return & Refund Policy
        </h2>
        <ul className="list-disc space-y-4 text-gray-600 pl-5">
          <li><strong>Eligibility:</strong> Returns accepted within 30 days if items are unused and in original packaging.</li>
          <li><strong>Return Process:</strong> Email us with your order number and reason for return.</li>
          <li><strong>Refund Method:</strong> Refunds are issued to the original payment method.</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 flex items-center">
          🛡️ Terms of Service
        </h2>
        <ul className="list-disc space-y-4 text-gray-600 pl-5">
          <li><strong>User Responsibilities:</strong> Provide accurate information and use the site lawfully.</li>
          <li><strong>Intellectual Property:</strong> All content belongs to <strong>[Your Store Name]</strong>.</li>
          <li><strong>Limitation of Liability:</strong> We are not liable for indirect damages.</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 flex items-center">
          🔒 Security Policy
        </h2>
        <ul className="list-disc space-y-4 text-gray-600 pl-5">
          <li><strong>Payment Security:</strong> All transactions are protected by SSL encryption.</li>
          <li><strong>Data Protection:</strong> Your data is securely stored.</li>
        </ul>
      </section>

      <section className="bg-blue-600 text-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-semibold mb-4">✉️ Contact Us</h2>
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:email@example.com" className="underline">email@example.com</a></p>
        <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="mb-2"><strong>Address:</strong> 123 Hardware St., Anytown, USA</p>
        <p><strong>Hours:</strong> Mon-Fri, 9 AM - 5 PM</p>
      </section>
    </div>
  );
};

export default Policy;
