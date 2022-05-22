import styles from "./Included.module.css";

import Section from "../../common/Section";

export default function Included() {
  return (
    <Section heading="Что включено в курс">
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>программа обучения</li>
          <li>постоянный доступ к материалам</li>
          <li>оперативная обратная связь</li>
          <li>видеозаписи всех уроков</li>
          <li>полный словарь базовых фраз</li>
          <li>подборка материалов для практики вне урока</li>
        </ul>
        <div className={styles.image} />
      </div>
    </Section>
  );
}
