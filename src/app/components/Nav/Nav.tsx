"use client";
import { useState } from "react";
import styles from "./Nav.module.scss";
import { createPortal } from "react-dom";
import { POPUP_CONTAINER, PageNames } from "@/models/const";
import { Popup } from "../Popup/Popup";
import { NavTitle } from "../NavTitle/NavTitle";

export const Nav = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<PageNames>(PageNames.empty);
  const [currentTitle, setCurrentTitle] = useState<HTMLDivElement>();
  const openPopupFn = (name: PageNames, ref: HTMLDivElement): void => {
    setCurrentPage(name);
    setCurrentTitle(ref);
  };

  return (
    <>
      {currentPage &&
        currentTitle &&
        createPortal(
          <Popup
            name={currentPage}
            currentTitle={currentTitle}
            closePopupFn={setCurrentPage.bind(null, PageNames.empty)}
          />,
          document.getElementById(POPUP_CONTAINER) || document.body
        )}
      <nav className={styles.nav}>
        <NavTitle name={PageNames.education} onClickFn={openPopupFn} />
        <NavTitle name={PageNames.skills} onClickFn={openPopupFn} />
        <NavTitle name={PageNames.experience} onClickFn={openPopupFn} />
        <NavTitle name={PageNames.about} onClickFn={openPopupFn} />
        <NavTitle name={PageNames.portfolio} onClickFn={openPopupFn} />
      </nav>
      ;
    </>
  );
};
