import { useState } from "react";
import { Project } from "./Portfolio.interface";
import styles from "./Portfolio.module.scss";
import { Slider } from "../Slider/Slider";
import classNames from "classnames";
import { projectMap } from "@/models/projects";

export const Portfolio = ({
  projectList,
}: {
  projectList: Project[];
}): JSX.Element => {
  const [currentProject, setCurrentProject] = useState("");
  const projectInfo: Project | undefined = projectMap.get(currentProject);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.name, currentProject && styles.active)}
        onClick={() => setCurrentProject("")}
      >
        <h3 className={styles.title}>{currentProject}</h3>
        <h4 className={styles.year}>{projectInfo && projectInfo.year}</h4>
      </div>
      <Slider
        {...{
          currentProject,
          setCurrentProject,
          projectList,
        }}
      />
    </div>
  );
};
