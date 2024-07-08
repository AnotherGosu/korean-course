import styles from "./Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/home.jpg"
          alt="Maryoonseul"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.ellipseWrapper}>
        <div className={styles.icon} />
        <span className={styles.name}>Korean Course</span>
        <h1 className={styles.heading}>Курс корейского языка</h1>
      </div>
    </section>
  );
}
