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
      <p className={`${styles.paragraph} ${styles.marginY} max-w-6xl`}>
        I'm Nico, a passionate web developer bringing you programming and design
        from the future. I am experienced in developing web applications. This
        includes brand identity, graphics and illustrations.
      </p>
    </div>
  </section>
);

export default About;
