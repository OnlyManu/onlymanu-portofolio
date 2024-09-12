import styles from "./sectionFooter.module.css";

export default function SectionFooter({ light = false }) {
  if (!light) {
    return (
      <div className={styles.container}>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 97"
        >
          <path
            d="M1440 97h-80-400-480H80 0V11.5L80 21c80 9.2 240 28.8 400 23.7C640 40 800 11.5 960 6.8c160-5.1 320 14.5 400 23.7l80 9.5v57z"
            fill="#2a3841"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div className={styles.container_light}>
        <svg
          className={styles.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 97"
        >
          <path
            d="M1440 97h-80-400-480H80 0V11.5L80 21c80 9.2 240 28.8 400 23.7C640 40 800 11.5 960 6.8c160-5.1 320 14.5 400 23.7l80 9.5v57z"
            fill="#1a252b"
          />
        </svg>
      </div>
    );
  }
}
