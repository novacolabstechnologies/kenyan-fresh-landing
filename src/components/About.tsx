
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-kenya-beige absolute top-0 left-0 w-full h-full -rotate-3 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
              alt="Local farm in Kenya" 
              className="relative z-10 rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2015, Karibu Market was born from a simple idea: to connect 
                local Kenyan farmers directly with consumers, ensuring the freshest produce 
                while supporting local communities.
              </p>
              
              <p>
                What started as a small stall in Nairobi has grown into a beloved 
                community grocery store, serving thousands of customers with the finest 
                locally-sourced products.
              </p>
              
              <p>
                We work directly with over 50 farms across Kenya, ensuring fair prices 
                for farmers and affordable quality for our customers. Our commitment to 
                sustainability means we prioritize organic farming practices and minimize 
                food waste.
              </p>
              
              <div className="pt-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-kenya-beige p-4 rounded-lg">
                  <p className="text-3xl font-bold text-kenya-green">50+</p>
                  <p className="text-sm">Local Farmers</p>
                </div>
                <div className="bg-kenya-beige p-4 rounded-lg">
                  <p className="text-3xl font-bold text-kenya-green">7</p>
                  <p className="text-sm">Years of Service</p>
                </div>
                <div className="bg-kenya-beige p-4 rounded-lg">
                  <p className="text-3xl font-bold text-kenya-green">1000+</p>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
