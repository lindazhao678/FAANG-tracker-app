import { FaEnvelope } from 'react-icons/fa'
import styles from '../components/static/contact.module.scss'

function Contact() {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.title}>Contact Us</h1>
                    <p>FAANG tracker app is powered by leading web deveplopment technologies. We are the team of innovative web designers and stunning developers.</p>
                    <p>Whether you have a comment or suggestion to share, we look forward to hearing from you. Feel free to reach out.</p>
                </div>
                <a
                href="mailto:faangtracker@gmail.com"
                >
                <FaEnvelope />
                </a>
            </div>
        </div>
    );
}

export default Contact;