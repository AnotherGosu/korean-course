import styles from "./Price.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Section from "components/common/Section";

export default function Price() {
  return (
    <Section heading="Стоимость курса" id="price">
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.text}>
          <AnimationOnScroll
            animateIn="animate__shakeY"
            animateOnce
            initiallyVisible
          >
            <span className={styles.value}>3$</span>
          </AnimationOnScroll>
          <p>1 урок = 1 чашка кофе</p>
          <p>Кофе закочится, знания остануться</p>
        </div>
      </div>
    </Section>
  );
}
