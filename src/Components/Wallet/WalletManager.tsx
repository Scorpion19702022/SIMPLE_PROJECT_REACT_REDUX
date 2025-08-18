import styles from './Styles/WalletManager.module.css'

const WalletManager = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`dostępne środki`.toLocaleUpperCase()}</h2>
		</section>
	)
}

export default WalletManager
