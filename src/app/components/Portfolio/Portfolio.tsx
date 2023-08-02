import { useState } from "react";
import { Project } from "./Portfolio.interface";
import styles from "./Portfolio.module.scss";
import { Slider } from "../Slider/Slider";

export const Portfolio = ({
  projectList,
}: {
  projectList: Project[];
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProject, setCurrentProject] = useState("");
  return (
    <Slider
      {...{
        currentPage,
        currentProject,
        setCurrentPage,
        setCurrentProject,
        projectList,
      }}
    />
  );
};
