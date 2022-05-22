import styles from "./Benefits.module.css";

import Section from "../../common/Section";

import Benefit from "./components/Benefit";

export default function Benefits() {
  return (
    <Section heading="Особенности курса">
      <div className={styles.container}>
        {benefits.map((props) => (
          <Benefit key={props.heading} {...props} />
        ))}
      </div>
    </Section>
  );
}

const benefits = [
  {
    image: "/kpop.png",
    heading: "Удобство",
    text: "Возможность учить язык в любое время и в любом месте. Постоянный доступ к материалам.  Проверенные домашние задания отправляются в 5:00 утра по московскому времени",
  },
  {
    image: "/emblem.png",
    heading: "Качество",
    text: "Курс основан на программе учебников лучших университетов Южной Кореи: Yonsei, Ewha, Hankuk. Подробно рассмотрены грамматики начального и среднего уровня",
    isAlignEnd: true,
  },
  {
    image: "/gimbap.png",
    heading: "Разнообразие",
    text: "К урокам прилагаются мини-словарики по пройденным темам, ученикам курса будет доступен полный чек-лист корейских базовых фраз",
  },
];
