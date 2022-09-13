import React from "react";
import { project } from "../constants";

const ProjectCard = () => {
  return (
    <div>
      <h1 className="text-white">{project.id}</h1>
    </div>
  );
};

export default ProjectCard;
