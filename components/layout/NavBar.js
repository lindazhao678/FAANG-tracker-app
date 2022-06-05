import Link from 'next/link';
import styles from './NavBar.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();
  const [active, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!active);
  }
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setActive(false);
    })
  })

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <a className={styles.brandtext}>
            FAANG tracker
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'><a>Home</a></Link>
          </li>
          <li>
            <Link href='/facebooknews'><a>Facebook</a></Link>
          </li>
          <li>
            <Link href='/amazonnews'><a>Amazon</a></Link>
          </li>
          <li>
            <Link href='/applenews'><a>Apple</a></Link>
          </li>
          <li>
            <Link href='/netflixnews'><a>Netflix</a></Link>
          </li>
          <li>
            <Link href='/googlenews'><a>Google</a></Link>
          </li>
          <li>
            <Link href='/about'><a>About</a></Link>
          </li>
          <li>
            <Link href='/contact'><a>Contact</a></Link>
          </li>
        </ul>
      </nav>

      <div className={`${styles.burgerHeader} ${active ? styles.menuOpened : ""}`}>
        <div className={styles.burgerContainer} onClick={toggleClass}>
          <div id={styles.burger} >
            <div className={`${styles.bar} ${styles.topBar}`}></div>
            <div className={`${styles.bar} ${styles.btmBar}`}></div>
          </div>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href='/'><a>Home</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/facebooknews'><a>Facebook</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/amazonnews'><a>Amazon</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/applenews'><a>Apple</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/netflixnews'><a>Netflix</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/googlenews'><a>Google</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/about'><a>About</a></Link>
          </li>
          <li className={styles.menuItem}>
            <Link href='/contact'><a>Contact</a></Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;