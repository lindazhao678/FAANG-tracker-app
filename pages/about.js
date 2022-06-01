import { Fragment } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import styles from './about.module.scss'

function About() {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <h1>Who we are</h1>
                    <p>FAANG tracker is one of the most popular FAANG stocks tracker app, which is providing the live stock updates, the latest news, investment advice and resources of Facebook, Amazon, Apple, Netflix, and Google. </p>
                </div>
                <div>
                    <h1>Our mission</h1>
                    <p>Our mission is to help anyone who are intersted or who have already invested at the five FAANG stocks to be timely advised and be able to make the right investment decisions.</p>
                </div>
            </div>
        </div>
    );
}

export default About;