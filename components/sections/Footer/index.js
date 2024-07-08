import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Korean Course</span>
      <p className={styles.subtitle}>Курс корейского языка</p>
      <a
        className={styles.link}
        href="https://github.com/AnotherGosu"
        target="_blank"
        rel="noreferrer"
      >
        Design and Development: Dubinin Maksim
      </a>
    </div>
  );
}
