"use client";
import styles from "./Nav.module.scss";
import { PageNames } from "@/models/const";
import { NavTitle } from "../NavTitle/NavTitle";
import classNames from "classnames";

const fillNav = (
  names: PageNames[],
  openPopupFn: (name: PageNames, ref: HTMLDivElement) => void,
  currentPage: PageNames
): JSX.Element[] =>
  names.map((name, index) => (
    <NavTitle
      key={index}
      name={name}
      onClickFn={openPopupFn}
      currentPage={currentPage}
    />
  ));

export const Nav = ({
  isPopupOpen,
  openPopupFn,
  currentPage,
}: {
  isPopupOpen: boolean;
  currentPage: PageNames;
  openPopupFn: (name: PageNames, ref: HTMLDivElement) => void;
}): JSX.Element => {
  return (
    <nav className={classNames(styles.nav, isPopupOpen && styles.hide)}>
      {fillNav(Object.values(PageNames), openPopupFn, currentPage)}
    </nav>
  );
};
