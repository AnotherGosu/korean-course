import styles from "./Home.module.css";
import Image from "next/image";

import Section from "../../common/Section";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.polaroid}>
        <Image
          src="/polaroid.jpg"
          alt="Мари"
          width="960"
          height="1280"
          layout="intrinsic"
        />
        <span className={styles.title}>Maryoonseul</span>
      </div>
      <h1 className={styles.heading}>
        <span>Авторский Курс</span>
        <Image
          src="/flag.png"
          alt="Корейский флаг"
          width="40"
          height="40"
          layout="intrinsic"
        />
        <span>Корейского Языка</span>
      </h1>
    </section>
  );
}
