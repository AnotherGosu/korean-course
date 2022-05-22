import styles from "./Audience.module.css";

import Section from "../../common/Section";

export default function Audience() {
  return (
    <Section heading="Для кого этот курс">
      <div className={styles.container}>
        <div className={styles.level}>
          <div className={`${styles.image} ${styles.imageBeginner}`} />
          <h3 className={styles.heading}>Для начального уровня</h3>
          <p>
            За 1 урок научитесь читать и писать на корейском.
            <br />
            За неделю сможете уже составлять предложения
          </p>
        </div>
        <div className={styles.level}>
          <div className={`${styles.image} ${styles.imageIntermidiate}`} />
          <h3 className={styles.heading}>Для среднего уровня</h3>
          <p>
            Повысите уровень своих знаний и навыков.
            <br />
            Узнаете много новых грамматик и слов
          </p>
        </div>
      </div>
    </Section>
  );
}
