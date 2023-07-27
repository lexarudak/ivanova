import { useState } from "react";
import { Project } from "./Portfolio.interface";
import styles from "./Portfolio.module.scss";
import { Slider } from "../Slider/Slider";

export const Portfolio = (projectList: Project[]): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProject, setCurrentProject] = useState("");
  const projectMap = new Map();
  return (
    <div className={styles.container}>
      <Slider
        {...{
          currentPage,
          currentProject,
          setCurrentPage,
          setCurrentProject,
          projectList,
        }}
      />
    </div>
  );
};
