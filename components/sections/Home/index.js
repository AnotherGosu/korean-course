import styles from "./Home.module.scss";
import { useWindowSize } from "hooks";
import Image from "next/image";

import Polaroid from "components/common/Polaroid";

export default function Home() {
  const { width } = useWindowSize();

  const isMobile = width <= 620;

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
        {isMobile ? (
          <span className={styles.headingRows}>
            Авторский Курс <br />
            Корейского Языка
          </span>
        ) : (
          <span>Авторский Курс Корейского Языка</span>
        )}
      </h1>
      <div />
    </section>
  );
}
