import classNames from "classnames";
import styles from "./PhotoBlock.module.scss";

const BASE_IMG = "/public/basic_house_img.svg";

export const PhotoBlock = ({
  title,
  year,
  bg,
  onClickHandler,
  overHandler,
  activeBlock,
}: {
  title: string;
  activeBlock: string;
  year?: string;
  bg?: string;
  onClickHandler: (title: string) => void;
  overHandler: (title: string) => void;
}): JSX.Element => {
  return (
    <div
      onMouseEnter={() => overHandler(title)}
      onMouseLeave={() => overHandler("")}
      className={classNames(styles.item, activeBlock !== title && styles.hide)}
      style={{
        backgroundImage: `url(${bg || BASE_IMG})`,
      }}
      onClick={() => onClickHandler(title)}
    >
      {year && (
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.year}>{year}</p>
        </div>
      )}
    </div>
  );
};
