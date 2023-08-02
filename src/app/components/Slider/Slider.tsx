"use client";
import { useRef, useState } from "react";
import { PhotoBlock } from "../PhotoBlock/PhotoBlock";
import { Project } from "../Portfolio/Portfolio.interface";
import styles from "./Slider.module.scss";
import { Dots } from "../Dots/Dots";
import classNames from "classnames";

interface SliderProps {
  currentPage: number;
  currentProject: string;
  setCurrentPage: (pageNumber: number) => void;
  setCurrentProject: (pageNumber: string) => void;
  projectList: Project[];
}

const SIZE_LINE = 860;
const SMALL_SIZE = 4;
const LARGE_SIZE = 6;

const isItemCorrect = (
  index: number,
  size: number,
  currentPage: number
): boolean => index >= size * (currentPage - 1) && index < size * currentPage;

const makeEmptyArr = (pages: number): number[] => new Array(pages).fill(1);

const fillPage = (
  props: SliderProps,
  size: number,
  pageNumber: number,
  activeBlock: string,
  setActiveBlock: (activeBlock: string) => void
): JSX.Element[] => {
  const arr: JSX.Element[] = [];
  props.projectList.forEach(({ title, year, photos }, index) => {
    if (isItemCorrect(index, size, pageNumber)) {
      arr.push(
        <PhotoBlock
          key={title}
          {...{
            activeBlock,
            title,
            year,
            photos,
            bg: photos[0],
            onClickHandler: props.setCurrentProject,
            overHandler: setActiveBlock,
          }}
        />
      );
    }
  });
  return arr;
};

const hopePage = (
  currentPage: number,
  setCurrentPage: (pageToSet: number) => void,
  lastPage: number,
  prev = false
): void => {
  if (!prev && currentPage < lastPage) setCurrentPage(currentPage + 1);
  if (prev && currentPage > 1) setCurrentPage(currentPage - 1);
};

const makePages = (
  props: SliderProps,
  pageAmount: number,
  size: number,
  activeBlock: string,
  setActiveBlock: (activeBlock: string) => void
): JSX.Element[] => {
  const emptyArr = makeEmptyArr(pageAmount);
  return emptyArr.map((_, ind) => {
    return (
      <div
        className={styles.page}
        key={ind}
        style={{ translate: `${(ind - props.currentPage + 1) * 100}% 0px` }}
      >
        {fillPage(props, size, ind + 1, activeBlock, setActiveBlock)}
      </div>
    );
  });
};

export const Slider = (props: SliderProps): JSX.Element => {
  const { projectList, currentPage, setCurrentPage, currentProject } = props;
  const [activeBlock, setActiveBlock] = useState("");
  const [size, setSize] = useState(
    window.innerWidth >= SIZE_LINE ? LARGE_SIZE : SMALL_SIZE
  );
  const lastPage = Math.ceil(projectList.length / size);
  const goToNextPage = hopePage.bind(
    null,
    currentPage,
    setCurrentPage,
    lastPage
  );
  const goToPrevPage = goToNextPage.bind(null, true);

  window.onresize = () => {
    if (window.innerWidth < SIZE_LINE && size === LARGE_SIZE)
      setSize(SMALL_SIZE);
    if (window.innerWidth >= SIZE_LINE && size === SMALL_SIZE)
      setSize(LARGE_SIZE);
    if (currentPage > lastPage) setCurrentPage(lastPage);
  };

  const isScroll = useRef(false);
  const initTouch = useRef(0);

  return (
    <div className={styles.container}>
      <div
        className={styles.slider}
        onTouchStart={(e) => {
          initTouch.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          console.log(initTouch.current, e.changedTouches[0].clientX);
          if (initTouch.current - e.changedTouches[0].clientX > 50)
            goToNextPage();
          if (initTouch.current - e.changedTouches[0].clientX < -50)
            goToPrevPage();
        }}
        onWheel={(e) => {
          if (!isScroll.current && e) {
            isScroll.current = true;
            setTimeout(() => (isScroll.current = false), 1000);
            if (e.deltaY >= 2) goToNextPage();
            if (e.deltaY <= -2) goToPrevPage();
          }
        }}
      >
        {makePages(props, lastPage, size, activeBlock, setActiveBlock)}
      </div>
      <div className={classNames(styles.dots, currentProject && styles.hide)}>
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
