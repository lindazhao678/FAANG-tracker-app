import styles from './Footer.module.scss'
import Link from 'next/link'

function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div className={styles.footer}>   
                <div className={styles.brand}>
                    <Link href='/'>
                        <a className={styles.brandtext}>
                            FAANG tracker
                        </a>
                    </Link>
                </div>
                <p>
                    Copyright &copy; {getCurrentYear()} <a className={styles.exlink} href="https://lijunzhao.com" target="_blank" rel="noreferrer">Lijun Zhao</a>
                </p>
                <nav>
                    <ul>
                        <li>
                            <Link href='/facebooknews'>
                                <a>Facebook</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/amazonnews'>
                                <a>Amazaon</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/applenews'>
                                <a>Apple</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/netflixnews'>
                                <a>Netflix</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/googles'>
                                <a>Google</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a>About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a>Contact Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/policy'>
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}

export default Footer;