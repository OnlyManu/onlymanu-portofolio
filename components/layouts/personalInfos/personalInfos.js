import Image from 'next/image'

import Info from '../../ui/info/info'
import styles from './infos.module.css'
import utils from '../../../styles/utils.module.css'

export default function PersonalInfos() {
    return (
        <div className={styles.aboutMe}>
            <div className={styles.picture} data-aos="fade-right">
                <Image src='/images/photo1.png' className={styles.profilePicture} height={602} width={476} alt='Onlymanu profile picture' />
            </div>
            <div className={styles.infos} data-aos="fade-left">
                <Info name="Name" content="Emmanuel Bli" />
                <Info name="Age" content="25" />
                <Info name="Email" content="devonlymanu@gmail.com" />
                <Info name="Phone" content="(+225) 01 711 93 710" />
            </div>
            <div className={styles.bio+" "+utils.textBio} data-aos="fade-left">
                <p className={styles.greeting}>Hi there.</p>
                <p>What do you need to know about me?<br/>I'm Emmanuel Bli, I'm from Ivory Coast and since my childhood I was very passionated about technology. My love of technology lead me into programming and I had a computer science degree. Apart from my diploma, I'm also a self-taught man always learning new stuff to expand his skills.</p>
                <p>Why should you entrust me with your project?<br/>I'm someone who puts it heart in every job he does. Punctuality and seriousness are my virtues, I make a point of finishing correctly my work on time.</p>
                <p>I'm looking forward to working with you.</p>
            </div>
        </div>
    )
}