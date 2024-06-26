import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
      title: "Computer Networks Hardware Intern",
       company_name: "Hamilton Trading and Contracting (Doha)",
      // icon: "",
      iconBg: "#000000",
      date: "Nov 2016 - Jan 2017",
      points: [
        "Dealt with hardware and software protocols of the networking industry. Learnt how to maintain and administer computer networks and related computer environments."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Broca",
      // icon: "",
      iconBg: "#000000",
      date: "Apr 2021 - Aug 2021",
      points: [
        "Introduced Storybook to our UI codebase. Added Stories to each base and page components. Added visual tests for components using Chromatic.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "21e8",
      // icon: "",
      iconBg: "#000000",
      date: "Jul 2021 - Dec 2023",
      points: [
        "Blockchain Project Lead | 3D Blockchain Data Visualization Innovated a 3D blockchain data visualization tool, enhancing data interaction and analysis in a dynamic environment. (Tech stack: JavaScript, Three.js, babylon.js Svelte, Node.js, Express)",
        "Rust Developer | SHA-256 Hash Generation Tool Developed an SHA-256 hashing tool using the 21e8 algorithm and Rust, enhancing blockchain integrity and scalability. Seamlessly integrated with existing infrastructure to support high transaction volumes. Utilized Rust, Cargo, rand, sha2, and hex to optimize security and cryptographic efficiency.",
        "Vue.js Developer | Geo hasher Project Developed an interactive map-based application with Vue.js, enabling users to hash geographical locations via API by clicking on the map. Implemented latitude and longitude hashing to ensure location integrity. (Tech stack: Vue.js, TypeScript, Axios, CSS)",
      ],
    },
    {
      title: "Freelance Web Developer",
      // icon: "",
      iconBg: "#000000",
      date: "Sept 2019 - Present",
      points: [
        "Designed and developed five websites, including a fully-functional e-commerce platform, enhancing user experience and performance. Built the site using HTML, CSS, JavaScript, and PHP, complete with a secure payment gateway, optimizing both front-end and back-end functionalities.",
        "Inspired Inscriptions: https://inspiredinscriptions.net",
        "Onehunga Cricket Association: https://onehungacricket.net",
        "Anugraha Center for active ageing: https://anugrahaactivitycenter.com",
        "3 Business portfolio websites a work in progress",
        "And a bunch of legacy websites"
      ],
    },
  ];

export const socialLinks = [
    
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/thelochan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/neerajlochanvinod/',
    }
];

export const projects = [
    {
      name: "Quantum Blockchain",
      description:
        "A Python implementation of a Quantum Key Distribution (QKD) protocol that can be used in a blockchain context.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
       
      ],
    //   image: carrent,
      source_code_link: "https://github.com/thelochan/QuantumBlockchain",
    },
    {
      name: "Dungeon Crawler",
      description: "A basic Dungeon crawler game",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "phaser3",
          color: "green-text-gradient",
        },
        {
          name: "boom.js",
          color: "pink-text-gradient",
        },
      ],
    //   image: jobit,
      source_code_link: "https://github.com/thelochan/typescriptdungeongame",
    },
    {
      name: "Mario but worse",
      description: "Bad rendition of mario using kaboomjs",
      tags: [
        {
          name: "kaboomjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    //   image: tripguide,
      source_code_link: "https://github.com/thelochan/mariobutworse",
    },
    {
      name: "Gym Meal Prep",
      description: "Meal prep app with a macro calculator",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
    //   image: tripguide,
      source_code_link: "https://github.com/thelochan/GymMealPrep",
    },
  ];