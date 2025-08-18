import styles from './Styles/WalletManager.module.css'

const WalletManager = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<h2 className={styles.heading}>{`dostępne środki:`.toLocaleUpperCase()}</h2>
				<span className={styles.count}>
					0<span className={styles.span_count}> zł</span>
				</span>
			</div>
		</section>
	)
}

export default WalletManager
