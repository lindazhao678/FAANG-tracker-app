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
                    Copyright &copy; {getCurrentYear()} <a className={styles.exlink} href="http://lijunzhao.com" target="_blank" rel="noreferrer">Lijun Zhao</a>
                </p>
                <nav>
                    <ul>
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