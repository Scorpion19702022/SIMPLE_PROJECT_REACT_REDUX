import styles from './Styles/Magic8BallAction.module.css'

const Magic8BallAction = () => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>Magic8Ball</h1>
			<span className={styles.text}>wpisz pytanie,kliknij w bilę i poznaj odpowiedź</span>
			<div></div>
		</section>
	)
}

export default Magic8BallAction
