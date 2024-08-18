import { useEffect, useState } from "react";
import styles from "./textarea.module.css";
import utils from "../../../styles/utils.module.css";

export default function InputTextArea({ name, value, error, onChange }) {
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

  return (
    <div
      className={
        error.status
          ? utils.inputGroup +
            " " +
            utils.inputGroupMessage +
            " " +
            utils.inputGroupError
          : utils.inputGroup + " " + utils.inputGroupMessage
      }
    >
      <textarea
        name={name}
        className={styles.textarea}
        rows={isMobile ? 7 : 10}
        value={value}
        onChange={onChange}
        placeholder={name[0].toUpperCase() + name.substring(1)}
      ></textarea>
      {error.status && (
        <span className={utils.inputError}>
          {error.message}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={utils.errorIcon}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        </span>
      )}
    </div>
  );
}
