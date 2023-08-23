import { Montserrat } from "next/font/google";
import styles from '@/styles/Footer.module.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Footer() {
    return(
        <footer className={`${montserrat.className} ${styles.footer}`}>
            <div className={styles.footerText}>
                &copy; Dot. 2023 All rights reserved.
            </div>
        </footer>
    );
}