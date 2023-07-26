"use client";
import { useState } from "react";
import { MainInfo } from "./components/MainInfo/MainInfo";
import { Nav } from "./components/Nav/Nav";
import styles from "./page.module.scss";
import { Popup } from "./components/Popup/Popup";
import { PageNames } from "@/models/const";

export default function Home(): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageNames>(PageNames.empty);
  const [currentTitle, setCurrentTitle] = useState<HTMLDivElement>();

  const openPopupFn = (name: PageNames, ref: HTMLDivElement): void => {
    setCurrentPage(name);
    setCurrentTitle(ref);
    setIsPopupOpen(true);
  };

  const closePopup = (): void => {
    setIsPopupOpen(false);
    setTimeout(() => setCurrentPage(PageNames.empty), 800);
    setTimeout(() => setCurrentTitle(undefined), 800);
  };

  return (
    <main className={styles.main}>
      <MainInfo isPopupOpen={isPopupOpen} />
      <Nav
        openPopupFn={openPopupFn}
        isPopupOpen={isPopupOpen}
        currentPage={currentPage}
      />
      {currentTitle && (
        <Popup
          name={currentPage}
          currentTitle={currentTitle}
          closePopupFn={closePopup}
        />
      )}
    </main>
  );
}
