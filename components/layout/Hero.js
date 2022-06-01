import styles from './Hero.module.scss';

function Hero(props) {
    return (
        <div className={styles.showcase}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {props.title}
                    </h1>
                    <div className={styles.description}>
                        {props.description}
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;