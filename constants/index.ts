import React from 'react';
import { RxHome, RxPerson, RxDashboard, RxClipboard, RxResume } from "react-icons/rx";


const containerStyles = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',  // Add padding for better spacing
  overflowX: 'auto',
  overflowY: 'scroll',  // Enable vertical scrolling
  minHeight: '100vh',  // Adjust to your needs
};  

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];
export const Projects = [
  {
    title: "$Stables",
    text: "I worked as a Community Manager",
    src: "/pro2.jpg",
  },
  {
    title: "Pump Coin",
    text: "I worked as a Community Manager",
    src: "/pro4.jpg",
  },
  {
    title: "Marstoshi",
    text: "I worked as a Community Manager",
    src: "/pro3.jpg",
  },
  {
    title: "Bundle Bests",
    text: "I worked as a Community Manager",
    src: "/pro1.jpg",
  },
  {
    title: "Much More",
    text: "I worked on 100 more projects <br> But can't share all",
    src: "/pro1.jpg",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  { 
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me", 
  },
  {
    name: "/about-us",
    icon: RxResume,
    link: "/about-us",
  },
];
// ... (previous code)

export const GlobalStyles = `
  /* Reset default margin and padding for the body */
  body {
    margin: 0;
    padding: 0;
  }

  /* Set a height for the container or adjust as needed */
  .container {
    min-height: 100vh; /* 100% of the viewport height */
  }

  /* Add any other global styles here */
`;
