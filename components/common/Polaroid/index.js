import styles from "./Polaroid.module.css";

export default function Polaroid({ children, style }) {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
}
