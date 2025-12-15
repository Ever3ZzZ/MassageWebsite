// ...existing code...
import styles from "../styles/services.module.scss";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Swedish Massage",
      duration: "60 or 90 minutes",
      description:
        "A gentle, relaxing massage that uses long strokes, kneading, and circular movements to help relax and energize you.",
      video: "/services/swedish.mp4",
    },
    {
      id: 2,
      name: "Deep Tissue Massage",
      duration: "60 or 90 minutes",
      description:
        "A more intense massage that targets deeper layers of muscle and connective tissue to relieve chronic pain and tension.",
      video: "/services/deeptissue.mp4",
    },
    {
      id: 3,
      name: "Hot Stone Massage",
      duration: "60 or 90 minutes",
      description:
        "A soothing massage that uses heated stones to relax muscles, improve circulation, and promote deep relaxation.",
      video: "/services/HotStoneMassage.mp4",
    },
    {
      id: 4,
      name: "Prenatal Massage",
      duration: "60 minutes",
      description:
        "A gentle massage designed specifically for pregnant women to help reduce stress, relieve muscle tension, and improve overall well-being.",
      image: "/services/prenatal.jpg",
    },
    {
      id: 5,
      name: "Aromatherapy Massage",
      duration: "60 or 90 minutes",
      description:
        "A relaxing massage that incorporates essential oils to enhance physical and emotional well-being.",
      video: "/services/AromatherapyMassage.mp4",
    },
    {
      id: 6,
      name: "Sports Massage",
      duration: "60 or 90 minutes",
      description:
        "Focused on preventing and treating sports-related injuries and improving performance.",
      video: "/services/sportsMassage.mp4",
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Services</h1>
      <h2 className={styles.subtitle}>
        Choose from our range of therapeutic massage treatments designed to meet your unique needs
      </h2>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div
            key={service.id}
            className={`${styles.serviceCard} ${service.image && !service.video ? styles.imageCard : ""}`}
            style={service.image && !service.video ? { backgroundImage: `url(${service.image})` } : {}}
  
          >
            {/* видео как фон (autoplay только если muted) */}
            {service.video && (
              <video
                className={styles.cardVideo}
                src={service.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={service.image}
              />
            )}

            <div className={styles.cardContent}>
              <h3>{service.name}</h3>
              <p className={styles.duration}>{service.duration}</p>
              <p className={styles.description}>{service.description}</p>
              <button className={styles.bookButton}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}