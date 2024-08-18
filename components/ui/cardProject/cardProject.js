import Image from "next/image";
import styles from "./project.module.css";
import utils from "../../../styles/utils.module.css";

export default function CardProject({ href, name, image, indice }) {
  const animation = indice % 2 == 0 ? "fade-left" : "fade-right";

  return (
    <div
      className={styles.project}
      data-aos={animation}
      data-aos-easing="ease-out"
    >
      <a
        className={styles.screenshotContainer + " " + utils.bgColorLight}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={styles.screenshot}
          src={image}
          width={720}
          height={434}
          alt=""
        />
      </a>
      <div className={styles.projectInfo}>
        <span className={styles.projectName + " " + utils.headingCard2}>
          {name}
        </span>
        <a
          className={
            styles.knowMore + " " + utils.textCardLink + " " + utils.colorBlue
          }
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <span>See More</span>
        </a>
      </div>
    </div>
  );
}
