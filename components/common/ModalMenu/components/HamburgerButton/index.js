import styles from "./HamburgerButton.module.scss";
import { useShowOnScroll } from "hooks";

export default function HamburgerButton({ onClick, isModalMenuVisible }) {
  const isVisible = useShowOnScroll();

  return (
    isVisible && (
      <button
        className={styles.button}
        onClick={onClick}
        style={{
          marginRight: isModalMenuVisible ? "var(--scrollbar-compensation)" : 0,
        }}
      >
        {isModalMenuVisible ? (
          <>
            <div className={styles.diagonalLineLeft} />
            <div className={styles.diagonalLineRight} />
          </>
        ) : (
          <>
            <div className={styles.horizontalLine} />
            <div className={styles.horizontalLine} />
            <div className={styles.horizontalLine} />
          </>
        )}
      </button>
    )
  );
}
