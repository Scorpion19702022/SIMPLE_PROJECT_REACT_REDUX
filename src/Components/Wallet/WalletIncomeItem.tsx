import styles from './Styles/WalletIncomeItem.module.css'

const WalletIncomeItem = () => {
	return (
		<div className={styles.box_income}>
			<span className={styles.income_theme}>Temat</span>
			<span className={styles.income_worth}>5000</span>
		</div>
	)
}

export default WalletIncomeItem
