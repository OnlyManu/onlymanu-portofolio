import Image from 'next/image'
import styles from './socials.module.css'

export default function SocialLinks() {
    return (
        <div className={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=100088412454361" className={styles.socialLink} target="_blank" rel='noreferrer'>
                <Image src="/images/facebook.svg" className={styles.socialIcon} width={24} height={24} alt=''/>                
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-sonsahi-bli-42b47b1a4/" className={styles.socialLink} target="_blank" rel='noreferrer'>
                <Image src="/images/linkedin_circled.svg" className={styles.socialIcon} width={24} height={24} alt=''/>
            </a>
            <a href="https://github.com/OnlyManu" className={styles.socialLink} target="_blank" rel='noreferrer'>
                <Image src="/images/github.svg" className={styles.socialIcon} width={24} height={24} alt=''/>
            </a>
        </div>
    )
}