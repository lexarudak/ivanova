import styles from "./MainInfo.module.scss";
import { IMG_ALT, INFO_TEXT } from "./MainInfo.const";
import { splitTextToP } from "@/models/helpers";
import classNames from "classnames";
import IMG from "../../../../public/ivanova.jpg";
import Image from "next/image";

export const MainInfo = ({
  isPopupOpen,
}: {
  isPopupOpen: boolean;
}): JSX.Element => {
  return (
    <div className={classNames(styles.container, isPopupOpen && styles.hide)}>
      <Image
        src={IMG}
        alt={IMG_ALT}
        className={styles.img}
        priority
        placeholder="blur"
      />
      {splitTextToP(INFO_TEXT, styles.text)}
    </div>
  );
};
