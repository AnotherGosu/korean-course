import Heading from "../Heading";
import styles from "./Section.module.css";

export default function Section({ children, heading = "" }) {
  return (
    <section>
      {heading && <Heading text={heading} />}
      <div className={styles.container}>{children}</div>
    </section>
  );
}
