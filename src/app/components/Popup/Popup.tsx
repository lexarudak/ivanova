"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Popup.module.scss";
import classNames from "classnames";
import { Placeholder } from "../Placeholder/Placeholder";
import { getRefTop } from "@/models/helpers";
import { NavTitle } from "../NavTitle/NavTitle";
import { pages } from "@/models/pages";
import { PageNames } from "@/models/const";

export const Popup = ({
  name,
  currentTitle,
  closePopupFn,
}: {
  name: PageNames;
  currentTitle: HTMLDivElement;
  closePopupFn: () => void;
}): JSX.Element => {
  const [isPopupLoaded, setIsPopupLoaded] = useState(false);
  const [isPopupStartClose, setIsPopupStartClose] = useState(false);
  const { top } = currentTitle.getBoundingClientRect();
  const placeholderRef = useRef<HTMLDivElement>(null);
  const closePopup = (): void => {
    setIsPopupStartClose(true);
    setTimeout(() => setIsPopupLoaded(false), 800);
    closePopupFn();
  };

  useEffect(() => {
    setIsPopupLoaded(true);
  }, []);

  return (
    <div className={classNames(styles.popup, isPopupLoaded && styles.active)}>
      <section className={styles.container}>
        <Placeholder refObj={placeholderRef} />
        <div
          className={styles.titleWrapper}
          style={{
            top:
              isPopupLoaded && !isPopupStartClose
                ? getRefTop(placeholderRef)
                : top,
          }}
        >
          <NavTitle name={name} onClickFn={closePopup} isOpen />
        </div>
        <div
          className={classNames(
            styles.dataWrapper,
            isPopupLoaded && !isPopupStartClose && styles.active
          )}
        >
          {pages.get(name)}
        </div>
      </section>
    </div>
  );
};
