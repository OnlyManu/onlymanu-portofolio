import Image from 'next/image'

import Info from '../../ui/info/info'
import styles from './infos.module.css'
import utils from '../../../styles/utils.module.css'

export default function PersonalInfos() {
    const getAge = () => {
        const birth = new Date("1997-05-24").getTime()
        const now = new Date().getTime()
        const interval = now - birth
        const age = Math.floor(interval / (1000 * 3600 * 24 * 365))
        return age
    }
    return (
        <div className={styles.aboutMe}>
            <div className={styles.picture} data-aos="fade-right">
                <Image src='/images/profile.png' className={styles.profilePicture} height={602} width={476} alt='Emmanuel Bli' />
            </div>
            <div className={styles.infos} data-aos="fade-left">
                <Info name="Name" content="Emmanuel Bli" />
                <Info name="Age" content={getAge()} />
                <Info name="Email" content="devonlymanu@gmail.com" />
                <Info name="Phone" content="(+225) 01 711 93 710" />
            </div>
            <div className={styles.bio+" "+utils.textBio} data-aos="fade-left">
                <p className={styles.greeting}>Hi there.</p>
                <p>What do you need to know about me?<br/>I&apos;m Emmanuel Bli, I&apos;m from Ivory Coast and since my childhood I was very passionated about technology. My love of technology lead me into programming and I have had a computer science degree. Apart from my diploma, I&apos;m also a self-taught man always learning new stuffs to expand his skills.</p>
                <p>Why should you entrust me with your project?<br/>I&apos;m someone who puts it heart in every job he does. Punctuality and seriousness are my virtues, I make a point of finishing correctly my work on time.</p>
                <p>I&apos;m looking forward to working with you.</p>
            </div>
        </div>
    )
}