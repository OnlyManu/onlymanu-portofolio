import styles from './info.module.css'
import utils from '../../../styles/utils.module.css'

export default function Info({ name, content }) {
    return (
        <div className={styles.info}>
            <span className={styles.name+" "+utils.colorBlue}>{ name + " :" }</span>
            <span className={styles.content}>{ content }</span>
        </div>
    )
}