import Head from "next/head";
import { useEffect } from "react";

import { useCallback } from "react";
import Particles from "react-particles";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll";
import { loadFull } from "tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/layouts/navbar/navbar";
import Hero from "../components/layouts/hero/hero";
import Heading from "../components/ui/heading/heading";
import HeaderFooter from "../components/ui/headerFooter/headerFooter";
import SectionFooter from "../components/ui/sectionFooter/sectionFooter";
import ServiceList from "../components/layouts/serviceList/serviceList";
import PersonalInfos from "../components/layouts/personalInfos/personalInfos";
import ProjectList from "../components/layouts/projectList/projectList";
import SkillList from "../components/layouts/skillList/skillList";
import ContactForm from "../components/layouts/contactForm/contactForm";
import SocialLinks from "../components/layouts/socialLinks/socialLinks";

import styles from "../styles/home.module.css";
import utils from "../styles/utils.module.css";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fpsLimit: 820,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 2.6,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
        polygon: {
          nb_sides: 5,
        },
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
  };

  const scrollbarOptions = {
    damping: 0.06,
    plugins: {
      overscroll: {
        enable: true,
        effect: "glow",
        damping: 0.15,
        maxOverscroll: 150,
        glowColor: "#c5e5f2",
      },
    },
  };

  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-in-out",
      duration: 700,
    });

    Scrollbar.use(OverscrollPlugin);
    const myScrollbar = Scrollbar.init(
      document.querySelector("#my-scrollbar"),
      scrollbarOptions
    );
    [].forEach.call(document.querySelectorAll("[data-aos]"), (el) => {
      myScrollbar.addListener(() => {
        if (myScrollbar.isVisible(el)) {
          el.classList.add("aos-animate");
        }
      });
    });

    const loader = document.getElementById("loader");
    loader.style.display = "none";

    return () => {
      if (Scrollbar) {
        myScrollbar.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container} id="my-scrollbar">
      <Head>
        <title>{"OnlyManu Portfolio"}</title>
        <meta
          name="description"
          content="Onlymanu portfolio - freelance developer"
        />
        <meta property="og:title" content="OnlyManu : Freelance Developer" />
        <meta property="og:url" content="https://onlymanu.vercel.app" />
        <meta
          property="og:image"
          content="https://onlymanu.vercel.app/images/site-banner.png"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <div id="loader">
        <div className={styles.spinner}></div>
      </div>
      <header className={styles.header} id="home">
        <Navbar />
        <Hero />
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
        <HeaderFooter />
      </header>
      <main>
        <section className={styles.section} id="services">
          <Heading>My services</Heading>
          <ServiceList />
        </section>
        <SectionFooter />
        <section
          className={styles.section + " " + utils.bgColorLight}
          id="about"
        >
          <Heading>About me</Heading>
          <PersonalInfos />
        </section>
        <SectionFooter light={true} />
        <section className={styles.section} id="works">
          <Heading>My works</Heading>
          <ProjectList />
        </section>
        <SectionFooter />
        <section
          className={styles.section + " " + utils.bgColorLight}
          id="skills"
        >
          <Heading>My skills</Heading>
          <SkillList />
        </section>
        <SectionFooter light={true} />
        <section className={styles.sectionContact} id="contact">
          <Heading>Contact me</Heading>
          <ContactForm />
        </section>
        <SectionFooter />
      </main>
      <footer className={styles.footer}>
        <div className={styles.license}>
          <span className={utils.colorBlue}>©</span>copyright 2022 OnlyManu
        </div>
        <SocialLinks />
      </footer>
    </div>
  );
}
