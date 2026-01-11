const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About Us</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in Gujarat, Panchal's Farsan has been delighting customers with authentic traditional farsan for generations.
              Our commitment to quality and taste has made us one of the most trusted names in traditional Indian snacks.
            </p>
            <p className="text-gray-600 mb-4">
              We specialize in preparing traditional Gujarati snacks using time-honored recipes and premium ingredients,
              ensuring that every bite delivers the authentic flavors of Gujarat.
            </p>
            <p className="text-gray-600">
              Our products are carefully crafted to maintain the traditional taste while ensuring freshness and quality
              that our customers have come to expect.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To preserve and promote the rich culinary heritage of Gujarat by offering the finest quality 
            namkeen and snacks made with traditional recipes and premium ingredients.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To be the most trusted brand for authentic Indian flavors, expanding our reach globally while 
            maintaining our commitment to quality and tradition.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Our Values</h3>
          <p className="text-gray-600">
            Quality, authenticity, and customer satisfaction remain at the heart of everything we do, 
            ensuring each product meets our high standards.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Chips', 'Nuts', 'Sev', 'Traditional Farsan'].map((category, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
              <h3 className="font-medium text-gray-800">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;