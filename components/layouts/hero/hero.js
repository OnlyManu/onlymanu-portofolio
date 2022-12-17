import TextAnimate from '../../ui/textAnimate/textAnimate'
import styles from './hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <span className={styles.heroTextLight} data-aos="fade-up">Hello, world</span>
            <h3 className={styles.heroTextLarge} data-aos="fade-right" data-aos-duration="600">I AM EMMANUEL BLI</h3>
            <span className={styles.heroText} data-aos="fade-down">I&apos;m a <TextAnimate/></span>
        </div>
    )
}