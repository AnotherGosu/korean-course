import styles from "./Price.module.css";
import Image from "next/image";

import Section from "../../common/Section";

export default function Price() {
  return (
    <Section heading="Стоимость курса">
      <div className={styles.container}>
        <div className={styles.subsectionTop}>
          <div className={styles.image} />
          <span className={styles.value}>3$</span>
        </div>
        <div className={styles.text}>
          <span>1 урок = 1 чашка кофе</span>
          <span>Кофе закочится, знания остануться</span>
        </div>
      </div>
    </Section>
  );
}
