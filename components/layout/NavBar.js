import Link from 'next/link';
import styles from './NavBar.module.scss';

function NavBar() {
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
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/facebooknews'>
              <a>Facebook</a>
            </Link>
          </li>
          <li>
            <Link href='/amazonnews'>
              <a>Amazon</a>
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
            <Link href='/googlenews'>
              <a>Google</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;