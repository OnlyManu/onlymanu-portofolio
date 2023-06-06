import { useEffect, useState } from "react"
import styles from "./headerFooter.module.css"

export default function HeaderFooter() {
    const [isMobile, setIsMobile] = useState(true)
    const [width, setWidth] = useState(0)
    const checkIfIsMobile = () => {
        const windowWidth = window.innerWidth
        return windowWidth <= 844
    }

    useEffect(() => {
        setIsMobile(checkIfIsMobile())
        window.addEventListener("resize", function () {
            const currentWidth = window.innerWidth
            if (currentWidth !== width) {
                setWidth(currentWidth)
                setIsMobile(checkIfIsMobile())
            }
        })
    }, [])

    if (isMobile) {
        return (
            <svg className={styles.container} width="667" height="40" viewBox="0 0 667 40">
                <path fill="#19242b" d="M667,12.4V41H0V12.4C97.67,23.58,211.7,30,333.5,30S569.33,23.58,667,12.4z"/>
            </svg>
        )
    } else {
        return (
            <svg className={styles.container} width="1440" height="100" viewBox="0 0 1440 100">
                <path fill="#1a252b" d="M1440 42.734v64.377H0V44.102c218.83 34.373 460.97 53.469 715.67 53.469 258.07 0 503.24-19.599 724.33-54.837z"/>
            </svg>
        )
    }
}