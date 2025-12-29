import React from "react";
import styles from "../styles/Home.module.scss"; 
import Image from "next/image";

export default function Home() {
  return (
    <div className = {styles.homeContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>Relax, Restore, Rejuvenate</h1>
            <h2 className = {styles.subtitle}>Experience the healing power of therapeutic in a tranquil<br />
             environment. Our expert therapists are dedicated to your wellness <br />
            journey.</h2>
            
            <div className={styles.buttonContainer}>
              <button className={styles.bookNowButton}>Book Now</button>
              <button className={styles.learnMoreButton}>Our Services</button>
              <button className={styles.learnMoreButton}>🎁 Gift Cards</button>
            </div>
          </div>
          <div className={styles.videoSection}>
            <li><video src="/services/swedish.mp4" alt="Swedish Massage Video" className={styles.MassageMan} autoPlay loop muted/></li>
          </div>
        </div>

        <div className ={styles.photoWrap}>
        
        
        </div>
      </div>
    </div>
  )
}
