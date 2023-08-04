import classNames from "classnames";
import styles from "./PhotoBlock.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

export const PhotoBlock = ({
  bg,
  onClickHandler,
  onMouseEnterHandler,
  onMouseLeaveHandler,
}: {
  bg?: string;
  onClickHandler: () => void;
  onMouseEnterHandler?: () => void;
  onMouseLeaveHandler?: () => void;
}): JSX.Element => {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
    >
      <Image
        width={240}
        height={180}
        quality={70}
        placeholder="blur"
        alt={bg || ""}
        blurDataURL={bg || "/basic_house_img.svg"}
        src={bg || "/basic_house_img.svg"}
        style={{ objectFit: "cover" }}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className={classNames(styles.item, bg && styles.photo)}
        onClick={onClickHandler}
      />
    </motion.div>
  );
};
