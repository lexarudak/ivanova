import { Project } from "../Portfolio/Portfolio.interface";
import styles from "./Slider.module.scss";

export const Slider = ({
  currentPage,
  currentProject,
  setCurrentPage,
  setCurrentProject,
  projectList,
}: {
  currentPage: number;
  currentProject: string;
  setCurrentPage: (pageNumber: number) => void;
  setCurrentProject: (pageNumber: string) => void;
  projectList: Project[];
}): JSX.Element => {
  return <div className={styles.slider}>Slider</div>;
};
