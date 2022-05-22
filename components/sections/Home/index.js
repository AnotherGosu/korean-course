import styles from "./Home.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

import Polaroid from "../../common/Polaroid";

export default function Home() {
  const [windowHeight, setWindowHeight] = useState("100vh");

  useEffect(() => {
    if (window) {
      setWindowHeight(`${window.innerHeight}px`);
    }
  }, []);

  return (
    <section className={styles.container} style={{ height: windowHeight }}>
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
