import { projectMap } from "@/models/projects";
import styles from "./Disc.module.scss";
import { splitTextToP } from "@/models/helpers";
import classNames from "classnames";
import { motion } from "framer-motion";

export const Disc = ({ title }: { title: string }): JSX.Element => {
  const proj = projectMap.get(title);
  if (!proj) return <></>;
  const { subtitle, text } = proj;
  return (
    <motion.div
      className={classNames(styles.container)}
      transition={{ duration: 0.6 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h4 className={styles.subtitle}>{subtitle}</h4>
      {splitTextToP(text)}
    </motion.div>
  );
};
