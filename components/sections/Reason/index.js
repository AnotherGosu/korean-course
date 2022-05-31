import styles from "./Reason.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Section from "components/common/Section";
import List from "components/common/List";

export default function Reason() {
  return (
    <Section heading="Зачем нужен курс" id="reason">
      <div className={styles.container}>
        <p>Учить язык самостоятельно бывает непросто из-за:</p>
        <List items={troubles} isMinusSymbol />
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

const troubles = [
  "недостатка дисциплины",
  "отсутствия необходимой информации",
  "сложности новых грамматик и слов",
];
