"use client";
import classNames from "classnames";
import { useRef, useState } from "react";
import { Dots } from "../Dots/Dots";
import styles from "./Slider.module.scss";
import { SliderProps } from "./Slider.interface";
import {
  correctDots,
  firstTouchHandler,
  hopePage,
  initSize,
  lastTouchHandler,
  makePages,
  onWheelHandler,
  resizeHandle,
  sizeDown,
  sizeUp,
} from "./Slider.helper";

export const Slider = ({
  setCurrentProject,
  projectList,
  currentProject,
}: SliderProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeBlock, setActiveBlock] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  const [size, setSize] = useState(initSize);
  const lastPage = Math.ceil(projectList.length / size);
  const initTouch = useRef(0);
  const goToNextPage = hopePage.bind(
    null,
    currentPage,
    setCurrentPage,
    lastPage
  );

  window.onresize = resizeHandle.bind(null, [
    sizeDown.bind(null, size, setSize),
    sizeUp.bind(null, size, setSize),
    correctDots.bind(null, currentPage, lastPage, setCurrentPage),
  ]);

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        onTouchStart={(e) => {
          firstTouchHandler(e.changedTouches, initTouch);
        }}
        onTouchEnd={(e) =>
          lastTouchHandler(e.changedTouches, initTouch, goToNextPage)
        }
        onWheel={(e) =>
          onWheelHandler(isScroll, setIsScroll, e.deltaY, goToNextPage)
        }
      >
        {makePages(
          { setCurrentProject, projectList, currentProject },
          currentPage,
          lastPage,
          size,
          activeBlock,
          setActiveBlock
        )}
      </div>
      <div className={classNames(styles.dots)}>
        <Dots
          {...{
            currentPage,
            setCurrentPage,
            lastPage,
          }}
        />
      </div>
    </div>
  );
};
