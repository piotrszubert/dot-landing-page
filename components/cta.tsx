import styles from '@/styles/Cta.module.css'

export default function Cta() {
    return(
        <div 
            className={styles.cta}
        >
            <p className={styles.text}>
                Join Dot. Personal Assistant today and experience the power of AI-driven productivity at your fingertips!
            </p>
            <div>
                <button
                    className={styles.button}>
                    Join Now!
                </button>
            </div>
        </div>
    );
}