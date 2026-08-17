export type ProjectCategory = 'Mobile' | 'Web' | 'Other';

export type ProjectPlatform = 'iOS' | 'Android' | 'iOS & Android' | 'Web' | 'Desktop';

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  objectPosition?: string;
}

export interface ProjectLinks {
  code?: string;
  appStore?: string;
  googlePlay?: string;
  website?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  platform: ProjectPlatform;
  category: ProjectCategory;
  summary: string;
  description?: string;
  stack: readonly string[];
  image: ImageAsset;
  links: ProjectLinks;
  featured: boolean;
  role?: string;
  ownership?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  logo: ImageAsset;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  image: ImageAsset;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  detail?: string;
  eyebrow?: string;
  icon: string;
}

export const projects: readonly Project[] = [
  {
    id: 'my-map-diary',
    title: 'My Map Diary',
    platform: 'iOS',
    category: 'Mobile',
    summary:
      'An interactive map diary to pin photos, add titles, and relive your adventures anytime, anywhere.',
    description:
      'An interactive map diary to pin photos, add titles, and relive your adventures anytime, anywhere.',
    stack: ['Swift', 'SwiftUI', 'MapKit', 'SwiftData'],
    image: {
      src: 'my-map-diary.jfif',
      alt: 'My Map Diary app preview',
      width: 1280,
      height: 1229,
    },
    links: {
      code: 'https://github.com/Eco-Apple/my-map-diary',
      appStore: 'https://apps.apple.com/us/app/my-map-diary/id6738887653',
    },
    featured: true,
    role: 'iOS Developer',
  },
  {
    id: 'piggy',
    title: 'Piggy',
    platform: 'iOS',
    category: 'Mobile',
    summary:
      'A simple budget tracker to manage income, expenses, and savings without the clutter—perfect for staying organized.',
    description:
      'A simple budget tracker to manage income, expenses, and savings without the clutter—perfect for staying organized.',
    stack: ['Swift', 'SwiftUI', 'SwiftData'],
    image: {
      src: 'piggy.jfif',
      alt: 'Piggy app preview',
      width: 1290,
      height: 1220,
    },
    links: {
      code: 'https://github.com/Eco-Apple/piggy',
      appStore: 'https://apps.apple.com/us/app/piggy-simple-budget-tracker/id6736941981',
    },
    featured: true,
    role: 'iOS Developer',
  },
  {
    id: 'do-it-now',
    title: 'Do it now!',
    platform: 'iOS',
    category: 'Mobile',
    summary:
      'A minimalist task timer to track work, stay accountable, and build momentum toward your goals.',
    description:
      'A minimalist task timer to track work, stay accountable, and build momentum toward your goals.',
    stack: ['Swift', 'SwiftUI', 'SwiftData'],
    image: {
      src: 'do-it-now.jfif',
      alt: 'Do it now app preview',
      width: 1290,
      height: 1240,
    },
    links: {
      code: 'https://github.com/Eco-Apple/do-it-now',
      appStore: 'https://apps.apple.com/us/app/do-it-now-get-things-done/id6741190163',
    },
    featured: true,
    role: 'iOS Developer',
  },
  {
    id: 'atlas-transport',
    title: 'Atlas Transport',
    platform: 'iOS & Android',
    category: 'Mobile',
    summary:
      'A cross-platform logistics app for shipment tracking, delivery operations, documented proof, and warehouse visibility.',
    description:
      'A mobile product that helps Atlas Transport coordinate shipment milestones, delivery workflows, and warehouse operations.',
    stack: ['React Native', 'Firebase'],
    image: {
      src: 'atlas-transport.png',
      alt: 'Atlas Transport app screens for login, shipment details, and facility operations',
      width: 1200,
      height: 777,
    },
    links: {
      website: 'https://atlastransport.ph/',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.atlas.atlastracking&hl=en',
      appStore: 'https://apps.apple.com/ph/app/atlas-transport/id6761184755',
    },
    featured: false,
  },
  {
    id: 'kubo-smart-recipe-planner',
    title: 'KUBO: Smart Recipe Planner',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'A smart recipe app with image detection, suggest meals, and let you plan your week with a scheduler.',
    stack: ['Flutter', 'Python', 'ReactJS'],
    image: {
      src: 'kubo.png',
      alt: 'KUBO Smart Recipe Planner preview',
      width: 750,
      height: 580,
    },
    links: {
      code: 'https://github.com/KUBO-TEAM',
      demo: 'https://youtu.be/kTfk86Ld7hY',
    },
    featured: false,
  },
  {
    id: 'document-scanner',
    title: 'Document Scanner',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'A fast and easy document scanner to capture, crop, and organize your files—right from your phone.',
    stack: ['Flutter', 'Firebase'],
    image: {
      src: 'document-scanner.jpg',
      alt: 'Document Scanner app preview',
      width: 478,
      height: 720,
    },
    links: {
      code: 'https://github.com/ecoknows/Document-Scanner',
    },
    featured: false,
  },
  {
    id: 'taters-website-revamp',
    title: 'Taters Website Revamp',
    platform: 'Web',
    category: 'Web',
    summary:
      'An eCommerce app revamped from Vanilla JS to React, offering a faster, smoother shopping experience with modern features and seamless navigation.',
    stack: ['ReactJS', 'CodeIgniter', 'PHP'],
    image: {
      src: 'taters-web.png',
      alt: 'Taters Website Revamp preview',
      width: 1688,
      height: 1785,
      className: 'object-top',
      objectPosition: 'top',
    },
    links: {
      website: 'https://ilovetaters.com',
    },
    featured: false,
  },
  {
    id: 'bunbuy-marketplace',
    title: 'BunBuy Marketplace',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'An eCommerce marketplace where I contributed by implementing vouchers and fixing UI bugs across multiple modules to enhance the shopping experience.',
    stack: ['Flutter', 'Firebase'],
    image: {
      src: 'bunbuy.png',
      alt: 'BunBuy Marketplace app preview',
      width: 312,
      height: 626,
    },
    links: {},
    featured: false,
    role: 'Contributor',
  },
  {
    id: 'la-cucina',
    title: 'La Cucina',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'An interactive recipe app for food lovers, featuring Filipino dishes with a user-friendly interface. Explore, cook, and enjoy authentic recipes in a more engaging and dynamic way.',
    stack: ['ReactNative', 'MongoDB', 'ExpressJS'],
    image: {
      src: 'lacucina.png',
      alt: 'La Cucina app preview',
      width: 4635,
      height: 2834,
    },
    links: {
      code: 'https://github.com/ecoknows/La-Cucina',
    },
    featured: false,
  },
  {
    id: 'ruralpress',
    title: 'RuralPress',
    platform: 'Web',
    category: 'Web',
    summary:
      'An online platform for local newspapers, featuring a custom microsite builder. Built full-stack, it empowers local media to create their own digital presence with ease.',
    stack: ['Django', 'Wagtail', 'Python'],
    image: {
      src: 'ruralpress.webp',
      alt: 'RuralPress microsite builder preview',
      width: 1920,
      height: 1082,
    },
    links: {},
    featured: false,
    role: 'Full-stack Developer',
  },
  {
    id: 'needr',
    title: 'Needr',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'A mobile platform where consumers and businesses can search, post, promote, and communicate needs and offers. I contributed by fixing bugs to enhance the app’s performance and usability.',
    stack: ['Flutter', 'Firebase'],
    image: {
      src: 'needr.jfif',
      alt: 'Needr app preview',
      width: 201,
      height: 251,
    },
    links: {},
    featured: false,
    role: 'Contributor',
  },
  {
    id: 'ar-pilipinas',
    title: 'ARPilipinas',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'An augmented reality app showcasing the culture of the Philippines during the Spanish era. Developed as a freelance project during my college years, it offers an immersive historical experience.',
    stack: ['Unity', 'Vuforia'],
    image: {
      src: 'ar-pilipinas.png',
      alt: 'ARPilipinas augmented reality app preview',
      width: 1807,
      height: 897,
    },
    links: {
      code: 'https://github.com/ecoknows/Augmented-Reality-ARPilipinas',
      demo: 'https://youtu.be/48FuTi9PO8k',
    },
    featured: false,
    ownership: 'Freelance project',
  },
  {
    id: 'performance-evaluation-system',
    title: 'Performance Evaluation System',
    platform: 'Web',
    category: 'Web',
    summary:
      'A full-stack performance evaluation website designed to streamline the assessment process. Built as a freelance project during my college years, it enables efficient feedback collection and analysis.',
    stack: ['Wagtail', 'Django', 'Python', 'Docker', 'Heroku'],
    image: {
      src: 'pes.png',
      alt: 'Performance Evaluation System preview',
      width: 1366,
      height: 628,
    },
    links: {
      code: 'https://github.com/ecoknows/Performance-Management-System',
    },
    featured: false,
    ownership: 'Freelance project',
  },
  {
    id: 'pure-angel-coffee-website',
    title: 'Pure Angel Coffee Website',
    platform: 'Web',
    category: 'Web',
    summary:
      'A full-stack networking platform with a hierarchical structure, where a parent node connects to two child nodes. Developed as a freelance project during my college years, it manages and tracks relationships within a network.',
    stack: ['AngularJS', 'MongoDB', 'ExpressJS', 'Google Cloud Platform', 'Nginx'],
    image: {
      src: 'pac.png',
      alt: 'Pure Angel Coffee Website preview',
      width: 1501,
      height: 696,
    },
    links: {
      code: 'https://github.com/ecoknows/Pure-Angel-Coffe',
      demo: 'https://youtu.be/EEkvmlxRpeo',
    },
    featured: false,
    ownership: 'Freelance project',
  },
  {
    id: 'workshop',
    title: 'Workshop',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'Workshop is a full-stack platform for job seekers and freelancers, where employers can assign tasks, track progress, and workers can submit and complete jobs efficiently.',
    stack: ['ReactNative', 'MongoDB', 'ExpressJS'],
    image: {
      src: 'workshop.png',
      alt: 'Workshop app preview',
      width: 411,
      height: 731,
      className: 'object-top',
      objectPosition: 'top',
    },
    links: {
      code: 'https://github.com/ecoknows/Workshop',
    },
    featured: false,
  },
  {
    id: 'eve-ordering-system',
    title: 'EVE',
    platform: 'Desktop',
    category: 'Other',
    summary:
      'An ordering system with built-in voice recognition, designed to simplify the ordering process through hands-free interaction.',
    stack: ['C#'],
    image: {
      src: 'eve.jpg',
      alt: 'EVE ordering system preview',
      width: 1280,
      height: 800,
    },
    links: {
      code: 'https://github.com/ecoknows/EVE-Ordering-System',
    },
    featured: false,
  },
  {
    id: 'tup-scheduling-system',
    title: 'TUP Scheduling System',
    platform: 'Web',
    category: 'Web',
    summary:
      'TUP Scheduling System is a drag-and-drop scheduling platform for managing teacher timetables. Once schedules are set by instructors, they’re automatically received by student accounts for seamless coordination.',
    stack: ['Wagtail', 'Django', 'Python', 'Docker', 'Heroku'],
    image: {
      src: 'tup-faculty.png',
      alt: 'TUP Scheduling System preview',
      width: 1095,
      height: 922,
    },
    links: {
      code: 'https://github.com/ecoknows/TUP-Scheduling',
    },
    featured: false,
  },
  {
    id: 'celene',
    title: 'Celene',
    platform: 'Web',
    category: 'Web',
    summary:
      'Celene is a full-stack eCommerce clothing app designed for a smooth shopping experience, complete with product browsing, cart management, and secure checkout.',
    stack: ['ReactJS', 'MongoDB', 'ExpressJS'],
    image: {
      src: 'celine.png',
      alt: 'Celene eCommerce app preview',
      width: 1920,
      height: 1497,
    },
    links: {
      code: 'https://github.com/ecoknows/Celene',
    },
    featured: false,
  },
  {
    id: 'algo-filipino',
    title: 'Algo Filipino (Presentation Demo)',
    platform: 'Android',
    category: 'Mobile',
    summary:
      'Algo Filipino is a messaging app demo built with React Native, created as a presentation sample during my talk on React Native development. I used it to demonstrate core concepts and real-time features.',
    stack: ['React Native', 'Firebase'],
    image: {
      src: 'af.png',
      alt: 'Algo Filipino messaging app preview',
      width: 411,
      height: 823,
    },
    links: {
      code: 'https://github.com/ecoknows/Algo-GC',
    },
    featured: false,
    ownership: 'Presentation demo',
  },
  {
    id: 'hospital-line',
    title: 'Hospital Line',
    platform: 'Web',
    category: 'Web',
    summary:
      'A full-stack platform with web and mobile support that helps users locate the nearest hospital using Google Maps features—like Uber, but for emergencies.',
    stack: ['ReactJS', 'ExpressJS', 'MongoDB', 'React Native', 'Google Maps API'],
    image: {
      src: 'hospital.png',
      alt: 'Hospital Line platform preview',
      width: 1440,
      height: 1024,
    },
    links: {
      code: 'https://github.com/ecoknows/Hospital-Line',
    },
    featured: false,
  },
];

