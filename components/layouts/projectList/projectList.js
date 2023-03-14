import CardProject from "../../ui/cardProject/cardProject"
import styles from './projects.module.css'

const projects = [
    {
        name: "Manage Landing page",
        image: "/images/project01.png",
        href: "https://onlymanu-manage-landing-page.vercel.app",
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
        name: "Url shortening Landing page",
        image: "/images/project04.png",
        href: "https://onlymanu-url-shorten.vercel.app/",
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