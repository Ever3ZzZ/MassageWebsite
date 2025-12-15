import React from "react";
import styles from "../styles/Home.module.scss"; 
import Image from "next/image";

export default function Home() {
  return (
    <div className = {styles.homeContainer}>
      <h1>Relax, Restore, Rejuvenate</h1>
      <h2>Experience the healing power of therapeutic in a tranquil<br />
       environment. Our expert therapists are dedicated to your wellness <br />
      journey.</h2>
      

      <button className={styles.bookNowButton}>Book Now</button>
      <button className={styles.learnMoreButton}>Our Services</button>

      <div className ={styles.photoWrap}>
      <Image
      src = "/massagePhoto.jpg"
      alt = "Massage"
      width = {800}
      height = {500}
      className={styles.photo}
     />
      </div>
    </div>
  )
}
