import { useState } from "react";
import Scrollbar from "smooth-scrollbar";
import styles from "./navigation.module.css";
import utils from "../../../styles/utils.module.css";

function NavLink({ children, href, home, onClick }) {
  const scrollTo = (event) => {
    event.preventDefault();
    const href = /(#.*)/.exec(event.target.href)[0];
    const myScrollbar = Scrollbar.get(document.querySelector("#my-scrollbar"));
    onClick();
    setTimeout(() => {
      myScrollbar.scrollIntoView(document.querySelector(href));
    }, 500);
  };

  return (
    <li className={home ? styles.link + " active" : styles.link}>
      <a href={href} onClick={scrollTo}>
        {children}
      </a>
    </li>
  );
}

export default function Navigation({ isOpen, onClick }) {
  const [selectedLink, setSelected] = useState("Home");

  return (
    <nav
      className={
        isOpen
          ? styles.navigation + " " + styles.open + " " + utils.bgColorDark
          : styles.navigation + " " + utils.bgColorDark
      }
    >
      <ul className={styles.links}>
        <NavLink href="#home" onClick={onClick} home>
          Home
        </NavLink>
        <NavLink href="#services" onClick={onClick}>
          Services
        </NavLink>
        <NavLink href="#about" onClick={onClick}>
          About
        </NavLink>
        <NavLink href="#works" onClick={onClick}>
          Works
        </NavLink>
        <NavLink href="#skills" onClick={onClick}>
          Skills
        </NavLink>
        <NavLink href="#contact" onClick={onClick}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}
