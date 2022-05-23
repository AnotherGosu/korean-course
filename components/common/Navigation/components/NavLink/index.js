import styles from "./NavLink.module.scss";

export default function NavLink({ navLinkTitle, navLinkId, isLastLink }) {
  const onNavLinkClick = () => {
    document.getElementById(navLinkId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <span className={styles.link} onClick={onNavLinkClick}>
        {navLinkTitle}
      </span>
      {!isLastLink && <div className={styles.divider} />}
    </>
  );
}
