import Image from "next/image";
import { Children, useEffect } from "react";

import styles from "./service.module.css";
import utils from "../../../styles/utils.module.css";

export default function CardService({
  children,
  handleEvent,
  selected,
  indice,
}) {
  const childrenArray = Children.toArray(children);
  const handleMouseEnter = () => {
    handleEvent(indice);
  };

  return (
    <div
      className={
        selected == indice
          ? styles.service +
            " " +
            utils.bgColorBlue +
            " " +
            utils.svgColorWhite +
            " " +
            utils.boxshadowBlue
          : styles.service + " " + utils.bgColorLight + " " + utils.svgColorBlue
      }
      onMouseEnter={handleMouseEnter}
    >
      {childrenArray}
    </div>
  );
}
