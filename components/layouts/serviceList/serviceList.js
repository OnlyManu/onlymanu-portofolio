import { useState } from "react";

import CardService from "../../ui/cardService/cardService";
import styles from "./services.module.css";
import utils from "../../../styles/utils.module.css";

export default function ServiceList() {
  const [selected, setSelected] = useState(1);
  const cardSelected = (indice) => {
    setSelected((selected) => indice);
  };

  return (
    <div className={styles.services}>
      <div
        className={styles.service}
        data-aos="zoom-in"
        data-aos-duration="600"
      >
        <CardService indice={1} selected={selected} handleEvent={cardSelected}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className={styles.cardIcon}
          >
            <title>User Interface</title>
            <g id="User_Interface" data-name="User Interface">
              <polygon points="39.46 58 40.8 56 23.2 56 24.54 58 39.46 58" />
              <path d="M61,56H43a1,1,0,0,1-.17.55C40.71,59.72,40.7,60,40,60c-17.25,0-16.42.19-16.83-.45C21.05,56.37,21,56.4,21,56H3a2,2,0,0,0-2,2v2a4,4,0,0,0,4,4H59a4,4,0,0,0,4-4V58A2,2,0,0,0,61,56Z" />
              <rect x="52" y="19" width="2" height="30" />
              <path d="M59,17a3,3,0,0,0-3-3H52v3h3a1,1,0,0,1,1,1V50a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1h3V14H8a3,3,0,0,0-3,3V54H59Z" />
              <rect x="10" y="19" width="2" height="30" />
              <rect x="20" y="43" width="24" height="2" />
              <path d="M42,25a2,2,0,1,0,2,2A2,2,0,0,0,42,25Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,42,25ZM22,25a2,2,0,1,0,2,2A2,2,0,0,0,22,25Zm10,0a2,2,0,1,0,2,2A2,2,0,0,0,32,25Zm10,0a2,2,0,1,0,2,2A2,2,0,0,0,42,25Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,42,25ZM22,25a2,2,0,1,0,2,2A2,2,0,0,0,22,25Zm10,0a2,2,0,1,0,2,2A2,2,0,0,0,32,25ZM14,8V49H50V8Zm5,25h6a1,1,0,0,1,0,2H19A1,1,0,0,1,19,33Zm-1-6a4,4,0,1,1,4,4A4,4,0,0,1,18,27Zm1,10h6a1,1,0,0,1,0,2H19A1,1,0,0,1,19,37Zm27,9a1,1,0,0,1-1,1H19a1,1,0,0,1-1-1V42a1,1,0,0,1,1-1H45a1,1,0,0,1,1,1ZM29,33h6a1,1,0,0,1,0,2H29A1,1,0,0,1,29,33Zm-1-6a4,4,0,1,1,4,4A4,4,0,0,1,28,27Zm1,10h6a1,1,0,0,1,0,2H29A1,1,0,0,1,29,37Zm16,2H39a1,1,0,0,1,0-2h6A1,1,0,0,1,45,39Zm0-4H39a1,1,0,0,1,0-2h6A1,1,0,0,1,45,35Zm-3-4a4,4,0,1,1,4-4A4,4,0,0,1,42,31Zm4-11a1,1,0,0,1-1,1H19a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H45a1,1,0,0,1,1,1ZM20,19H44V12H20Zm22,6a2,2,0,1,0,2,2A2,2,0,0,0,42,25ZM32,29a2,2,0,1,0-2-2A2,2,0,0,0,32,29ZM22,29a2,2,0,1,0-2-2A2,2,0,0,0,22,29Zm10-4a2,2,0,1,0,2,2A2,2,0,0,0,32,25Zm10,0a2,2,0,1,0,2,2A2,2,0,0,0,42,25Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,42,25ZM32,25a2,2,0,1,0,2,2A2,2,0,0,0,32,25Z" />
              <path d="M14,0V6H50V0Zm4,4a1,1,0,0,1,0-2A1,1,0,0,1,18,4Zm4,0a1,1,0,0,1,0-2A1,1,0,0,1,22,4Zm4,0a1,1,0,0,1,0-2A1,1,0,0,1,26,4Z" />
            </g>
          </svg>
          <strong className={utils.headingCard}>Web development</strong>
          <p className={utils.textCard}>
            I will build you beautifull websites: landing pages, blogs,
            ecommerce etc...
          </p>
        </CardService>
      </div>
      <div className={styles.service} data-aos="fade-left">
        <CardService indice={2} selected={selected} handleEvent={cardSelected}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className={styles.cardIcon}
          >
            <title>User Experience</title>
            <g id="User_Experience" data-name="User Experience">
              <path d="M48,56v3a1,1,0,0,1-1,1H17a1,1,0,0,1-1-1V55H13v4a4,4,0,0,0,4,4H47a4,4,0,0,0,4-4V55.83A12,12,0,0,1,48,56ZM13,33v6h3V33Zm35-4v3a12,12,0,0,1,3,.13V29ZM47,1H17a4,4,0,0,0-4,4v6h3V5a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1,1,1,0,0,0,1,1H38a1,1,0,0,0,1-1,1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v6h3V5A4,4,0,0,0,47,1ZM27,4a1,1,0,0,1,2,0A1,1,0,0,1,27,4Zm8,0a1,1,0,0,1,2,0A1,1,0,0,1,35,4Zm-1,7H46V6H40.83A3,3,0,0,1,38,8H26a3,3,0,0,1-2.83-2H18v5h9a1,1,0,0,1,1,1V32a1,1,0,0,1-1,1H18v6H32a1,1,0,0,1,1,1V54a1,1,0,0,1-1,1H18v3H46V55.62a12,12,0,0,1,0-23.24V29H34a1,1,0,0,1-1-1V12A1,1,0,0,1,34,11Z" />
              <path d="M54.68,52.22a10,10,0,0,1-11.36,0c.14-.18.09-.1.65-1.78a5.31,5.31,0,0,1,10.06,0C54.6,52.15,54.54,52,54.68,52.22Z" />
              <path d="M51.64,41.27v.91a2.64,2.64,0,1,1-5.28,0v-.91a2.64,2.64,0,0,1,5.28,0Z" />
              <path d="M56.28,50.85c-.69-2-1.41-4.05-4.09-5.31a5.08,5.08,0,0,0,1.45-4.27,4.64,4.64,0,0,0-9.28,0c0,1.45,0,2.87,1.45,4.28-2.73,1.29-3.47,3.45-4.09,5.3a10,10,0,1,1,14.56,0Z" />
              <path d="M1,41V53H31V41Zm21,9H6a1,1,0,0,1,0-2H22A1,1,0,0,1,22,50Zm4-4H6a1,1,0,0,1,0-2H26A1,1,0,0,1,26,46Z" />
              <path d="M35,13V27H63V13Zm8.71,9.29A1,1,0,0,1,43,24c-.56,0-.45,0-3.71-3.29a1,1,0,0,1,0-1.42l3-3a1,1,0,0,1,1.42,1.42L41.41,20Zm8.12-4.74C47.47,24.09,47.72,24,47,24a1,1,0,0,1-.83-1.55l4-6A1,1,0,0,1,51.83,17.55Zm6.88,3.16C55.6,23.82,55.58,24,55,24a1,1,0,0,1-.71-1.71L56.59,20l-2.3-2.29a1,1,0,0,1,1.42-1.42l3,3A1,1,0,0,1,58.71,20.71Z" />
              <path d="M4,13V31H26V13Zm6,14a1,1,0,0,1-2,0V25a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V21a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V22a1,1,0,0,1,2,0Zm4,0a1,1,0,0,1-2,0V17a1,1,0,0,1,2,0Z" />
            </g>
          </svg>
          <strong className={utils.headingCard}>App development</strong>
          <p className={utils.textCard}>
            I will build you mobile or web apps to help you manage your business
          </p>
        </CardService>
      </div>
      <div className={styles.service} data-aos="fade-right">
        <CardService indice={3} selected={selected} handleEvent={cardSelected}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className={styles.cardIcon}
          >
            <title>SEO</title>
            <g id="SEO">
              <path d="M57.19,38.46l5.16,3-5.16,8.93-6.6-6.61C59.76,29.4,49.48,10,32,10A22,22,0,0,0,10,32c0,17.46,19.37,27.77,33.76,18.59l2.88,2.88A25.82,25.82,0,0,1,39,57v6H25V57a26,26,0,0,1-11.18-6.46l-5.17,3-7-12.12,5.16-3a26.17,26.17,0,0,1,0-12.92l-5.16-3,7-12.12,5.17,3A26,26,0,0,1,25,7V1H39V7a26,26,0,0,1,11.18,6.46l5.17-3,7,12.12-5.16,3A26.17,26.17,0,0,1,57.19,38.46Z" />
              <path d="M32,22A10,10,0,1,0,42,32,10,10,0,0,0,32,22Zm-1,9h2a3,3,0,0,1,0,6v1a1,1,0,0,1-2,0V37H29a1,1,0,0,1,0-2h4a1,1,0,0,0,0-2H31a3,3,0,0,1,0-6V26a1,1,0,0,1,2,0v1h2a1,1,0,0,1,0,2H31A1,1,0,0,0,31,31Z" />
              <path d="M32,18A14,14,0,1,0,46,32,14,14,0,0,0,32,18Zm0,26A12,12,0,1,1,44,32,12,12,0,0,1,32,44Z" />
              <path d="M62.17,58.17,48,44c9.71-12.93.71-32-16-32A20,20,0,0,0,12,32c0,16.68,19.06,25.73,32,16C59.13,63.13,58.55,63,60.17,63A2.83,2.83,0,0,0,62.17,58.17ZM32,48A16,16,0,1,1,48,32,16,16,0,0,1,32,48Z" />
            </g>
          </svg>
          <strong className={utils.headingCard}>SEO</strong>
          <p className={utils.textCard}>
            I will optimize the seo of your website and give it more visibility
            on search engines
          </p>
        </CardService>
      </div>
    </div>
  );
}
