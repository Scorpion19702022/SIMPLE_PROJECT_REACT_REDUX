import styles from './Styles/Home.module.css'

import code01 from '../../assets/code01.png'
import code02 from '../../assets/code02.png'
import iconRedux from '../../assets/icon_redux.png'

interface InitialProps {
	actionCard: boolean
	addActionCard: () => void
}

const Home: React.FC<InitialProps> = ({ actionCard, addActionCard }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box_background}>
				<img className={styles.img_background} src={code01} alt='picture_background' />
			</div>
			<div className={styles.box_card}>
				<div className={!actionCard ? styles.card_front : styles.card_front_action}>
					<img className={styles.img_front} src={code01} alt='picture_code' />
					<div className={styles.shadow_front}></div>
					<h2 className={styles.heading_front}>Projekty w REDUX</h2>
					<img className={styles.img_front_icon} src={iconRedux} alt='picture_icon' />
					<button className={styles.btn_front} onClick={addActionCard}>
						odwróć kartę
					</button>
				</div>
				<div className={actionCard ? styles.card_front : styles.card_front_action}>
					<h2 className={styles.heading_back}>Opis projektów</h2>
					<img className={styles.img_back} src={code02} alt='picture_code' />
					<div className={styles.shadow_back}></div>
					<p className={styles.text_back}>Projekty w React i TypeScript z wykorzystaniem Redux.</p>
					<button className={styles.btn_back} onClick={addActionCard}>
						odwróć kartę
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
