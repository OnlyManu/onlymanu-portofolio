import Image from "next/image";
import { useState, useEffect } from "react";

import BurgerButton from "../../ui/burgerButton/burgerButton";
import Navigation from "../../ui/navigation/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [navigationStatus, setNavigationStatus] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const openCloseNavigation = () => {
    const body = document.querySelector("body");
    if (navigationStatus) {
      setNavigationStatus(false);
      body.classList.remove("navigationOpen");
    } else {
      setNavigationStatus(true);
      body.classList.add("navigationOpen");
    }
  };

  useEffect(() => {
    const container = document.querySelector("#my-scrollbar");
    function matrixToArray(str) {
      return str.split("(")[1].split(")")[0].split(",");
    }

    //code pour sticky navbar avec smooth-scrollbar incomplé
    /*container.addEventListener("transitionend", (event) => {
      const home = document.getElementById("home");
      const sections = document.querySelectorAll("section");
      const links = document.querySelectorAll("nav li a");
      const navbar = document.getElementById("navbar");
      const scroll_content = container.firstElementChild;
      const transform = matrixToArray(
        getComputedStyle(scroll_content, null).transform
      );
      const current_position = Math.abs(transform[5]);

      if (current_position > 250 && current_position < scrollPos) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }

      setScrollPos(current_position);
    });*/

    //ancien code pour la sticky navbar
    /*container.addEventListener(
      "scroll",
      () => {
        const home = document.getElementById("home");
        const sections = document.querySelectorAll("section");
        const links = document.querySelectorAll("nav li a");
        const navbar = document.getElementById("navbar");

        if (window.scrollY > 250 && window.scrollY < scrollPos) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }

        let top = window.scrollY;
        let offset = home.offsetTop - 150;
        let height = home.offsetHeight;
        let id = home.getAttribute("id");

        if (top >= offset && top < offset + height) {
          links.forEach((link) => {
            link.getAttribute("href") === "#" + id
              ? link.parentNode.classList.add("active")
              : link.parentNode.classList.remove("active");
          });
        } else {
          sections.forEach((section) => {
            top = window.scrollY;
            offset = section.offsetTop - 150;
            height = section.offsetHeight;
            id = section.getAttribute("id");

            if (top >= offset && top < offset + height) {
              links.forEach((link) => {
                link.getAttribute("href") === "#" + id
                  ? link.parentNode.classList.add("active")
                  : link.parentNode.classList.remove("active");
              });
            }
          });
        }

        setScrollPos(window.scrollY);
      },
      false
    );*/
  }, [scrollPos]);

  return (
    <div className={styles.navbar} id="navbar">
      <a href="#">
        <Image
          className={styles.logo}
          src="/images/logo-name.svg"
          width={124}
          height={41.89}
          alt=""
          priority={true}
        />
      </a>
      <BurgerButton isOpen={navigationStatus} onClick={openCloseNavigation} />
      <Navigation isOpen={navigationStatus} onClick={openCloseNavigation} />
    </div>
  );
}
