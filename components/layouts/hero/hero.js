import Image from 'next/image'
import TextAnimate from '../../ui/textAnimate/textAnimate'
import styles from './hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Image className={styles.profilePicture} src="/images/profile-hero.png" height={476} width={476} alt="Emmanuel Bli" priority={true} />
            <span className={styles.heroTextLight} data-aos="fade-up">Hello, world</span>
            <h3 className={styles.heroTextLarge} data-aos="fade-right" data-aos-duration="600">I AM EMMANUEL BLI</h3>
            <span className={styles.heroText} >I&apos;m a <TextAnimate/></span>
        </div>
    )
}