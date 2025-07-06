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
		</section>
	)
}

export default Magic8BallAction
