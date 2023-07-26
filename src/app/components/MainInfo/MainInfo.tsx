import Image from "next/image";
import styles from "./MainInfo.module.scss";
import { INFO_TEXT } from "./MainInfo.const";
import { splitTextToP } from "@/models/helpers";
import classNames from "classnames";

export const MainInfo = ({
  isPopupOpen,
}: {
  isPopupOpen: boolean;
}): JSX.Element => {
  return (
    <div className={classNames(styles.container, isPopupOpen && styles.hide)}>
      <Image
        src={"/ivanova.jpg"}
        alt={"Darya Ivanova photo"}
        width={350}
        height={233}
      />
      {splitTextToP(INFO_TEXT, styles.text)}
    </div>
  );
};
