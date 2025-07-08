import styles from './Styles/Magic8BallAction.module.css'

import imgBall from '../../assets/ball-35516_1920.png'

interface initialProps {
	actionBall: boolean
	fillInputQuestion: string
	isError: string
	signsLength: number
	changeInput: (e: string) => void
}

const Magic8BallAction: React.FC<initialProps> = ({
	actionBall,
	fillInputQuestion,
	isError,
	signsLength,
	changeInput,
}) => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>Magic8Ball</h1>
			<span className={styles.text}>wpisz pytanie,kliknij w bilę i poznaj odpowiedź</span>
			<div className={styles.box_img}>
				<button className={styles.btn_ball}>
					<img className={actionBall ? styles.img : styles.img_action} src={imgBall} alt='ball' />
				</button>
			</div>
			<div className={styles.box_inputs}>
				<label className={styles.label}>wpisz pytanie:</label>
				<input
					className={styles.input}
					type='text'
					value={fillInputQuestion}
					onChange={e => changeInput(e.target.value)}
				/>
				<div className={styles.box_error_info}>
					<span className={styles.error}>{isError}</span>
					<span className={styles.counter_signs}>
						znaków: <span className={styles.signs}>{signsLength}</span>
					</span>
				</div>
			</div>
			<button className={styles.btn}>wyczyść wszystko</button>
		</section>
	)
}

export default Magic8BallAction
