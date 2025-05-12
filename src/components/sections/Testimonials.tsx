import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Jerico is one of the most reliable and skilled developers I've worked with. He consistently delivers clean, scalable code and approaches every challenge with focus and professionalism. Calm under pressure and highly collaborative, Jerico is a valuable asset to any team.",
    name: "Ken Harvey Oresca",
    position: "Software Developer at Taters",
    image: "ken.jfif"
  },
  {
    quote: "I had the pleasure of working with Jerico with ERP projects, and I was impressed by his technical skills, reliability, and collaborative attitude. He's indeed a valuable asset to the team.",
    name: "Jelyn Guibong",
    position: "Product Manager at AWB",
    image: "jelyn.jfif"
  },
  {
    quote: "Good team player, can start with minimal supervision. He know what he's doing.",
    name: "Charles Kurt",
    position: "Mobile App Developer at AWB",
    image: "charles.jfif"
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Recommendations</h2>
          <div className="h-1 w-20 bg-pink-500 dark:bg-pink-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial card */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
              <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 text-pink-500/20 dark:text-pink-400/20">
                <Quote size={80} />
              </div>
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Star rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-pink-500 dark:text-pink-400">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </blockquote>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white dark:bg-gray-900 shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-pink-500 dark:bg-pink-400' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;