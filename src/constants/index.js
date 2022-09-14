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
    link: "https://www.linkedin.com/",
  },
];

export const project = [
  {
    id: 1,
    title: "Fullstack Felines",
    description:
      "An online pet store ecommerce site for selling exotic kittens.",
    img: fsf,
    site: "https://fullstack-felines.herokuapp.com/",
    github: "https://github.com/Fullstack-Felines/grace_shopper",
  },
  {
    id: 2,
    title: "Fitness Trackr",
    description: "a really really reaaaally generic description.",
    img: trackr,
    site: "https://github.com/nicofrancis/UNIV_FitnessTrackr_Starter",
    github: "https://github.com/nicofrancis/UNIV_FitnessTrackr_Starter",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    description: "A tic-tac-toe arcade game created from scratch.",
    img: tictac,
    site: "https://cheerful-frangipane-fe6f64.netlify.app/",
    github: "https://github.com/nicofrancis/UNIV_FitnessTrackr_Starter",
  },
];
