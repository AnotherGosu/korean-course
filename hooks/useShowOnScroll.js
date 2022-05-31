import { useState, useEffect } from "react";

export default function useShowOnScroll() {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    const heightToShowFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShowFrom) {
      !isVisible && // to limit setting state only the first time
        setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return isVisible;
}
