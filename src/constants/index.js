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
  shopify,
  pos,
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
    title: "Freelance Developer",
    company_name: "Self-Employed",
    icon: starbucks, // Replace with your custom icon
    iconBg: "#FFFFFF",
    date: "2024 - 2025",
    points: [
      "Built a nurse rental platform using Laravel and MySQL.",
      "Developed the Road Chart Application (Government Project) using Laravel and Chart.js.",
      "Built a POS system with barcode generation and label printing for mobile and web platforms.",
      "Implemented and maintained mobile and web features using React Native (Expo) and Laravel.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Education Valley",
    icon: shopify, // Replace with your custom icon
    iconBg: "#ffffff",
    date: "December 2025 - Present",
    points: [
      "Maintaining the main company website as an in-house developer at Education Valley.",
      "Maintaining the student portal where students can apply to schools.",
      "Developing and improving full-stack features using Laravel and React.",
      "Handling bug fixes, performance improvements, and ongoing platform updates.",
    ],
  },
];


const highlights = [
  {
    title: "Full-Stack Delivery",
    description:
      "From planning to launch, I build complete web products with clean architecture and a strong user experience.",
  },
  {
    title: "Performance-Focused",
    description:
      "I optimize database queries, APIs, and frontend rendering to keep applications fast and responsive.",
  },
  {
    title: "Business-Aligned Solutions",
    description:
      "I build practical features that solve real workflow problems and support long-term product growth.",
  },
];

// Backward-compatible alias for modules that still import `testimonials`.
const testimonials = highlights;

const projects = [
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
    name: "Barcode and Label Printing POS System",
    description:
      "Mobile and web POS system for managing sales, products, and receipts with barcode generation and label printing, built with React Native (Expo) and Laravel.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://learn-with-shelly.vercel.app",
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
  }
];

export { services, technologies, experiences, highlights, testimonials, projects };
