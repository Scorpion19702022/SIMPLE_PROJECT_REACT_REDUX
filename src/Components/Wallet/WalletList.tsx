import styles from './Styles/WalletList.module.css'

const WalletList = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`lista transakcji`.toLocaleUpperCase()}</h2>
			<div className={styles.box_deal}>
				<div className={styles.box_income}>
					<h3 className={styles.heading_income}>{`przychody`.toLocaleUpperCase()}</h3>
				</div>
				<div className={styles.box_expense}>
					<h3 className={styles.heading_expense}>{`wydatki`.toLocaleUpperCase()}</h3>
				</div>
			</div>
		</section>
	)
}

export default WalletList
