import styles from "./Benefit.module.css";

export default function Benefit({ image, heading, text, isAlignEnd }) {
  return isAlignEnd ? (
    <div className={styles.containerAlignEnd}>
      <div className={styles.headerAlignEnd}>
        <h3>{heading}</h3>
        <div
          className={styles.icon}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.icon}
          style={{ backgroundImage: `url(${image})` }}
        />

        <h3>{heading}</h3>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
