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
  { title: "Resume", link: "/axel-cristopher-munoz-ccaihuari-cv.pdf", styleCustom: true },
];

export const social: option[] = [
  { title: "github", link: "https://github.com/newtyf" },
  { title: "linkedin", link: "https://www.linkedin.com/in/axel-mu%C3%B1oz/" },
  { title: "code-square", link: "https://leetcode.com/Trez_/" },
];

export const jobs: job[] = [
  {
    title: "Funciton",
    description: [
      "Layout and development of emails",
      "Development Landing pages",
      "CMS management",
      "Reducing time with python scripts"
    ],
    role: "Frontend Developer",
    start: "JUN 2023",
    end: "Currently working",
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
  },
];

export const projects: project[] = [
  {
    title: "JUAN BOT",
    category: Category.BACKEND,
    description:
      "Discord bot for playing music of youtube or spotify in your Discord server!",
    github: "https://github.com/newtyf/Newt-Bot",
    image: "/discord.webp",
    liveSite: "https://discord.com/api/oauth2/authorize?client_id=958017348395221043&scope=applications.commands",
    tags: ["Node", "DiscordJS", "Discord-player"],
  },
  {
    title: "Pomodoro App",
    category: Category.FRONTEND,
    description:
      "Web application to organize your time and increase your productivity using the Pomodoro!",
    github: "https://github.com/newtyf/Pomodoro-by-newt",
    image: "/pomodoro.webp",
    liveSite: "https://newtpomofocus.netlify.app/",
    tags: ["Vite", "Pinia", "VueJS", "Scss"],
  },
  {
    title: "RPS GAME",
    category: Category.FULLSTACK,
    description:
      "The classic game of rock paper scissors comes to the web, play against the computer or against your friends!",
    github: "https://github.com/newtyf/rock-paper-scissors",
    image: "/rpsa.webp",
    liveSite: "https://rps.newtyf.com/",
    tags: ["React", "Vite", "TypeScript", "Signal R", "Mongo DB", "Real-time"],
  },
  {
    title: "Forest Export S.A.C",
    category: Category.FREELANCE,
    description:
      "A web page to display business information, products and services, and also allows you to contact customers through a form to request the customer's wood products.",
    image: "/forest-export.webp",
    liveSite: "https://forestexportsac.com/",
    tags: ["Astro", "Tailwind Css", "React", "GA4", "i18N", "PHP" ],
  },
];

export const realProjects: project[] = [
  {
    title: "Forest Export S.A.C",
    category: Category.FRONTEND,
    description:
      "A web page to display business information, products and services, and also allows you to contact customers through a form to request the customer's wood products.",
    image: "/forest-export.webp",
    liveSite: "https://forestexportsac.com/",
    tags: ["Astro", "Tailwind Css", "React", "GA4", "i18N", "PHP" ],
  },
];
