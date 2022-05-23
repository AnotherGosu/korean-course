import styles from "./Benefits.module.scss";

import Section from "components/common/Section";

import Card from "components/common/Card";

export default function Benefits() {
  return (
    <Section heading="Особенности курса" id="benefits">
      <div className={styles.container}>
        {benefits.map((props) => (
          <Card key={props.heading} {...props} />
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
  },
  {
    image: "/gimbap.png",
    heading: "Разнообразие",
    text: "К урокам прилагаются мини-словарики по пройденным темам, ученикам курса будет доступен полный чек-лист корейских базовых фраз",
  },
];
