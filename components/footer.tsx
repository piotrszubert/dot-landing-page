import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return(
        <footer className={`${styles.footer}`}>
            <div className={styles.footerText}>
                &copy; Dot. 2023 All rights reserved.
            </div>
        </footer>
    );
}