import { InfoData } from "@/models/intaerface";
import styles from "./InfoPage.module.scss";

const fillInfoPage = (data: InfoData[]): JSX.Element[] =>
  data.map(({ text, title, bold, link }, index) => (
    <div className={styles.section} key={index}>
      {title && <p className={styles.bold}>{title}</p>}
      {link && (
        <a className={styles.link} href={link} target="_blank">
          {link}
        </a>
      )}
      <p className={styles.regular}>{text}</p>
      {bold && <p className={styles.bold}>{bold}</p>}
    </div>
  ));

export const InfoPage = ({ data }: { data: InfoData[] }): JSX.Element => {
  return <div className={styles.page}>{fillInfoPage(data)}</div>;
};
