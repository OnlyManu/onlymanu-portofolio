import { useState } from 'react'
import styles from './burger.module.css'

export default function BurgerButton({isOpen, onClick}) {
    return (
        <div className={isOpen ? styles.burger+" "+styles.open : styles.burger} id="burger-button" onClick={onClick}>
            <span className={styles.burgerButton}></span>
        </div>
    )
}