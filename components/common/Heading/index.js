import styles from "./Heading.module.scss";

export default function Heading({ text = "" }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{text}</h2>
    </div>
  );
}
