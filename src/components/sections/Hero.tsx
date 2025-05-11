import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              <span className="text-gray-900 dark:text-white">Empowering your </span>
              <span className="text-pink-500 dark:text-pink-400">vision</span>
              <span className="text-gray-900 dark:text-white"> through thoughtful</span>
              <span className="text-pink-500 dark:text-pink-400"> development</span>
            </h1>
            <div className="flex flex-wrap gap-4 animate-fade-in-delayed-extra">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-colors duration-300 shadow-md"
              >
                View My Work
              </a>
              <a 
                href="/resume.pdf"
                download="Jerico-Villaraza-Resume.pdf"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-pink-500 dark:hover:border-pink-400 rounded-md transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl animate-float">
              <img 
                src="/me.jpg" 
                alt="Jerico Villaraza" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
