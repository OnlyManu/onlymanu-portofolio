import styles from "./sectionFooter.module.css";

export default function SectionFooter() {
  return (
    <div className={styles.container}>
      <svg
        className={styles.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 97"
      >
        <path
          d="M0 40l80-9.5c80-9.2 240-28.8 400-23.7C640 11.5 800 40 960 44.7c160 5.1 320-14.5 400-23.7l80-9.5V97h-80-400-480H80 0V40z"
          fill="#2a3841"
        />
      </svg>
    </div>
  );
}
