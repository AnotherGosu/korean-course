import styles from "./Card.module.scss";

export default function Card({ image, heading, text }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.icon}
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3>{heading}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
