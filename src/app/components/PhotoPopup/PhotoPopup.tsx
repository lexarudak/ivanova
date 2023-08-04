"use client";
import { projectMap } from "@/models/projects";
import styles from "./PhotoPopup.module.scss";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import Image from "next/image";

const fillPopup = (title: string): JSX.Element => {
  const proj = projectMap.get(title);
  if (!proj) return <div className={styles.frame} />;

  const { photos } = proj;
  return (
    <div className={styles.list}>
      {photos.map((photo, ind) => {
        return (
          <div className={styles.photo} key={ind} id={photo}>
            <Image
              style={{ objectFit: "contain" }}
              quality={70}
              width={1000}
              height={600}
              alt={photo}
              src={photo}
              priority
            />
          </div>
        );
      })}
    </div>
  );
};

export const PhotoPopup = ({
  title,
  scrollTo,
  closeFn,
}: {
  title: string;
  scrollTo: string;
  closeFn: () => void;
}): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView();
    }
  }, [scrollTo]);

  return (
    <div
      className={classNames(styles.containerA, scrollTo && styles.open)}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeFn();
      }}
      onScroll={() => console.log("s")}
    >
      <div
        ref={container}
        className={styles.frame}
        onWheel={(e) => {
          if (!e.deltaX) {
            const scrollStep = e.deltaY > 0 ? 20 : -20;
            if (container.current) container.current.scrollLeft += scrollStep;
          }
        }}
      >
        {fillPopup(title)}
      </div>
    </div>
  );
};
