import Magic8BallAction from './Magic8BallAction'
import Magic8BallResult from './Magic8BallResult'
import styles from './Styles/Magic8Ball.module.css'

const Magic8Ball = () => {
	return (
		<main className={styles.wrapper}>
			<Magic8BallAction />
			<Magic8BallResult />
		</main>
	)
}

export default Magic8Ball
