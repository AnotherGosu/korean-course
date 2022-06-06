import styles from "./Levels.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Section from "components/common/Section";
import Card from "components/common/Card";

export default function Levels() {
  return (
    <Section heading="Для кого этот курс" id="levels">
      <div className={styles.container}>
        {levels.map((level) => (
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            key={level.heading}
            animateOnce
          >
            <Card {...level} />
          </AnimationOnScroll>
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
