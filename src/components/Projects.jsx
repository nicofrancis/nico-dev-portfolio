import React from "react";
import styles from "../style";

const Projects = () => (
  <div id="projects" className="w-full md:h-screen">
    <div>
      <div className={`flex-2  flex-col xl:px-0 sm:px-16 px-6`}>
        <h1
          className={`flex-2 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ${styles.flexCenter}`}
        >
          Projects
        </h1>
        <p
          className={`${styles.paragraph} ${styles.marginY} ${styles.flexCenter}`}
        >
          Check out some of my recent work.
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
