"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./NavTitle.module.scss";
import classNames from "classnames";
import { PageNames } from "@/models/const";

export const NavTitle = ({
  name,
  isOpen,
  currentPage,
  onClickFn,
}: {
  name: PageNames;
  isOpen?: boolean;
  currentPage?: PageNames;
  onClickFn: (name: PageNames, titleRef: HTMLDivElement) => void;
}): JSX.Element => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [isTitleLoaded, setIsTitleLoaded] = useState(false);

  useEffect(() => {
    setIsTitleLoaded(true);
  }, []);

  const onClickHandler = (): void => {
    const ref = titleRef.current;
    ref && onClickFn(name, ref);
    setIsTitleLoaded(false);
  };

  return (
    <h2
      className={classNames(
        styles.title,
        isOpen && isTitleLoaded && styles.active,
        currentPage === name && styles.hide
      )}
      onClick={onClickHandler}
      ref={titleRef}
    >
      {name}
    </h2>
  );
};
