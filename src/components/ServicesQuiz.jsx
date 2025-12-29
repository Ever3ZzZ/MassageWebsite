import styles from "../styles/servicesQuiz.module.scss";
import { Sparkles } from "lucide-react";

export default function ServicesQuiz() {
  return (
    <div className={styles.quiz}>
      <div className={styles.icon}>
        <Sparkles size={22} />
      </div>

      <div className={styles.content}>
        <h3>Not sure which service is right for you?</h3>
        <p>
          Take our quick quiz to find your perfect massage match!
        </p>
      </div>

      <button className={styles.button}>
        Take the Quiz
      </button>
    </div>
  );
}
