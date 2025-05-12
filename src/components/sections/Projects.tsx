import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'My Map Diary',
    description: "An interactive map diary to pin photos, add titles, and relive your adventures anytime, anywhere.",
    technologies: ['Swift', 'SwiftUI', 'MapKit', 'SwiftData',],
    image: 'my-map-diary.jfif',
    github: 'https://github.com/Eco-Apple/my-map-diary',
    live: 'https://apps.apple.com/us/app/my-map-diary/id6738887653',
    category: 'iOS'
  },
  {
    title: 'Piggy',
    description: "A simple budget tracker to manage income, expenses, and savings without the clutter—perfect for staying organized.",
    technologies: ['Swift', 'SwiftUI', 'SwiftData'],
    image: 'piggy.jfif',
    github: 'https://github.com/Eco-Apple/piggy',
    live: 'https://apps.apple.com/us/app/piggy-simple-budget-tracker/id6736941981',
    category: 'iOS'
  },
  {
    title: 'Do it now!',
    description: 'A minimalist task timer to track work, stay accountable, and build momentum toward your goals.',
    technologies: ['Swift', 'SwiftUI', 'SwiftData'],
    image: 'do-it-now.jfif',
    github: 'https://github.com/Eco-Apple/do-it-now',
    live: 'https://apps.apple.com/us/app/do-it-now-get-things-done/id6741190163',
    category: 'iOS'
  },
  {
    title: 'KUBO: Smart Recipe Planner',
    description: 'A smart recipe app with image detection, suggest meals, and let you plan your week with a scheduler.',
    technologies: ['Flutter', 'Python', 'ReactJS'],
    image: 'kubo.png',
    github: 'https://github.com/KUBO-TEAM',
    demo: "https://youtu.be/kTfk86Ld7hY",
    category: 'Android'
  },
  {
    title: 'Document Scanner',
    description: 'A fast and easy document scanner to capture, crop, and organize your files—right from your phone.',
    technologies: ['Flutter', 'Firebase'],
    image: 'document-scanner.jpg',
    github: 'https://github.com/ecoknows/Document-Scanner',
    category: 'Android'
  },
  {
    title: 'Taters Website Revamp',
    description: 'An eCommerce app revamped from Vanilla JS to React, offering a faster, smoother shopping experience with modern features and seamless navigation.',
    technologies: ['ReactJS', 'CodeIgniter', 'PHP'],
    image: 'taters-web.png',
    live: 'https://ilovetaters.com',
    class: 'object-top',
    category: 'Web'
  },
  {
    title: 'BunBuy Marketplace',
    description: 'An eCommerce marketplace where I contributed by implementing vouchers and fixing UI bugs across multiple modules to enhance the shopping experience.',
    technologies: ['Flutter', 'Firebase'],
    image: 'bunbuy.png',
    category: 'Android'
  },
  {
    title: 'La Cucina',
    description: 'An interactive recipe app for food lovers, featuring Filipino dishes with a user-friendly interface. Explore, cook, and enjoy authentic recipes in a more engaging and dynamic way.',
    technologies: ['ReactNative', 'MongoDB', 'ExpressJS'],
    image: 'lacucina.png',
    github: 'https://github.com/ecoknows/La-Cucina',
    category: 'Android'
  },
  {
    title: 'RuralPress',
    description: 'An online platform for local newspapers, featuring a custom microsite builder. Built full-stack, it empowers local media to create their own digital presence with ease.',
    technologies: ['Django', 'Wagtail', 'Python'],
    image: 'ruralpress.webp',
    category: 'Web'
  },
  {
    title: 'Needr',
    description: 'A mobile platform where consumers and businesses can search, post, promote, and communicate needs and offers. I contributed by fixing bugs to enhance the app’s performance and usability.',
    technologies: ['Flutter', 'Firebase'],
    image: 'needr.jfif',
    category: 'Android'
  },
  {
    title: 'ARPilipinas',
    description: 'An augmented reality app showcasing the culture of the Philippines during the Spanish era. Developed as a freelance project during my college years, it offers an immersive historical experience.',
    technologies: ['Unity', 'Vuforia'],
    image: 'ar-pilipinas.png',
    github: 'https://github.com/ecoknows/Augmented-Reality-ARPilipinas',
    demo: 'https://youtu.be/48FuTi9PO8k',
    category: 'Android'
  },
  {
    title: 'Performance Evaluation System',
    description: 'A full-stack performance evaluation website designed to streamline the assessment process. Built as a freelance project during my college years, it enables efficient feedback collection and analysis.',
    technologies: ['Wagtail', 'Django', 'Python', 'Docker', 'Heroku'],
    image: 'pes.png',
    github: 'https://github.com/ecoknows/Performance-Management-System',
    category: 'Web'
  },
  {
    title: 'Pure Angel Coffee Website',
    description: 'A full-stack networking platform with a hierarchical structure, where a parent node connects to two child nodes. Developed as a freelance project during my college years, it manages and tracks relationships within a network.',
    technologies: ['AngularJS', 'MongoDB', 'ExpressJS', 'Google Cloud Platform', 'Nginx'],
    image: 'pac.png',
    github: 'https://github.com/ecoknows/Pure-Angel-Coffe',
    demo: 'https://youtu.be/EEkvmlxRpeo',
    category: 'Web'
  },
  {
    title: 'Workshop',
    description: 'Workshop is a full-stack platform for job seekers and freelancers, where employers can assign tasks, track progress, and workers can submit and complete jobs efficiently.',
    technologies: ['ReactNative', 'MongoDB', 'ExpressJS'],
    image: 'workshop.png',
    github: 'https://github.com/ecoknows/Workshop',
    class: 'object-top',
    category: 'Android'
  },
  {
    title: 'EVE',
    description: 'An ordering system with built-in voice recognition, designed to simplify the ordering process through hands-free interaction.',
    technologies: ['C#'],
    image: 'eve.jpg',
    github: 'https://github.com/ecoknows/EVE-Ordering-System',
    category: 'Window'
  },
  {
    title: 'TUP Scheduling System',
    description: 'TUP Scheduling System is a drag-and-drop scheduling platform for managing teacher timetables. Once schedules are set by instructors, they’re automatically received by student accounts for seamless coordination.',
    technologies: ['Wagtail', 'Django', 'Python', 'Docker', 'Heroku'],
    image: 'tup-faculty.png',
    github: 'https://github.com/ecoknows/TUP-Scheduling',
    category: 'Web'
  },
  {
    title: 'Celene',
    description: 'Celene is a full-stack eCommerce clothing app designed for a smooth shopping experience, complete with product browsing, cart management, and secure checkout.',
    technologies: ['ReactJS', 'MongoDB', 'ExpressJS'],
    image: 'celine.png',
    github: 'https://github.com/ecoknows/Celene',
    category: 'Web'
  },
  {
    title: 'Algo Filipino (Presentation Demo)',
    description: 'Algo Filipino is a messaging app demo built with React Native, created as a presentation sample during my talk on React Native development. I used it to demonstrate core concepts and real-time features.',
    technologies: ['React Native', 'Firebase'],
    image: 'af.png',
    github: 'https://github.com/ecoknows/Algo-GC',
    category: 'Android'
  },
  {
    title: 'Hospital Line',
    description: 'A full-stack platform with web and mobile support that helps users locate the nearest hospital using Google Maps features—like Uber, but for emergencies.',
    technologies: ['ReactJS', 'ExpressJS', 'MongoDB', 'React Native', 'Google Maps API'],
    image: 'hospital.png',
    github: 'https://github.com/ecoknows/Hospital-Line',
    category: 'Web'
  },
];

const categories = ['All', 'iOS', 'Android', 'Web', 'Window'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Work</h2>
          <div className="h-1 w-20 bg-pink-500 dark:bg-pink-400 mx-auto"></div>
        </div>
        
        {/* Category filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-pink-500 dark:bg-pink-400 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-96 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`${project.class} w-full h-full object-cover transition-transform duration-500 hover:scale-110`}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {
                    project.github ? 
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a> : null
                  }
                  { project.live ? 
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live</span>
                    </a> : project.demo ? <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Demo</span>
                    </a> : null
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;