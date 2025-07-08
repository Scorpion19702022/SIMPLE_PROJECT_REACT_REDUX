import styles from './Styles/Magic8BallResult.module.css'

const Magic8BallResult = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_question}>
				<h5 className={styles.heading_question}>Twoje pytanie:</h5>
				<span className={styles.question}>pytanie</span>
			</div>
			<div className={styles.box_answer}>
				<h5 className={styles.heading_answer}>Odpowiedź:</h5>
				<span className={styles.answer}>odpowiedź</span>
			</div>
		</section>
	)
}

export default Magic8BallResult
