import { linkedin, fsf, tictac, trackr } from "../assets";

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

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
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
