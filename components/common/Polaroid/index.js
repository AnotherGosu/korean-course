import styles from "./Polaroid.module.css";

export default function Polaroid({ children }) {
  return <div className={styles.container}>{children}</div>;
}
