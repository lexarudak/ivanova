import classNames from "classnames";
import styles from "./ProjectTitle.module.scss";
import { projectMap } from "@/models/projects";
import { Project } from "../Portfolio/Portfolio.interface";

export const ProjectTitle = ({
  currentProject,
  setCurrentProject,
  hideStile,
  activeStile,
}: {
  currentProject: string;
  setCurrentProject?: (name: string) => void;
  hideStile?: string;
  activeStile?: string;
}): JSX.Element => {
  const projectInfo: Project | undefined = projectMap.get(currentProject);
  return (
    <div
      className={classNames(styles.name, hideStile, activeStile)}
      onClick={() => setCurrentProject && setCurrentProject("")}
    >
      <h4 className={styles.year}>{projectInfo && projectInfo.year}</h4>
      <h3 className={styles.title}>{currentProject}</h3>
    </div>
  );
};
