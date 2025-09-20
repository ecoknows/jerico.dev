
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Worked with Eco on multiple projects. I can say he's an excellent and hardworking developer! 👍",
    name: "Eusebio Yu",
    position: "Senior Solutions Engineer",
    image: "sebs.jpeg"
  },
  {
    quote: "Good team player, can start with minimal supervision. He know what he's doing.",
    name: "Charles Kurt",
    position: "Flutter Developer",
    image: "charles.jfif"
  },
  {
    quote: "Been with Eco on projects and he showed his software knowledge well while ensuring quality on his code.",
    name: "Keen Renzo Ballon",
    position: "Cloud Engineer",
    image: "keen.jpeg"
  },
  {
    quote: "Having worked with Eco on a major project, I can vouch on his skills and reliability as a developer. He was always delivering high-quality codes, and never hesitated to help others troubleshoot, improve code structures, and brainstorm solutions.",
    name: "Matthew Dalagan",
    position: "Application Developer",
    image: "matt.jfif"
  },
  {
    quote: "I had the pleasure of working with Jerico with ERP projects, and I was impressed by his technical skills, reliability, and collaborative attitude. He's indeed a valuable asset to the team.",
    name: "Jelyn Guibong",
    position: "Product Manager",
    image: "jelyn.jfif"
  },
  {
    quote: "Jerico is one of the most reliable and skilled developers I've worked with. He consistently delivers clean, scalable code and approaches every challenge with focus and professionalism. Calm under pressure and highly collaborative, Jerico is a valuable asset to any team.",
    name: "Ken Harvey Oresca",
    position: "Software Developer",
    image: "ken.jfif"
  },
  {
    quote: "I had the pleasure of working with Jerico on ERP projects—he’s a strong team player and a great collaborator.",
    name: "Girija Subramaniyan",
    position: "Odoo Developer",
    image: "girija.jpeg"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="h-1 w-20 bg-pink-500 dark:bg-pink-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative"
            >
              <div className="absolute top-[-15px] left-[-15px] text-pink-500/20 dark:text-pink-400/20">
                <Quote size={50} />
              </div>

              <blockquote className="relative z-10 flex flex-col h-full pt-2">
                {/* This wrapper grows and centers the quote vertically */}
                <div className="flex-grow flex items-center">
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4 w-full">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Stars and author info stay at the bottom */}
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
                    ))}
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-md">{testimonial.name}</p>
                      <p className="text-pink-500 dark:text-pink-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </blockquote>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;