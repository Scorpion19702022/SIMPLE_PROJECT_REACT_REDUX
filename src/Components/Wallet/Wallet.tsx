import styles from './Styles/Wallet.module.css'

const Wallet = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className={styles.heading}>Wallet</h1>
				<span className={styles.text_heading}>- twój portfel -</span>
			</div>
		</main>
	)
}

export default Wallet
