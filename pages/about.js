import styles from '../components/static/about.module.scss'
import { Fragment } from 'react'
import Head from 'next/head';

function About() {
    return (
        <Fragment>
            <Head>
                <title>FAANG tracker app | FAANG stocks</title>
                <meta name="description" content="About FAANG tracker." />
            </Head>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <h1>Who we are</h1>
                        <p>FAANG tracker is one of the most popular FAANG stocks tracker app, which is providing the live stock updates, the latest news, investment advice and resources of Facebook, Amazon, Apple, Netflix, and Google. </p>
                    </div>
                    <div>
                        <h1>Our mission</h1>
                        <p>Our mission is to help anyone who are interested or who have already invested at the five FAANG stocks to be timely advised and be able to make the right investment decisions.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default About;