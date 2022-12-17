import Head from 'next/head'
import { useEffect } from 'react';

import { useCallback} from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import AOS from 'aos';
import 'aos/dist/aos.css';


import Navbar from '../components/layouts/navbar/navbar'
import Hero from '../components/layouts/hero/hero';
import Heading from '../components/ui/heading/heading';
import ServiceList from '../components/layouts/serviceList/serviceList';
import PersonalInfos from '../components/layouts/personalInfos/personalInfos';
import ProjectList from '../components/layouts/projectList/projectList';
import SkillList from '../components/layouts/skillList/skillList';
import ContactForm from '../components/layouts/contactForm/contactForm';
import SocialLinks from '../components/layouts/socialLinks/socialLinks';
import styles from '../styles/home.module.css'
import utils from '../styles/utils.module.css'

export default function Home() {
    useEffect(() => {
        AOS.init({
            once: true,
            easing: 'ease-in-out',
            duration: 800,
        })
        const loader = document.getElementById("loader")
        loader.style.display = "none"
    }, [])

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, [])
    
    const particlesOptions = {
        fpsLimit: 120,
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
                opacity: 0.3,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
        fullScreen: {
            enable: false, zIndex: 0
        },
    }
  
    return (
        <div className={styles.container}>
            <Head>
                <title>{ "OnlyManu Portofolio" }</title>
                <meta
                    name="description"
                    content="Onlymanu portofolio - freelance developer"
                />
                <link rel="shortcut icon" href="/images/favicon.ico"/>
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
            </header>
            <main>
                <section className={styles.section} id="services">
                    <Heading>My services</Heading>    
                    <ServiceList/>
                </section>
                <section className={styles.section+" "+utils.bgColorLight} id="about">
                    <Heading>About me</Heading>
                    <PersonalInfos/>
                </section>
                <section className={styles.section} id="works">
                    <Heading>My works</Heading>
                    <ProjectList/>
                </section>
                <section className={styles.section+" "+utils.bgColorLight+" "+utils.pSkills} id="skills">
                    <Heading>My skills</Heading>
                    <SkillList/>
                </section>
                <section className={styles.section} id="contact">
                    <Heading>Contact me</Heading>
                    <ContactForm/>
                </section>
            </main>
            <footer className={styles.footer+" "+utils.bgColorLight}>
                <div className={styles.license}>©copyright 2022 OnlyManu</div>
                <SocialLinks/>
            </footer>
        </div>
    )
}

