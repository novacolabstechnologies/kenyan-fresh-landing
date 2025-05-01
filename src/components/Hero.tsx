
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-kenya-beige py-20 overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Fresh From <span className="text-kenya-green">Kenyan</span> Farms
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Experience the taste of locally sourced, fresh produce delivered straight 
            to your table. Supporting local farmers and sustainable practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary">
              Shop Now
            </Button>
            <Button variant="outline" className="border-kenya-green text-kenya-green hover:bg-kenya-green hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-kenya-yellow rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-kenya-terracotta rounded-full opacity-40"></div>
            <img
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Fresh fruits and vegetables"
              className="rounded-lg shadow-xl max-h-96 object-cover z-10 relative"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
