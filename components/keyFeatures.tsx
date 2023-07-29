import styles from '@/styles/KeyFeatures.module.css'

const features = [
    {
        name: 'Smart Scheduling',
        description: 'Dot. analyzes your calendar, preferences, and availability to suggest the best times for meetings, appointments, and events. It can even handle meeting requests and send out invites on your behalf.'
    },
    {
        name: 'Task Management',
        description: 'Keep track of your to-do lists and tasks effortlessly. Simply tell Dot. what you need to accomplish, and it will create and prioritize tasks, sending you reminders to stay on top of your responsibilities.'
    },
    {
        name: 'Intuitive Reminders',
        description: 'Never miss an important deadline or event again. Dot. will send you personalized reminders via your preferred communication channel, whether it\'s email, SMS, or push notifications.'
    },
    {
        name: 'Meeting Preparations',
        description: 'Before each meeting, Dot. will provide you with relevant information, such as attendee backgrounds, meeting agendas, and any necessary documents. This way, you\'ll always be well-prepared.'
    },
    {
        name: 'Email Management',
        description: 'Say goodbye to email overwhelm. Dot. can sort, categorize, and even respond to emails based on your preferences, saving you valuable time and ensuring you never overlook critical messages.'
    },
    {
        name: 'Natural Language Interaction',
        description: 'Interact with Dot. just like you would with a human assistant. Speak or type natural language commands, and Dot. will understand and execute them flawlessly.'
    },
];

export default function KeyFeatures() {
    return(
        <>
            <h3 className='section-title'>Key features</h3>
            <div className={styles.wrapper}>
                {features.map((item, index) => (
                    <div
                        key={index}
                        className={styles.feature}
                    >
                        <div
                            className={styles.name}    
                        >
                            {item.name}
                        </div>
                        <div
                            className={styles.description}
                        >
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}