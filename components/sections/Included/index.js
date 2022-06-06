import styles from "./Included.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Section from "components/common/Section";
import Option from "components/common/Option";

export default function Included() {
  return (
    <Section heading="Что включено в курс" id="included">
      <div className={styles.container}>
        <ul className={styles.list}>
          {includedItems.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </ul>
        <AnimationOnScroll animateIn="animate__rotateInDownRight" animateOnce>
          <div className={styles.image} />
        </AnimationOnScroll>
      </div>
    </Section>
  );
}

const includedItems = [
  "Программа обучения",
  "Постоянный доступ к материалам",
  "Оперативная обратная связь",
  "Видеозаписи всех уроков",
  "Словарь базовых фраз",
  "Подборка материалов для практики вне урока",
];
