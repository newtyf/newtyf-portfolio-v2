import type { job, option, project } from "../types";

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
  { title: "Resume", link: "/cv.pdf", styleCustom: true },
];

export const social: option[] = [
  { title: "github", link: "https://github.com/newtyf" },
  { title: "linkedin", link: "https://www.linkedin.com/in/axel-mu%C3%B1oz/" },
  { title: "instagram", link: "https://www.instagram.com/newt_yf/" },
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
    title: "RPS GAME",
    description:
      "The classic game of rock paper scissors comes to the web, play against the computer or against your friends!",
    github: "https://github.com/newtyf/rock-paper-scissors",
    image: "/rpsa.webp",
    liveSite: "https://rps.newtyf.com/",
    tags: ["React", "Vite", "TypeScript", "Signal R", "Mongo DB", "Real-time"],
  },
  {
    title: "JUAN BOT",
    description:
      "Discord bot for playing music of youtube or spotify in your Discord server!",
    github: "https://github.com/newtyf/Newt-Bot",
    image: "/discord.webp",
    liveSite: "https://discord.com/api/oauth2/authorize?client_id=958017348395221043&scope=applications.commands",
    tags: ["Node", "DiscordJS", "Discord-player"],
  },
  {
    title: "Pomodoro App",
    description:
      "Web application to organize your time and increase your productivity using the Pomodoro!",
    github: "https://github.com/newtyf/Pomodoro-by-newt",
    image: "/pomodoro.webp",
    liveSite: "https://newtpomofocus.netlify.app/",
    tags: ["Vite", "Pinia", "VueJS", "Scss"],
  },
];
