import styles from '../../styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href='/home' className={styles.brandName}>ZestyBites</Link>
      </div>
      <div className={styles.navItems}>
        <ul>
          <li><Link href='/home' className={styles.navLink}>Home</Link></li>
          <li><Link href='/about' className={styles.navLink}>About</Link></li>
          <li><Link href='/contact' className={styles.navLink}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}