import styles from "./ModalMenu.module.scss";
import { useState } from "react";
import { useScrollLock } from "hooks";

import HamburgerButton from "./components/HamburgerButton";
import Navigation from "../Navigation";

export default function ModalMenu() {
  const [isModalMenuVisible, setIsModalMenuVisible] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleModalMenu = () => {
    setIsModalMenuVisible(!isModalMenuVisible);
    //Toggle page scroll
    isModalMenuVisible ? unlockScroll() : lockScroll();
  };

  return (
    <>
      <HamburgerButton
        onClick={toggleModalMenu}
        isModalMenuVisible={isModalMenuVisible}
      />
      {isModalMenuVisible && (
        <div className={styles.container} onClick={toggleModalMenu}>
          <div className={styles.navWrapper}>
            <Navigation isModal />
          </div>
        </div>
      )}
    </>
  );
}
