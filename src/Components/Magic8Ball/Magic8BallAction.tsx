import styles from './Styles/Magic8BallAction.module.css'

import imgBall from '../../assets/ball-35516_1920.png'

const Magic8BallAction = () => {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>Magic8Ball</h1>
			<span className={styles.text}>wpisz pytanie,kliknij w bilę i poznaj odpowiedź</span>
			<div className={styles.box_img}>
				<button className={styles.btn_ball}>
					<img className={styles.img} src={imgBall} alt='ball' />
				</button>
			</div>
			<div className={styles.box_inputs}>
				<label className={styles.label}>wpisz pytanie:</label>
				<input className={styles.input} type='text' />
				<div className={styles.box_error_info}>
					<span className={styles.error}>error</span>
					<span className={styles.counter_signs}>
						zaków: <span className={styles.signs}>0</span>
					</span>
				</div>
			</div>
			<button className={styles.btn}>wyczyść wszystko</button>
		</section>
	)
}

export default Magic8BallAction
