
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Carrot, LeafyGreen, Milk, Fish } from "lucide-react";

const categories = [
  {
    name: "Fresh Fruits",
    description: "Locally grown, seasonal fruits",
    icon: Apple,
    color: "bg-red-100 text-red-500",
  },
  {
    name: "Vegetables",
    description: "Farm-fresh veggies daily",
    icon: Carrot,
    color: "bg-orange-100 text-orange-500",
  },
  {
    name: "Greens",
    description: "Leafy greens and herbs",
    icon: LeafyGreen,
    color: "bg-green-100 text-green-500",
  },
  {
    name: "Dairy & Eggs",
    description: "From local farms to your table",
    icon: Milk,
    color: "bg-blue-100 text-blue-500",
  },
  {
    name: "Fresh Fish",
    description: "Caught from Kenyan waters",
    icon: Fish,
    color: "bg-cyan-100 text-cyan-500",
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Fresh Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on offering the freshest, locally sourced products 
            across these categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
