import { Category, type job, type option, type project } from "src/types";

export const mail = "axelskam.123@outlook.es";

export const menu: option[] = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Work",
    link: "#work",
  },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
  { title: "Resume", link: "/web-developer-cv.pdf", styleCustom: true },
];

export const social: option[] = [
  { title: "github", link: "https://github.com/newtyf" },
  { title: "linkedin", link: "https://www.linkedin.com/in/axel-munoz-newtyf/" },
  { title: "code-square", link: "https://leetcode.com/Trez_/" },
];

export const jobs: job[] = [
  {
    title: "Direktor",
    description: [
      "Project Requirements and Scope Management",
      "Advanced Front End Development with Vue.js",
      "Backend and API development with Laravel",
      "Testing and Quality Management",
      "Bug Resolution and Maintenance in Production",
      "Database Modeling and Optimization",
    ],
    role: "Full stack Engineer",
    start: "JUN 2024",
    end: "Currently working",
    skills: [
      "HTML",
      "Javascript",
      "Vue.js",
      "Vuex",
      "TailwindCSS",
      "REST API's",
      "PHP",
      "Laravel",
      "Eloquent",
      "Blade",
      "DataGrip",
      "MySQL",
      "Git",
      "Github",
      "Github actions",
      "Jira",
    ],
  },
  {
    title: "Funciton",
    description: [
      "Layout and development of emails",
      "Development Landing pages",
      "CMS management",
      "Reducing time with python scripts",
    ],
    role: "Frontend Developer",
    start: "JUN 2023",
    end: "JUL 2023",
    skills: ["HTML", "CSS", "Javascript", "Python", "CMS", "Jira", "Amazon S3"],
  },
  {
    title: "Mirum Agency",
    description: [
      "Layout and development of emails",
      "Email testing",
      "Investigation of services to improve the development of emails",
    ],
    role: "Programmer",
    start: "JUL 2022",
    end: "MAR 2023",
    skills: [],
  },
  {
    title: "Picnic Creativa",
    description: [
      `In charge of the development and implementation of new features both on the Frontend side and on the Backend side.`,
      `Implementation and development of Automated Mails`,
      `Administer and manage development servers.`,
      `Automated bot development for bug traceability and
      Management of the implemented services.`,
      `Generate SQL code for the management and implementation of new
      features in the Database.`,
    ],
    role: "Web Developer",
    start: "ENE 2022",
    end: "JUL 2022",
    skills: [
      "HTML",
      "Javascript",
      "Vue.js",
      "Nuxt.js",
      "Bootstrap",
      "Sass",
      "Figma",
      "REST API's",
      "Sockets",
      "Node.js",
      "Express.js",
      "MySQL",
      "Git",
      "Bitbucket",
      "Monday",
    ],
  },
];

export const projects: project[] = [
  {
    title: "MDA GROUP COMPANY",
    category: Category.FREELANCE,
    description:
      "I developed a freelance web project to display commercial information and contact clients, optimized for SEO and built with Astro. I used a 7-1 CSS architecture, achieved a perfect performance score, and deployed the site with Cloudflare",
    image: "/mda-webpage.webp",
    liveSite: "https://mdagroup.company/",
    tags: ["React", "Astro", "SEO", "Scss", "Resend", "Cloudflare", "GTM", "GA4"],
  },
  {
    title: "Irrigation System",
    category: Category.FULLSTACK,
    description:
      "I developed an award-winning IoT project for plant care, using an ESP32 server with ESP Async WebServer. I created a web interface with React, shadcn/ui, and WebSockets.",
    github: "https://github.com/newtyf/ESP32-WEB-SERVER",
    image: "/irrigation.webp",
    tags: ["React", "TypeScript", "shadcn/ui", "Tailwind Css", "MUI", "Animate.css", "ESP32", "Real-time", "ESP Async WebServer", "WebSockets", "IoT"],
  },
  {
    title: "RPS REAL TIME GAME",
    category: Category.FULLSTACK,
    description:
      "The classic game of rock paper scissors comes to the web, play against the computer or against your friends!",
    github: "https://github.com/newtyf/rock-paper-scissors",
    image: "/rpsa.webp",
    liveSite: "https://rps.newtyf.com/",
    tags: ["React", "Vite", "TypeScript", "Signal R", "Mongo DB", "Real-time"],
  },
  {
    title: "JUAN BOT",
    category: Category.BACKEND,
    description:
      "Discord bot for playing music of youtube or spotify in your Discord server!",
    github: "https://github.com/newtyf/Newt-Bot",
    image: "/discord.webp",
    liveSite:
      "https://discord.com/oauth2/authorize?client_id=958017348395221043&permissions=8&scope=bot",
    tags: ["Node", "DiscordJS", "Discord-player"],
  },
];