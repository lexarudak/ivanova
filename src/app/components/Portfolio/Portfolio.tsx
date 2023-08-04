import { useEffect, useState } from "react";
import { Slider } from "../Slider/Slider";
import { Project } from "./Portfolio.interface";
import styles from "./Portfolio.module.scss";
import { Disc } from "../Disc/Disc";
import { PhotoPopup } from "../PhotoPopup/PhotoPopup";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";

export const Portfolio = ({
  projectList,
}: {
  projectList: Project[];
}): JSX.Element => {
  const [currentProject, setCurrentProject] = useState("");
  const [scrollTo, setScrollTo] = useState("");
  const [disc, setDisc] = useState("");
  useEffect(() => {
    currentProject && setDisc(currentProject);
  }, [currentProject, setDisc]);

  return (
    <div className={styles.container}>
      <Slider
        {...{
          currentProject,
          setCurrentProject,
          projectList,
          setScrollTo,
        }}
      />
      <AnimatePresence>
        {currentProject && <Disc title={disc} />}
      </AnimatePresence>
      {scrollTo &&
        createPortal(
          <PhotoPopup
            title={currentProject}
            scrollTo={scrollTo}
            closeFn={setScrollTo.bind(null, "")}
          />,
          document.body
        )}
    </div>
  );
};
