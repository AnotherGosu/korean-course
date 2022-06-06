import styles from "./Price.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Section from "components/common/Section";

export default function Price() {
  return (
    <Section heading="Стоимость курса" id="price">
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.textWrapper}>
          <div className={styles.valueWrapper}>
            <span>Урок = </span>
            <AnimationOnScroll
              animateIn="animate__shakeY"
              animateOnce
              initiallyVisible
            >
              <span className={styles.value}>3$</span>
            </AnimationOnScroll>
            <span>= Чашка кофе</span>
          </div>
          <p>Кофе закончится, знания останутся</p>
        </div>
      </div>
    </Section>
  );
}
