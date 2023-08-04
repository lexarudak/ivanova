import { projectMap } from "@/models/projects";
import styles from "./PhotoPopup.module.scss";
import classNames from "classnames";
import { useEffect } from "react";
import Image from "next/image";

const fillPopup = (title: string): JSX.Element => {
  const proj = projectMap.get(title);
  if (!proj) return <div className={styles.frame} />;

  const { photos } = proj;
  return (
    <div className={styles.frame}>
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
    >
      {fillPopup(title)}
    </div>
  );
};
