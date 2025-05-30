import React from 'react';

const experiences = [
  {
    company: 'Philippine National Bank',
    position: 'iOS Developer',
    period: 'June 2024 - Present',
    description:
      'Developed digital banking features (Card Control, Transfer Device via QR, Pay This Card, Mobile Account Application), improved app performance, fixed critical bugs, and strengthened app security.',
    logo: 'pnb-logo.png'
  },
  {
    company: 'Achieve Without Borders, Inc.',
    position: 'Full Stack Developer',
    period: 'May 2023 - May 2024',
    description:
      'Customized ERP systems, boosted performance with background processing and queues, managed cloud deployments, and developed e-commerce features (Vouchers, Deals, Third-party Authentication, Dashboard Revamp and Dynamic Links Implementation) for both iOS and Android.',
    logo: 'awb-logo.png'
  },
  {
    company: 'Taters Enterprises, Inc.',
    position: 'Software Developer',
    period: 'Feb 2022 - May 2023',
    description:
      'Modernized the frontend architecture from Multi-Page Applications to Single Page Applications, built PopClub and Catering modules from scratch, and enhanced SnackShop and internal admin tools.',
    logo: 'taters-logo.jfif'
  },
  {
    company: 'RightValley',
    position: 'Software Developer Intern',
    period: 'Feb 2021 - June 2021',
    description:
      'Built a custom microsite builder for a local newspaper and resolved critical bugs in a Flutter-based e-commerce mobile app.',
    logo: 'rightvalley.png'
  }
];


const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-pink-500 dark:bg-pink-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 dark:bg-pink-400 z-10"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-4 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <p className="text-pink-500 dark:text-pink-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                      {exp.period}
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;