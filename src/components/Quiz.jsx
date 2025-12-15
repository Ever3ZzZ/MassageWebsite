import styles from "../styles/Quiz.module.scss";

export default function Quiz() {
    return (
        <div className={styles.quizContainer}>
        <img
        width={250}
        height={180}
        className={styles.quizImage}
        src="/quiz.gif"
        alt="Quiz"
        className={styles.quizImage}
        />
        <h2>Find Your Perfect Massage</h2>
        <h1>Take our quick quiz to discover which massage therapy is right for you</h1>
        <button className={styles.startQuizButton}>Start Quiz</button>
        </div>
    );
}