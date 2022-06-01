import NavBar from './NavBar';
import Footer from './Footer';
import styles from './Layout.module.scss';

function Layout(props) {
  return (
    <div className={styles.app}>
      <NavBar />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;