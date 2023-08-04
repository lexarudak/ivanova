"use client";
import classNames from "classnames";
import { useState } from "react";
import { ProjectTitle } from "../ProjectTitle/ProjectTitle";
import { fillSlider } from "./Slider.helper";
import { SliderProps } from "./Slider.interface";
import styles from "./Slider.module.scss";

export const Slider = ({
  setCurrentProject,
  projectList,
  currentProject,
  setScrollTo,
}: SliderProps): JSX.Element => {
  const [activeBlock, setActiveBlock] = useState("");
  const [hoverName, setHoverName] = useState("");
  const [projectMode, setProjectMode] = useState(false);
  const openProject = (name: string): void => {
    setCurrentProject(name);
    setProjectMode(true);
  };
  const closeProject = (name: string): void => {
    setCurrentProject(name);
    setProjectMode(false);
  };
  const setActivePage = (name: string): void => {
    setActiveBlock(name);
    name && setHoverName(name);
  };

  return (
    <>
      <ProjectTitle
        currentProject={hoverName}
        hideStile={styles.hideName}
        activeStile={
          currentProject || activeBlock ? styles.activeName : undefined
        }
        setCurrentProject={closeProject}
      />
      <div
        className={classNames(styles.container, currentProject && styles.hide)}
      >
        <div className={classNames(styles.slider, projectMode && styles.hide)}>
          {fillSlider(
            projectList,
            currentProject,
            openProject,
            setActivePage,
            setScrollTo
          )}
        </div>
      </div>
    </>
  );
};
