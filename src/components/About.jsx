import React from "react";
import styles from "../style";

const About = () => (
  <section
    id="about"
    className={`${styles.marginY} ${styles.flexCenter} flex md:flex-row flex-col`}
  >
    <div className={`flex-2  flex-col xl:px-0 sm:px-16 px-6`}>
      <h1
        className={`${styles.flexCenter} flex-2 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]`}
      >
        About
      </h1>
      <p
        className={`${styles.paragraph} ${styles.marginY} text-center max-w-6xl`}
      >
        I'm a Respiratory Therapist turned Web Developer. At 30 years old I
        decided to leave my job and pursue my passion of working in web
        development. I completed an intensive web development bootcamp at
        Fullstack Academy where I sharpened my coding abilities. I now spend my
        time creating, designing, and coding my way through new projects, taking
        on any challenge I can.
      </p>
    </div>
  </section>
);

export default About;
