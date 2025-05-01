
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Jane Wambui",
    role: "Regular Customer",
    content: "I've been shopping at Karibu Market for the last 2 years. The produce is always fresh and the staff is incredibly helpful. I love supporting local farmers!",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "John Kamau",
    role: "Chef at Savanna Restaurant",
    content: "As a professional chef, quality produce is essential. Karibu Market delivers the freshest ingredients that make our dishes stand out. Their selection of local herbs is unmatched.",
    image: "https://i.pravatar.cc/150?img=59",
  },
  {
    id: 3,
    name: "Sarah Odhiambo",
    role: "Health Enthusiast",
    content: "Finding organic, pesticide-free vegetables has always been a challenge until I discovered Karibu Market. My family has noticed the difference in taste and quality!",
    image: "https://i.pravatar.cc/150?img=44",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-kenya-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <svg 
                    className="h-8 w-8 text-kenya-green opacity-50" 
                    fill="currentColor" 
                    viewBox="0 0 32 32"
                  >
                    <path d="M14.066 0c7.732 0 14 6.268 14 14s-6.268 14-14 14c-2.598 0-5.023-0.708-7.104-1.943-2.756 1.184-6.224 2.308-7.661 2.625l-0.655 0.015c-0.478-0.072-0.645-0.644-0.285-0.978 0.574-0.532 1.306-1.213 1.841-1.718-1.552-2.504-2.442-5.449-2.442-8.601 0-9.15 7.42-16.57 16.57-16.57z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
