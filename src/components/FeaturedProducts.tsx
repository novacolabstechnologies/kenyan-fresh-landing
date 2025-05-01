
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Avocados",
    price: "KSh 120",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    price: "KSh 80",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcf8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    tag: "Local",
  },
  {
    id: 3,
    name: "Farm Fresh Eggs",
    price: "KSh 180",
    image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    tag: "Organic",
  },
  {
    id: 4,
    name: "Fresh Tilapia",
    price: "KSh 350",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    tag: "Fresh Catch",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular items, fresh and ready for your kitchen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-kenya-yellow text-kenya-brown text-xs font-bold px-2 py-1 rounded">
                    {product.tag}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-kenya-green font-bold mb-3">{product.price}</p>
                <Button className="w-full bg-kenya-green hover:bg-kenya-green/90 flex gap-2 items-center justify-center">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-kenya-green text-kenya-green hover:bg-kenya-green hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
