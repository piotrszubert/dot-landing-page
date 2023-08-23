import styles from '@/styles/Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
            <span className={styles.logo}>
                Dot.
            </span>
            <button className={styles.button}>
                Join now
            </button>
        </header>
    )
}