export const featuredProjects: readonly Project[] = projects.filter(
  (project) => project.featured,
);

export const archiveProjects: readonly Project[] = projects.filter(
  (project) => !project.featured,
);

export const archiveCategories = ['Mobile', 'Web', 'Other'] as const satisfies readonly ProjectCategory[];

export const experiences: readonly Experience[] = [
  {
    id: 'philippine-national-bank',
    company: 'Philippine National Bank',
    position: 'iOS Developer',
    period: 'June 2024 - Present',
    description:
      'Developed digital banking features (Card Control, Transfer Device via QR, Pay This Card, Mobile Account Application), improved app performance, fixed critical bugs, and strengthened app security.',
    logo: {
      src: 'pnb-logo.png',
      alt: 'Philippine National Bank logo',
      width: 226,
      height: 227,
    },
  },
  {
    id: 'achieve-without-borders',
    company: 'Achieve Without Borders, Inc.',
    position: 'Full Stack Developer',
    period: 'May 2023 - May 2024',
    description:
      'Customized ERP systems, boosted performance with background processing and queues, managed cloud deployments, and developed e-commerce features (Vouchers, Deals, Third-party Authentication, Dashboard Revamp and Dynamic Links Implementation) for both iOS and Android.',
    logo: {
      src: 'awb-logo.png',
      alt: 'Achieve Without Borders logo',
      width: 717,
      height: 587,
    },
  },
  {
    id: 'taters-enterprises',
    company: 'Taters Enterprises, Inc.',
    position: 'Software Developer',
    period: 'Feb 2022 - May 2023',
    description:
      'Modernized the frontend architecture from Multi-Page Applications to Single Page Applications, built PopClub and Catering modules from scratch, and enhanced SnackShop and internal admin tools.',
    logo: {
      src: 'taters-logo.jfif',
      alt: 'Taters Enterprises logo',
      width: 225,
      height: 225,
    },
  },
  {
    id: 'rightvalley',
    company: 'RightValley',
    position: 'Software Developer Intern',
    period: 'Feb 2021 - June 2021',
    description:
      'Built a custom microsite builder for a local newspaper and resolved critical bugs in a Flutter-based e-commerce mobile app.',
    logo: {
      src: 'rightvalley.png',
      alt: 'RightValley logo',
      width: 225,
      height: 225,
    },
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    id: 'eusebio-yu',
    quote: "Worked with Eco on multiple projects. I can say he's an excellent and hardworking developer! 👍",
    name: 'Eusebio Yu',
    position: 'Senior Solutions Engineer',
    image: {
      src: 'sebs.jpeg',
      alt: 'Eusebio Yu',
      width: 400,
      height: 400,
    },
  },
  {
    id: 'charles-kurt',
    quote: "Good team player, can start with minimal supervision. He know what he's doing.",
    name: 'Charles Kurt',
    position: 'Lead Flutter Developer',
    image: {
      src: 'charles.jfif',
      alt: 'Charles Kurt',
      width: 200,
      height: 200,
    },
  },
  {
    id: 'keen-renzo-ballon',
    quote: "Been with Eco on projects and he showed his software knowledge well while ensuring quality on his code.",
    name: 'Keen Renzo Ballon',
    position: 'Cloud Engineer',
    image: {
      src: 'keen.jpeg',
      alt: 'Keen Renzo Ballon',
      width: 400,
      height: 400,
    },
  },
  {
    id: 'matthew-dalagan',
    quote:
      'Having worked with Eco on a major project, I can vouch on his skills and reliability as a developer. He was always delivering high-quality codes, and never hesitated to help others troubleshoot, improve code structures, and brainstorm solutions.',
    name: 'Matthew Dalagan',
    position: 'Application Developer',
    image: {
      src: 'matt.jfif',
      alt: 'Matthew Dalagan',
      width: 200,
      height: 200,
    },
  },
  {
    id: 'jelyn-guibong',
    quote:
      "I had the pleasure of working with Jerico with ERP projects, and I was impressed by his technical skills, reliability, and collaborative attitude. He's indeed a valuable asset to the team.",
    name: 'Jelyn Guibong',
    position: 'Product Manager',
    image: {
      src: 'jelyn.jfif',
      alt: 'Jelyn Guibong',
      width: 200,
      height: 188,
    },
  },
  {
    id: 'ken-harvey-oresca',
    quote:
      'Jerico is one of the most reliable and skilled developers I’ve worked with. He consistently delivers clean, scalable code and approaches every challenge with focus and professionalism. Calm under pressure and highly collaborative, Jerico is a valuable asset to any team.',
    name: 'Ken Harvey Oresca',
    position: 'Software Developer',
    image: {
      src: 'ken.jfif',
      alt: 'Ken Harvey Oresca',
      width: 460,
      height: 460,
    },
  },
  {
    id: 'girija-subramaniyan',
    quote:
      'I had the pleasure of working with Jerico on ERP projects—he’s a strong team player and a great collaborator.',
    name: 'Girija Subramaniyan',
    position: 'Odoo Developer',
    image: {
      src: 'girija.jpeg',
      alt: 'Girija Subramaniyan',
      width: 200,
      height: 200,
    },
  },
];

export const capabilities: readonly Capability[] = [
  {
    id: 'mobile-apps',
    title: 'Mobile App',
    description:
      'Creating intuitive, high-performance apps for iOS and Android, optimized for every device.',
    icon: '📱',
  },
  {
    id: 'web-apps',
    title: 'Web App',
    description: 'Delivering fast, dynamic web apps that adapt seamlessly to your needs.',
    icon: '🌐',
  },
  {
    id: 'business-solutions',
    title: 'Business Solutions',
    description: 'Building custom ERP systems to automate workflows and scale your operations.',
    icon: '🏢',
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    description:
      'Designing clean, engaging interfaces that reflect your brand and delight users.',
    icon: '🖌️',
  },
  {
    id: 'ux-design',
    title: 'UX Design',
    description:
      'Crafting smooth, user-centered experiences that make every interaction effortless.',
    icon: '🧭',
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud Deployment',
    description:
      'Ensuring reliable, scalable deployments with streamlined infrastructure and automation.',
    icon: '☁️',
  },
];
