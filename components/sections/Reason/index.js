import styles from "./Reason.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Section from "components/common/Section";
import Option from "components/common/Option";

export default function Reason() {
  return (
    <Section heading="Зачем нужен курс" id="reason">
      <div className={styles.container}>
        <p>Учить язык самостоятельно бывает непросто из-за:</p>
        <ul className={styles.list}>
          {issues.map((issue) => (
            <Option key={issue} isRed>
              {issue}
            </Option>
          ))}
        </ul>
        <p className={styles.centeredText}>
          Я сама сталкивалась с этими проблемами, поэтому сделала курс наиболее
          удобным и систематически грамотным
        </p>
        <AnimationOnScroll animateIn="animate__jackInTheBox" animateOnce>
          <div className={styles.image} />
        </AnimationOnScroll>
      </div>
    </Section>
  );
}

const issues = [
  "Недостатка дисциплины",
  "Отсутствия необходимой информации",
  "Сложности новых грамматик",
];
