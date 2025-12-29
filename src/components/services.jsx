import styles from "../styles/services.module.scss";
import { AlertTriangle, Calendar, Gift, Sparkles, Flame, Heart, Flower2, Waves, Wind } from "lucide-react";
import ServicesQuiz from "./ServicesQuiz";

export default function Services({ t }) {
  const defaultServices = {
    swedish: { title: 'Swedish Massage', duration: '60 min', 
    description: 'Relaxing full-body massage using gentle strokes.', 
    warning: 'Not suitable for: Recent surgery, severe osteoporosis, active cancer, acute infections, or uncontrolled high blood pressure.' },

    deepTissue: { title: 'Deep Tissue Massage', duration: '60 min',
    description: 'Targets deep muscle layers to relieve tension.',
    warning: 'Not suitable for: Blood clotting disorders, recent injuries, fractures, open wounds, severe osteoporosis, or those on blood thinners.' },

    hotStone: { title: 'Hot Stone Massage', 
    duration: '75 min', description: 'Heated stones for enhanced relaxation.', 
    warning: 'Not suitable for: Diabetes, cardiovascular conditions, varicose veins, skin conditions, pregnancy, or heat sensitivity.' },

    aromatherapy: { title: 'Aromatherapy Massage', duration: '60 min',
    description: 'Essential oils combined with massage.', 
    warning: 'Not suitable for: Severe allergies, asthma, epilepsy, pregnancy (certain oils), or sensitivity to fragrances.' },

    sports: { title: 'Sports Massage', duration: '60 min', 
    description: 'Designed for athletes to prevent injuries.', 
    warning: 'Not suitable for: Acute injuries (first 48 hours), untreated fractures, severe inflammation, infections, or blood clotting disorders.' },

    prenatal: { title: 'Prenatal Massage', duration: '60 min', 
    description: 'Safe massage for pregnant women.', 
    warning: 'Not suitable for: High-risk pregnancy, preeclampsia, severe swelling, placenta previa, or first trimester without doctor approval.' },
  };

  const servicesData = t && t.services ? t.services : defaultServices;

  const services = [
    {
      icon: Sparkles,
      data: servicesData.swedish,
      image:
        "https://images.unsplash.com/photo-1700522924565-9fad1c05469e?fit=crop&w=1080",
    },
    {
      icon: Flame,
      data: servicesData.deepTissue,
      image:
        "https://images.unsplash.com/photo-1700882304335-34d47c682a4c?fit=crop&w=1080",
    },
    {
      icon: Heart,
      data: servicesData.hotStone,
      image:
        "https://images.unsplash.com/photo-1696841212541-449ca29397cc?fit=crop&w=1080",
    },
    {
      icon: Flower2,
      data: servicesData.aromatherapy,
      image:
        "https://images.unsplash.com/photo-1537035448858-6d703dbc320f?fit=crop&w=1080",
    },
    {
      icon: Waves,
      data: servicesData.sports,
      image:
        "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?fit=crop&w=1080",
    },
    {
      icon: Wind,
      data: servicesData.prenatal,
      image:
        "https://images.unsplash.com/photo-1512291505839-65ba15729a48?fit=crop&w=1080",
    },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>
        <p className={styles.subtitle}>
          Choose from our range of therapeutic massage treatments designed to meet
          your unique needs
        </p>

        <ServicesQuiz />
        

        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = service.icon;
            const { title, duration, description, warning } = service.data;

            return (
              <div key={i} className={styles.card}>
                {/* IMAGE */}
                <div className={styles.imageWrap}>
                  <img src={service.image} alt={title} />
                  <div className={styles.icon}>
                    <Icon size={18} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className={styles.content}>
                  <h3>{title}</h3>
                  <span className={styles.duration}>{duration}</span>
                  <p className={styles.description}>{description}</p>

                  {/* WARNING */}
                  <div className={styles.warning}>
                    <AlertTriangle size={14} />
                    <span>{warning}</span>
                  </div>

                  {/* ACTIONS */}
                  <div className={styles.actions}>
                    <button className={styles.book}>
                      <Calendar size={16} />
                      Book Now
                    </button>
                    <button className={styles.gift}>
                      <Gift size={16} />
                      Gift This Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

