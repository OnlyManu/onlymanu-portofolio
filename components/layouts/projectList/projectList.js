import CardProject from "../../ui/cardProject/cardProject"
import styles from './projects.module.css'

const projects = [
    {
        name: "Smart Report",
        image: "/images/project01.png",
        href: "https://youtu.be/WF3_Zc_g33A",
    },
    {
        name: "Edie Landing page",
        image: "/images/project02.png",
        href: "https://onlymanu-edie-homepage.netlify.app/",
    },
    {
        name: "Sneakers Product card",
        image: "/images/project03.png",
        href: "https://onlymanu-ecommerce-product-main-page.netlify.app/",
    },
    {
        name: "Blogr Landing page",
        image: "/images/project04.png",
        href: "https://onlymanu.github.io/",
    },
]

export default function ProjectList() {
    return (
        <div className={styles.projects}>
            {
                projects.map((project, indice) => <CardProject name={project.name} image={project.image} href={project.href} indice={indice + 1} key={indice}/>)
            }
        </div>
    )
}