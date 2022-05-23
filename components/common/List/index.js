import styles from "./List.module.scss";

export default function List({ style, items = [], isMinusSymbol = false }) {
  return (
    <ul className={styles.list} style={style}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <div
            className={styles.icon}
            style={{
              backgroundImage: isMinusSymbol
                ? 'url("/minus.svg")'
                : 'url("/check.svg")',
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
