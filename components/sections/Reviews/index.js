import styles from "./Reviews.module.scss";
import { useState } from "react";
import { useWindowSize } from "hooks";
import Image from "next/image";

import Section from "components/common/Section";

export default function Reviews() {
  const [currentImage, setCurrentImage] = useState(0);
  const { width } = useWindowSize();
  const imageOffset = width > 620 ? 500 : 300;

  const onPrevImage = () => {
    setCurrentImage(currentImage - 1);
  };

  const onNextImage = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <Section heading="Отзывы" id="reviews">
      <div className={styles.container}>
        <button
          className={styles.arrowLeft}
          onClick={onPrevImage}
          disabled={currentImage === 0}
        />
        <div className={styles.imageWrapper}>
          {reviews.map((url, idx) => (
            <div
              key={url}
              className={styles.image}
              style={{ right: `${imageOffset * (currentImage - idx)}px` }}
            >
              <Image
                src={url}
                alt={`Отзыв-${idx + 1}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          ))}
        </div>
        <button
          className={styles.arrowRight}
          onClick={onNextImage}
          disabled={currentImage === REVIEWS_COUNT - 1}
        />
      </div>
    </Section>
  );
}

const reviews = [
  "/review-1.jpg",
  // {
  //   userName: "ilysmbjy",
  //   text: `Хочу поблагодарить вас за этот прекрасный курс, где все очень доступно и понятно.
  //   До курса я уже знала кое-какие правила, но очень была рада все повторить и освежить свою голову!
  //   Благодаря Вашему курсу мой уровень знаний по корейскому улучшился, за что Вам благодарна.
  //   Ещё классно то, что материалы остаются у нас в открытом доступе`,
  // },
  "/review-2.jpg",
  "/review-3.jpg",
  "/review-4.jpg",
  "/review-5.jpg",
];

const REVIEWS_COUNT = reviews.length;
