import styles from "./Contacts.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Section from "components/common/Section";

export default function Contacts() {
  return (
    <Section heading="Остались вопросы?" id="contacts">
      <div className={styles.container}>
        <div className={styles.links}>
          <p>Обязательно свяжись со мной</p>
          <ul className={styles.list}>
            {links.map(({ image, url }) => (
              <li key={url}>
                <a
                  className={styles.link}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={styles.linkIcon}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <AnimationOnScroll
          animateIn="animate__heartBeat animate__slower"
          initiallyVisible
          animateOnce
        >
          <div className={styles.image} />
        </AnimationOnScroll>
      </div>
    </Section>
  );
}

const links = [
  { image: "/instagram.svg", url: "https://www.instagram.com" },
  { image: "/telegram.svg", url: "https://telegram.org" },
  { image: "/vk.svg", url: "https://vk.com" },
];
