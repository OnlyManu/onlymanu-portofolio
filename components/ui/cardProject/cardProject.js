import Image from 'next/image'
import styles from './project.module.css'
import utils from '../../../styles/utils.module.css'

export default function CardProject({ href, name, image, indice }) {
    const animation = indice % 2 == 0 ? "fade-left" : "fade-right"

    return (
        <div className={styles.project} data-aos={animation} data-aos-easing="ease-out">
            <div className={styles.screenshotContainer+" "+utils.bgColorLight}>
                <Image className={styles.screenshot} src={image} width={720} height={434} alt=''/>
            </div>
            <div className={styles.projectInfo}>
                <span className={styles.projectName+" "+utils.headingCard2}>{name}</span>
                <a className={styles.knowMore + " " + utils.textCardLink + " " + utils.colorBlue} href={href} target="_blank" rel='noreferrer'>
                    <span>know more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className={styles.moreIcon+" "+utils.svgColorBlue}><path d="M44 24l-8-8v6H6v4h30v6z"/></svg>
                </a>
            </div>
        </div>
    )
}