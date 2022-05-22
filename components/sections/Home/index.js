import styles from "./Home.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

import Polaroid from "../../common/Polaroid";

export default function Home() {
  const [vh, setVh] = useState("100vh");

  useEffect(() => {
    const changeVh = () => {
      if (window) {
        const innerVh = window.innerHeight * 0.01;
        setVh(`${innerVh}px`);
      }
    };

    window.addEventListener("resize", changeVh);
    return () => window.removeEventListener("resize", changeVh);
  }, []);

  return (
    <section className={styles.container} style={{ "--vh": vh }}>
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
