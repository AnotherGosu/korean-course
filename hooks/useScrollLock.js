import { useCallback, useEffect } from "react";

export default function useScrollLock() {
  const lockScroll = useCallback(() => {
    document.body.dataset.scrollLock = "true";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "var(--scrollbar-compensation)";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    delete document.body.dataset.scrollLock;
  }, []);

  useEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    if (scrollBarCompensation > 20) {
      document.body.style.setProperty("--scrollbar-compensation", "0px");
    } else {
      document.body.style.setProperty(
        "--scrollbar-compensation",
        `${scrollBarCompensation}px`
      );
    }
  }, []);

  return { lockScroll, unlockScroll };
}
