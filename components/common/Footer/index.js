import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Maryoonseul</span>
      <p className={styles.subtitle}>Авторский курс корейского языка</p>
      <a
        className={styles.link}
        href="https://www.upwork.com/freelancers/~0105b4e3e72b6f1c26"
        target="_blank"
        rel="noreferrer"
      >
        Design and Development: Dubinin Maksim
      </a>
    </div>
  );
}
