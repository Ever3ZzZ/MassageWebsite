import styles from '../styles/WhyHomeMassage.module.scss';


import {
  Heart,
  Activity,
  Moon,
  Smile,
  Brain,
  Droplets,
  Home,
  Shield,
  Clock,
  Settings,
  Sparkles,
  Briefcase,
} from 'lucide-react';

export default function WhyHomeMassage() {
  const massageBenefits = [
    {
      icon: Heart,
      title: 'Stress Relief',
      text: 'Massage reduces cortisol levels and promotes deep relaxation, helping you manage daily stress more effectively.',
    },
    {
      icon: Activity,
      title: 'Pain Management',
      text: 'Alleviates chronic pain, muscle tension, and soreness. Effective for back pain, headaches, and sports injuries.',
    },
    {
      icon: Moon,
      title: 'Better Sleep',
      text: 'Improves sleep quality by promoting relaxation and reducing anxiety, helping you wake up refreshed.',
    },
    {
      icon: Smile,
      title: 'Enhanced Immunity',
      text: 'Boosts immune system function by increasing white blood cell activity and improving lymphatic circulation.',
    },
    {
      icon: Brain,
      title: 'Mental Clarity',
      text: 'Reduces anxiety and depression, improves mood, and enhances overall mental wellbeing and focus.',
    },
    {
      icon: Droplets,
      title: 'Improved Circulation',
      text: 'Enhances blood flow throughout the body, delivering oxygen and nutrients to tissues more efficiently.',
    },
  ];

  const homeBenefits = [
    {
      icon: Home,
      title: 'Ultimate Convenience',
      text: 'No need to travel, find parking, or rush through traffic. We bring the spa experience directly to your door.',
    },
    {
      icon: Shield,
      title: 'Complete Privacy',
      text: 'Enjoy your massage in the familiar, comfortable surroundings of your own home with complete privacy.',
    },
    {
      icon: Clock,
      title: 'Save Time & Energy',
      text: 'No commute means more time for you to relax before and after your session.',
    },
    {
      icon: Settings,
      title: 'Personalized Environment',
      text: 'Set your own ambience – music, lighting, and temperature. Make it exactly how you like it.',
    },
    {
      icon: Sparkles,
      title: 'Extended Relaxation',
      text: 'Continue relaxing in your own bed or couch after the massage. No need to drive home.',
    },
    {
      icon: Briefcase,
      title: 'Professional Equipment',
      text: 'We bring everything needed – professional massage table, premium oils, fresh linens, and aromatherapy.',
    },
  ];

  return (
    <section className={styles.why}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h2>Why Choose Home Massage?</h2>
          <p className={styles.subtitle}>
            Experience ultimate relaxation without leaving your comfort zone
          </p>
          <p className={styles.description}>
            Discover the unparalleled benefits of professional massage therapy in the privacy and comfort of your own home.
          </p>
        </header>

        {/* Massage benefits */}
        <section className={styles.block}>
          <h3>The Power of Massage Therapy</h3>
          <p className={styles.blockText}>
            Transform your health and wellbeing
          </p>

          <div className={styles.grid}>
            {massageBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className={styles.card} key={i}>
                  <div className={`${styles.icon} ${styles.pink}`}>
                    <Icon size={22} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className={styles.cta}>
          Now imagine experiencing all these benefits without leaving your home...
        </div>

        {/* Home benefits */}
        <section className={styles.grid}>
          {homeBenefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div className={styles.card} key={i}>
                <div className={`${styles.icon} ${styles.gold}`}>
                  <Icon size={24} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </section>

        {/* Banner */}
        <section className={styles.banner}>
          <div className={styles.bannerContent}>
            <h3>Your Home. Your Comfort. Your Wellness.</h3>
            <p>
              Experience the difference of professional massage therapy in your personal sanctuary.
            </p>
            <button>Book Your Home Massage</button>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.stats}>
          <div className={styles.stat}>
            <span>100%</span>
            <p>Private & Secure</p>
          </div>
          <div className={styles.stat}>
            <span>0 min</span>
            <p>Travel Time</p>
          </div>
          <div className={styles.stat}>
            <span>24/7</span>
            <p>Flexible Scheduling</p>
          </div>
          <div className={styles.stat}>
            <span>5★</span>
            <p>Premium Service</p>
          </div>
        </section>
      </div>
    </section>
  );
}
