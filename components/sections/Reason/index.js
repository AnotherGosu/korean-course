import styles from "./Reason.module.css";

import Section from "../../common/Section";

export default function Reason() {
  return (
    <Section heading="Зачем нужен курс">
      <div className={styles.container}>
        <div className={styles.subsectionTop}>
          <div className={styles.imageTop} />
          <div className={styles.troubles}>
            <p>Учить язык самостоятельно бывает непросто из-за:</p>
            <ul className={styles.list}>
              <li>недостатка дисциплины</li>
              <li>отсутствия информации о хороших учебниках</li>
              <li>сложности новых грамматик и слов</li>
            </ul>
          </div>
        </div>
        <div className={styles.subsectionBottom}>
          <p>
            Я сама сталкивалась с этими проблемами, поэтому сделала курс
            наиболее удобным и систематически грамотным
          </p>
          <div className={styles.imageBottom} />
        </div>
      </div>
    </Section>
  );
}
