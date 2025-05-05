import styles from './Styles/Home.module.css'

import code01 from '../../assets/code01.png'

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box_card}>
				<div className={styles.card_front}>
					<h2 className={styles.heading_front}>Projekty w REDUX</h2>
					<img className={styles.img_front} src={code01} alt='picture_code' />
					<div className={styles.shadow}></div>
					<button className={styles.btn_front}>odwróć kartę</button>
				</div>
				<div className={styles.card_back}></div>
			</div>
		</div>
	)
}

export default Home
