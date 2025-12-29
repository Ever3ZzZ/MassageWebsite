import styles from "../styles/about.module.scss";

import {
    Smile,
    Clock,
    Award,
    HeartHandshake,
    Check,
} from "lucide-react";

export default function About() {
    return (
        <section className={styles.about}>
            <div className = {styles.container}>
                {/* TOP */}
                <div className={styles.top}>
                    {/* Text */}
                    <div className={styles.text}>
                        <h2>About</h2>

                        <p>Welcome to Serenity Massage, where I bring professional spa-quality
                 massage therapy directly to your home. As a licensed and certified
              massage therapist, I specialize in home massage services,
              combining years of expertise with the ultimate convenience.
              </p>

              <p>
                Why home massage? Because your wellness shouldn’t require travel,
              traffic stress, or rushing to appointments. I believe massage
              therapy is most effective when you can fully relax before, during,
              and after your session.</p> 

                <p>
                 I bring everything needed for a professional massage experience:
              premium massage table, high-quality organic oils, fresh luxury
              linens, and soothing aromatherapy.
                </p>

                {/* STATS */}
                <div className={styles.stats}>
                    <div className = {styles.stat}>
                        <Smile />
                        <strong>10,000</strong>
                        <span>Happy Clients</span>
                    </div>
                    <div className = {styles.stat}>
                        <Clock />
                        <strong>15+</strong>
                        <span>Years of Experience</span>
                    </div>
                    <div className = {styles.stat}>
                        <Award />
                        <strong>100+</strong>
                        <span>Professional Awards</span>
                    </div>

                    <div className = {styles.stat}>
                        <HeartHandshake />
                        <strong>100%+</strong>
                        <span>Satisfaction</span>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <div className={styles.imageWrap}>
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?fit=crop&w=900" alt="Massage therapist" />
            </div>

            <div className = {styles.caption}>
                <strong>Your Name Here</strong>
                <span>Licensed Massage Therapist, Certified Specialist
              </span>
            </div>
          </div>

          {/* BOTTOM */}
            <div className={styles.bottom}>
            <h3>Professional care with a personal touch</h3>

            <div className = {styles.cards} >
            {/* JOURNEY */}
                <div className={styles.card}>
                    <h4>My Journey to Massage Therapy</h4>
                    <p>
                       I discovered my passion for massage therapy many years ago
                after experiencing firsthand how healing touch could transform
                physical and emotional wellbeing. 
                    </p>

                    <p>
                After completing my certification, I have had the privilege of
                working with hundreds of clients, each with unique needs and
                wellness goals.
                    </p>
                </div>  
            {/* EDUCATION */}
            <div className = {styles.card}>
                <h4>Education & Certifications</h4>
                <ul>
                     <li><Check /> Licensed Massage Therapist (LMT)</li>
                      <li><Check /> Certified in Deep Tissue Massage</li>
                      <li><Check /> Prenatal Massage Specialist</li>
                      <li><Check /> Continuing Education: 50+ hours/year</li>
                </ul>
            </div>      

        {/* COMMITMENT */}
            <div className={`${styles.card} ${styles.highlight}`}>
              <h4>My Commitment to You</h4>
              <p>
                Every session is built on trust, professionalism, and genuine
                care. Your comfort, safety, and wellbeing are always my top
                priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
