import { PhotoBlock } from "../PhotoBlock/PhotoBlock";
import { LARGE_SIZE, SIZE_LINE, SMALL_SIZE } from "./Slider.const";
import styles from "./Slider.module.scss";
import { SliderProps } from "./Slider.interface";
import { MutableRefObject, TouchList } from "react";

export const initSize =
  window.innerWidth >= SIZE_LINE ? LARGE_SIZE : SMALL_SIZE;

export const isItemCorrect = (
  index: number,
  size: number,
  currentPage: number
): boolean => index >= size * (currentPage - 1) && index < size * currentPage;

export const makeEmptyArr = (pages: number): number[] =>
  new Array(pages).fill(1);

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

export const hopePage = (
  currentPage: number,
  setCurrentPage: (pageToSet: number) => void,
  lastPage: number,
  prev = false
): void => {
  if (!prev && currentPage < lastPage) setCurrentPage(currentPage + 1);
  if (prev && currentPage > 1) setCurrentPage(currentPage - 1);
};

export const sizeDown = (
  size: number,
  setSize: (size: number) => void
): void => {
  if (window.innerWidth < SIZE_LINE && size === LARGE_SIZE) setSize(SMALL_SIZE);
};
export const sizeUp = (size: number, setSize: (size: number) => void): void => {
  if (window.innerWidth >= SIZE_LINE && size === SMALL_SIZE)
    setSize(LARGE_SIZE);
};

export const correctDots = (
  currentPage: number,
  lastPage: number,
  setCurrentPage: (page: number) => void
): void => {
  if (currentPage > lastPage) setCurrentPage(lastPage);
};

export const resizeHandle = (fnArr: (() => void)[]): void => {
  fnArr.forEach((fn) => {
    fn();
  });
};

export const makePages = (
  props: SliderProps,
  currentPage: number,
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
        style={{ translate: `${(ind - currentPage + 1) * 100}% 0px` }}
      >
        {fillPage(props, size, ind + 1, activeBlock, setActiveBlock)}
      </div>
    );
  });
};

export const firstTouchHandler = (
  touchList: TouchList,
  initTouch: MutableRefObject<number>
): void => {
  initTouch.current = touchList[0].clientX;
};

export const lastTouchHandler = (
  touchList: TouchList,
  initTouch: MutableRefObject<number>,
  goToNextPage: (prev?: boolean) => void
): void => {
  if (initTouch.current - touchList[0].clientX > 50) goToNextPage();
  if (initTouch.current - touchList[0].clientX < -50) goToNextPage(true);
};

export const onWheelHandler = (
  isScroll: boolean,
  setIsScroll: (isScroll: boolean) => void,
  deltaY: number,
  goToNextPage: (prev?: boolean) => void
): void => {
  if (!isScroll && deltaY) {
    setIsScroll(true);
    setTimeout(() => setIsScroll(false), 1000);
    if (deltaY >= 2) goToNextPage();
    if (deltaY <= -2) goToNextPage(true);
  }
};
