import styles from "./Carousel.module.css";
import Image from "next/image";

export default function Carousel({ reviews = [], currentImage = 1 }) {
  return (
    <div className={styles.container}>
      {reviews.map((url, idx) => (
        <div
          key={url}
          className={styles.image}
          style={{ right: `${200 * (currentImage - idx)}px` }}
        >
          <Image src={url} alt="Отзыв" layout="fill" objectFit="contain" />
        </div>
      ))}
    </div>
  );
}
