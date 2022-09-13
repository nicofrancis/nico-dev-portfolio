import React from "react";
import styles from "../style";

import {
  html,
  css,
  figma,
  javascript,
  node,
  postgresql,
  react,
  tailwind,
  github,
  prisma,
  git,
  express,
} from "../assets";

const Skills = () => (
  <section id="about" className={`flex flex-1 flex-col ${styles.paddingY}`}>
    <div className={`flex-2  flex-col xl:px-0 sm:px-16 px-6`}>
      <h1
        className={`flex-2 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ${styles.flexCenter}`}
      >
        Skills
      </h1>
      <p className={`${styles.paragraph} mt-5 mb-5 ${styles.flexCenter}`}>
        This is a list of frameworks and languages I am experienced with:
      </p>
    </div>

    <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center py-8">
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={html} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>HTML</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={css} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>CSS</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>JAVASCRIPT</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={react} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>REACT</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={figma} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>FIGMA</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={node} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>NODE JS</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={postgresql} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>POSTGRESQL</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-24 h-16 mx-auto" src={tailwind} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>TAILWINDCSS</p>
      </div>
      <div className=" hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={github} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>GITHUB</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={prisma} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>PRISMA</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={git} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>GIT</p>
      </div>
      <div className="hover:scale-110 duration-500">
        <img className="w-20 mx-auto" src={express} alt="HTML icon" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>EXPRESS JS</p>
      </div>
    </div>
  </section>
);

export default Skills;
