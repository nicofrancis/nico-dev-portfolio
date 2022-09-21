import { linkedin, fsf, tictac, trackr, instagram } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/earthling.nf/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/nicolofrancis/",
  },
];

export const project = [
  {
    id: 1,
    title: "Fullstack Felines",
    description:
      "An online pet store ecommerce site that sells exotic kittens. This project was created using Prisma, Express, React and TailwindCSS.",
    img: fsf,
    site: "https://fullstack-felines.herokuapp.com/",
    github: "https://github.com/Fullstack-Felines/grace_shopper",
  },
  {
    id: 2,
    title: "Fitness Trackr",
    description:
      "I built an API and consumed it for this fitness tracking app made using React, Node, Express, and PostgreSQL",
    img: trackr,
    site: "https://warm-mountain-02562.herokuapp.com/Home",
    github: "https://github.com/nicofrancis/UNIV_FitnessTrackr_Starter",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    description:
      "A tic-tac-toe arcade game created from scratch using vanilla JavaScript, HTML, and CSS.",
    img: tictac,
    site: "https://cheerful-frangipane-fe6f64.netlify.app/",
    github: "https://github.com/nicofrancis/arcade",
  },
];
