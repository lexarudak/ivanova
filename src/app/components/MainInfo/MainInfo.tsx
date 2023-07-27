import Image from "next/image";
import styles from "./MainInfo.module.scss";
import { IMG_ALT, IMG_PATH, INFO_TEXT } from "./MainInfo.const";
import { splitTextToP } from "@/models/helpers";
import classNames from "classnames";

export const MainInfo = ({
  isPopupOpen,
}: {
  isPopupOpen: boolean;
}): JSX.Element => {
  return (
    <div className={classNames(styles.container, isPopupOpen && styles.hide)}>
      <Image src={IMG_PATH} alt={IMG_ALT} width={350} height={233} />
      {splitTextToP(INFO_TEXT, styles.text)}
    </div>
  );
};
