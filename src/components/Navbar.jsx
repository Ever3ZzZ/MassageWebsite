import Link from "next/link";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          Serenity Massage
        </Link>

        {/* NAV LINKS */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/quiz" className={styles.link}>Quiz</Link>
          <Link href="/testimonials" className={styles.link}>Testimonials</Link>
          <Link href="/about" className={styles.link}>About us</Link>
        </nav>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <button className={styles.lang}>EN</button>
          <button className={styles.book}>Book Now</button>
        </div>
      </div>
    </header>
  );
}
