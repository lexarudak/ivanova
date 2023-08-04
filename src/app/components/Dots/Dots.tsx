import classNames from "classnames";
import styles from "./Dots.module.scss";

interface DotsProps {
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
  lastPage: number;
}

const fillDots = ({
  currentPage,
  setCurrentPage,
  lastPage,
}: DotsProps): JSX.Element[] => {
  return new Array(lastPage)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={classNames(
          styles.dot,
          index + 1 === currentPage && styles.active
        )}
      />
    ));
};

export const Dots = ({
  currentPage,
  setCurrentPage,
  lastPage,
}: DotsProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {fillDots({ currentPage, setCurrentPage, lastPage })}
    </div>
  );
};
