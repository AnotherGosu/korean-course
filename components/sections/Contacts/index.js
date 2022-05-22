import styles from "./Contacts.module.css";

import Section from "../../common/Section";

export default function Contacts() {
  return (
    <Section heading="Остались вопросы?">
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
        <div className={styles.image} />
      </div>
    </Section>
  );
}

const links = [
  { image: "/instagram.svg", url: "https://www.instagram.com/maryoonseul/" },
  { image: "/telegram.svg", url: "https://t.me/+VqW2TIN42rewekrP" },
  { image: "/vk.svg", url: "https://vk.com/" },
];
