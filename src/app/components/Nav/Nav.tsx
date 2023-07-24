import styles from "./Nav.module.scss";

export const Nav = (): JSX.Element => {
  return  <nav className={styles.nav}>
            <button className={styles.btn}>EDUCATION</button>
            <button className={styles.btn}>SKILLS</button>
            <button className={styles.btn}>EXPERIENCE</button>
            <button className={styles.btn}>ABOUT ME</button>
            <button className={styles.btn}>PORTFOLIO</button>
          </nav>;
};
