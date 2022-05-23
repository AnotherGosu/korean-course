import styles from "./Audience.module.scss";

import Section from "components/common/Section";
import Card from "components/common/Card";

export default function Audience() {
  return (
    <Section heading="Для кого этот курс" id="audience">
      <div className={styles.container}>
        {levels.map((level) => (
          <Card key={level.heading} {...level} />
        ))}
      </div>
    </Section>
  );
}

const levels = [
  {
    image: "/beginner.png",
    heading: "Для начального уровня",
    text: "За 1 урок научитесь читать и писать на корейском. За неделю сможете уже составлять предложения",
  },
  {
    image: "/intermidiate.png",
    heading: "Для среднего уровня",
    text: "Повысите уровень своих знаний и навыков. Узнаете много новых грамматик и слов",
  },
];
