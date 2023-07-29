import styles from '@/styles/Hero.module.css';

export default function Hero() {
    return(
        <div className={styles.hero}>
            <h1 className={styles.heading}>
                Unlock Your Full Potential 
                with Dot.
            </h1>
            <h2 className={styles.subheading}>
                Your AI-Powered Productivity Partner - 
                Smart, Intuitive, and Always Ready!
            </h2>
            <p className={styles.description}>
                Welcome to Dot. Personal Assistant, the virtual 
                productivity partner that revolutionizes how you manage 
                your time and tasks. From scheduling meetings to staying 
                on top of your to-do lists, Dot. is your AI-powered 
                assistant, designed to help you achieve more with less effort.
            </p>
            <div>
                <button className={styles.button}>
                    Get Starded - It's free
                </button>
            </div>
        </div>
    );
}