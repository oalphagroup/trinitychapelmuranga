import Navbar from '../components/navbar';
import Footer from '../components/footer';

import styles from './layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>
        {children}
        <div className={styles.grid}>
          <div className={styles.grid_line1}></div>
          <div className={styles.grid_line2}></div>
          <div className={styles.grid_line3}></div>
          <div className={styles.grid_line4}></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
