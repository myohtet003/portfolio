import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mysql,
  tailwind,
  nodejs,
  laravel,
  git, 
  php,
  bootstrap, 
  starbucks,
  tesla,
  shopify,
  shelly,
  nurserent, 
  projectManagementImage
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  }, 
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];


const experiences = [
  {
    title: "Full Stack Developer (Freelance)",
    company_name: "Nurse Rent Web Application",
    icon: starbucks, // Replace with your custom icon
    iconBg: "#A78BFA",
    date: "June 2024 - September 2024",
    points: [
      "Developed a nurse rental platform using Laravel, Tailwind CSS, and MySQL.",
      "Implemented features for nurse registration, scheduling, and booking management.",
      "Integrated secure login, role-based access (admin, nurse, client), and notifications.",
      "Designed a clean, responsive interface for mobile and desktop users.",
    ],
  },
  {
    title: "Back-End Developer (Freelance)",
    company_name: "Road Chart Application (Government Project)",
    icon: tesla, // Replace with your custom icon
    iconBg: "#6EE7B7",
    date: "Octomber 2024 - February 2025",
    points: [
      "Worked on a government web app to manage road planning data using Laravel and MySQL.",
      "Designed RESTful APIs to handle project status, timelines, and mapping data.",
      "Collaborated with a front-end team to ensure real-time data syncing and filtering.",
      "Optimized large database queries for efficient loading and reporting.",
    ],
  },
  {
    title: "Full Stack Developer (Freelance)",
    company_name: "Student Application Platform",
    icon: shopify, // Replace with your custom icon
    iconBg: "#FCD34D",
    date: "March 2025 - Present",
    points: [
      "Created a student application platform inspired by ApplyBoard using Laravel and React.",
      "Built multi-step application forms, program listings, and document upload features.",
      "Integrated admin panel for managing students, agents, and university data.",
      "Implemented payment processing, application tracking, and email notifications.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shelly School",
    description:
      "Web-based platform enabling students and parents to access resources, track progress, and manage educational activities seamlessly, fostering an interactive and efficient learning environment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }, 
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shelly,
    source_code_link: "https://learn-with-shelly.vercel.app",
  },
  {
    name: "Nurse Rent",
    description:
      "Web-based platform connecting clients with professional nurses for personalized care, offering seamless booking, management, and tracking of nursing services tailored to individual needs.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: nurserent,
    source_code_link: "https://zabuhein.com",
  },
  {
  name: "Project Management App",
  description:
    "A powerful web-based application to help teams plan, track, and manage projects with ease. It includes task assignment, progress tracking, deadlines, and real-time updates with a clean and responsive interface.",
  tags: [
    {
      name: "Laravel",
      color: "red-text-gradient",
    },
    {
      name: "Inertia.js",
      color: "blue-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "green-text-gradient",
    },
    {
      name: "TypeScript",
      color: "pink-text-gradient",
    },
  ],
  image: projectManagementImage, // Replace with your actual image or import
  source_code_link: "https://github.com/myohtet003/project-management-app", // You can insert your GitHub or live link here
},


];

export { services, technologies, experiences, testimonials, projects };
