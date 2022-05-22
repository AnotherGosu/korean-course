import styles from "./Reviews.module.css";
import { useState } from "react";

import Section from "../../common/Section";

import Carousel from "./Carousel";

export default function Reviews() {
  const [currentImage, setCurrentImage] = useState(0);

  const onPrevImage = () => {
    setCurrentImage(currentImage - 1);
  };

  const onNextImage = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <Section heading="Отзывы">
      <div className={styles.container}>
        <div className={styles.arrowContainer}>
          <button
            className={styles.arrowLeft}
            onClick={onPrevImage}
            disabled={currentImage === 0}
          />
        </div>
        <Carousel currentImage={currentImage} reviews={reviews} />
        <div className={styles.arrowContainer}>
          <button
            className={styles.arrowRight}
            onClick={onNextImage}
            disabled={currentImage === REVIEWS_COUNT - 1}
          />
        </div>
      </div>
    </Section>
  );
}

const reviews = [
  "/review-1.jpg",
  "/review-2.jpg",
  "/review-3.jpg",
  "/review-4.jpg",
  "/review-5.jpg",
];

const REVIEWS_COUNT = reviews.length;
