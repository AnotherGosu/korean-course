import styles from "./Home.module.css";
import Image from "next/image";

import Polaroid from "../../common/Polaroid";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.polaroidWrapper}>
        <Polaroid>
          <Image
            src="/polaroid.jpg"
            alt="Мари"
            width="960"
            height="1280"
            layout="intrinsic"
          />
          <span className={styles.title}>Maryoonseul</span>
        </Polaroid>
      </div>
      <h1 className={styles.heading}>
        <div className={styles.icon} />
        <span>
          Авторский Курс <br />
          Корейского Языка
        </span>
      </h1>
    </section>
  );
}
