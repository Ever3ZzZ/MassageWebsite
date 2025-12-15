import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import translate from "../../public/translate.svg";

export default function Navbar() {
  return (
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
            <li><Link href = "/">Home</Link></li>
            <li><Link href = "/services">Services</Link></li>
            <li><Link href = "/quiz">Quiz</Link></li>
            <li><Link href = "/testimonials">Testimonials</Link></li>
            <li><Link href = "/about">About us</Link></li>
            <li><img src={translate} alt="Translate" className={styles.translateIcon}/></li>
        </ul>
      </nav>
  );
}