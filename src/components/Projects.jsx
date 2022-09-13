import React from "react";
import styles from "../style";
import { project } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="w-full md:h-screen">
      <div
        key={project.id}
        className="mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className={`flex-2 flex-col xl:px-0 sm:px-16 px-6`}>
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
          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {/* Grid Item */}
            {project.map((project, index) => (
              <div>
                <img
                  src={project.img}
                  className="rounded-md flex justify-center items-center mx-auto content-div transition duration-300 hover:scale-105 "
                ></img>
                <p className={`${styles.paragraph} ${styles.heading3}`}>
                  {project.title}
                </p>
                <p className={`${styles.paragraph} ${styles.marginX}`}>
                  {project.description}
                </p>

                <a href={project.site}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href={project.github}>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
