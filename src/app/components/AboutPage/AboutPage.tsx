import { LANG_LIST, LIST_INFO, TAGLINE } from "./AboutPage.const";
import styles from "./AboutPage.module.scss";

const fillList = (data: string[]): JSX.Element => (
  <ul className={styles.list}>
    {data.map((val, index) => (
      <li className={styles.listItem} key={index}>
        {val}
      </li>
    ))}
  </ul>
);

const fillLang = (data: string[][]): JSX.Element => (
  <ul className={styles.langList}>
    {data.map(([lang, level], index) => (
      <li className={styles.langListItem} key={index}>
        <span className={styles.langName}>{lang}</span>
        <span className={styles.langLevel}>{level}</span>
      </li>
    ))}
  </ul>
);

export const AboutPage = (): JSX.Element => {
  return (
    <>
      <div className={styles.block}>
        {fillList(LIST_INFO)}
        <p className={styles.text}>{TAGLINE}</p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>LANGUAGES</h3>
        {fillLang(LANG_LIST)}
      </div>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>CONTACTS</h3>
        {fillLang(LANG_LIST)}
      </div>
    </>
  );
};
