import styles from "./Option.module.scss";

export default function Option({ style, children, isRed }) {
  return (
    <li className={isRed ? styles.optionRed : styles.optionGreen} style={style}>
      {children}
    </li>
  );
}
