import React from 'react';

const services = [
  {
    title: "Mobile App",
    description: "Creating intuitive, high-performance apps for iOS and Android, optimized for every device.",
    icon: "📱"
  },
  {
    title: "Web App",
    description: "Delivering fast, dynamic web apps that adapt seamlessly to your needs.",
    icon: "🌐"
  },
  {
    title: "Business Solutions",
    description: "Building custom ERP systems to automate workflows and scale your operations.",
    icon: "🏢"
  },
  {
    title: "UI Design",
    description: "Designing clean, engaging interfaces that reflect your brand and delight users.",
    icon: "🖌️"
  },
  {
    title: "UX Design",
    description: "Crafting smooth, user-centered experiences that make every interaction effortless.",
    icon: "🧭"
  },
  {
    title: "Cloud Deployment",
    description: "Ensuring reliable, scalable deployments with streamlined infrastructure and automation.",
    icon: "☁️"
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Offer</h2>
          <div className="h-1 w-20 bg-pink-500 dark:bg-pink-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
