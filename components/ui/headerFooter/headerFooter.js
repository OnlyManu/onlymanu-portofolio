import {useEffect, useState} from "react";
import styles from "./headerFooter.module.css";

export default function HeaderFooter() {
  const [isMobile, setIsMobile] = useState(true);
  const [width, setWidth] = useState(0);
  const checkIfIsMobile = () => {
    const windowWidth = window.innerWidth;
    return windowWidth <= 844;
  };

  useEffect(() => {
    setIsMobile(checkIfIsMobile());
    window.addEventListener("resize", function () {
      const currentWidth = window.innerWidth;
      if (currentWidth !== width) {
        setWidth(currentWidth);
        setIsMobile(checkIfIsMobile());
      }
    });
  }, []);

  if (isMobile) {
    return (
      <svg
        className={styles.container}
        width="667"
        height="40"
        viewBox="0 0 667 40"
      >
        <path
          fill="#19242b"
          d="M667,12.4V41H0V12.4C97.67,23.58,211.7,30,333.5,30S569.33,23.58,667,12.4z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className={styles.container}
        width="1440"
        height="100"
        viewBox="0 0 1440 100"
      >
        <path
          fill="#1a252b"
          d="M1440 65.433v41.679H0V65.433c218.83 31.363 465.3 32.974 720 32.974 258.07-.001 498.91-.822 720-32.974z"
        />
      </svg>
    );
  }
}
