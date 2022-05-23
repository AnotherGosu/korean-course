import styles from "./Reason.module.scss";

import Section from "components/common/Section";
import List from "components/common/List";

export default function Reason() {
  return (
    <Section heading="Зачем нужен курс" id="reason">
      <div className={styles.container}>
        <div className={styles.subsectionTop}>
          <div className={styles.imageTop} />
          <div className={styles.troubles}>
            <p>Учить язык самостоятельно бывает непросто из-за:</p>
            <List items={troubles} isMinusSymbol />
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

const troubles = [
  "недостатка дисциплины",
  "отсутствия информации о хороших учебниках",
  "сложности новых грамматик и слов",
];
