import styles from "./Included.module.scss";

import Section from "components/common/Section";

import List from "components/common/List";

export default function Included() {
  return (
    <Section heading="Что включено в курс" id="included">
      <div className={styles.container}>
        <List items={includedItems} style={{ gap: "25px" }} />
        <div className={styles.image} />
      </div>
    </Section>
  );
}

const includedItems = [
  "Программа обучения",
  "Постоянный доступ к материалам",
  "Оперативная обратная связь",
  "Видеозаписи всех уроков",
  "Полный словарь базовых фраз",
  "Подборка материалов для практики вне урока",
];
