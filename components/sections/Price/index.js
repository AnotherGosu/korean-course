import styles from "./Price.module.css";
import Image from "next/image";

import Section from "../../common/Section";

export default function Price() {
  return (
    <Section heading="Стоимость курса">
      <div className={styles.container}>
        <div className={styles.image} />
        <span className={styles.value}>3$</span>
        <div className={styles.text}>
          <p>1 урок = 1 чашка кофе</p>
          <p>Кофе закочится, знания остануться</p>
        </div>
      </div>
    </Section>
  );
}
