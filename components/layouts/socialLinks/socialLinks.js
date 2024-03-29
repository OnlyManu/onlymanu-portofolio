import Image from 'next/image'
import styles from './socials.module.css'

const icons = {
    facebook: (
        <svg className={styles.socialIcon} viewBox="0 0 50 50" fill="#FFFFFF">
            <path d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443V21.2c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188 4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25c0-12.15-9.85-22-22-22z" />
        </svg>
    ),
    linkedin: (
        <svg className={styles.socialIcon} viewBox="0 0 50 50" fill="#FFFFFF">
            <path d="M25 2C12.318 2 2 12.317 2 25s10.318 23 23 23 23-10.317 23-23S37.682 2 25 2zm-7 33h-4V20h4v15zm-2-18a2 2 0 1 1 0-4 2 2 0 1 1 0 4zm21 18h-4v-5-2.5a3.51 3.51 0 0 0-3.5-3.5 3.51 3.51 0 0 0-3.5 3.5V35h-4V20h4v1.816C27.168 20.694 28.752 20 30.5 20a6.5 6.5 0 0 1 6.5 6.5V35z" />
        </svg>
    ),
    github: (
        <svg className={styles.socialIcon} viewBox="0 0 50 50" fill="#FFFFFF">
            <path d="M17.791 46.836A2 2 0 0 0 19 45v-5.4a5.15 5.15 0 0 1 .041-.61L19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707-.058-.327-.108-.656-.151-.987 1.797-.296 4.843-.647 8.345-.714a8.16 8.16 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.83 9.83 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.27 8.27 0 0 1-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45a2 2 0 0 0 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z" />
        </svg>
    )
}

export default function SocialLinks() {
    return (
        <div className={styles.socials}>
            <a href="https://www.facebook.com/profile.php?id=100088412454361" className={styles.socialLink} target="_blank" rel='noreferrer'>
                {icons.facebook}
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-sonsahi-bli-42b47b1a4/" className={styles.socialLink} target="_blank" rel='noreferrer'>
                {icons.linkedin}
            </a>
            <a href="https://github.com/OnlyManu" className={styles.socialLink} target="_blank" rel='noreferrer'>
                {icons.github}
            </a>
        </div>
    )
}