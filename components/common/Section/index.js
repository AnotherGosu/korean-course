import styles from "./Section.module.scss";

import Heading from "components/common/Heading";

export default function Section({ children, heading = "", id }) {
  return (
    <section id={id}>
      {heading && <Heading text={heading} />}
      <div className={styles.container}>{children}</div>
    </section>
  );
}
