import styles from './info.module.css'
import utils from '../../../styles/utils.module.css'

export default function Info({ name, content, index }) {
    const duration = index != 1 ? 800 + (index * 100) : 800
    return (
        <div className={styles.info} data-aos-duration={duration.toString()} data-aos="fade-left">
            <span className={styles.name+" "+utils.colorBlue}>{ name }</span>
            <span className={styles.content}>{ content }</span>
        </div>
    )
}