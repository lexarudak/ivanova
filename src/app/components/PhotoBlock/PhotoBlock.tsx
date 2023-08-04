import classNames from "classnames";
import styles from "./PhotoBlock.module.scss";
import { MotionImage } from "../MImage/MImage";

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
    <MotionImage
      width={240}
      height={180}
      quality={70}
      placeholder="blur"
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      alt={bg || ""}
      blurDataURL={bg || "/basic_house_img.svg"}
      src={bg || "/basic_house_img.svg"}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className={classNames(styles.item, bg && styles.photo)}
      onClick={onClickHandler}
    />
  );
};
