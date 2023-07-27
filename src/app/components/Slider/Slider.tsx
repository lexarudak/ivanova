"use client";
import { useState } from "react";
import { PhotoBlock } from "../PhotoBlock/PhotoBlock";
import { Project } from "../Portfolio/Portfolio.interface";
import styles from "./Slider.module.scss";

const isItemCorrect = (
  index: number,
  size: number,
  currentPage: number
): boolean => index >= size * (currentPage - 1) && index < size * currentPage;

export const Slider = ({
  currentPage,
  currentProject,
  setCurrentPage,
  setCurrentProject,
  projectList,
  size = 6,
}: {
  currentPage: number;
  currentProject: string;
  setCurrentPage: (pageNumber: number) => void;
  setCurrentProject: (pageNumber: string) => void;
  projectList: Project[];
  size?: number;
}): JSX.Element => {
  const [activeBlock, setActiveBlock] = useState("");
  const fillPortfolioSlider = (): JSX.Element[] => {
    const arr: JSX.Element[] = [];
    projectList.forEach(({ title, year, photos }, index) => {
      if (isItemCorrect(index, size, currentPage)) {
        arr.push(
          <PhotoBlock
            key={title}
            {...{
              activeBlock,
              title,
              year,
              photos,
              bg: photos[0],
              onClickHandler: setCurrentProject,
              overHandler: setActiveBlock,
            }}
          />
        );
      }
    });
    return arr;
  };

  return <div className={styles.slider}>{fillPortfolioSlider()}</div>;
};
