import styles from './Styles/WalletExpenseItem.module.css'

const WalletExpenseItem = () => {
	return (
		<div className={styles.box_expense}>
			<span className={styles.expense_theme}>Temat</span>
			<span className={styles.expense_worth}>200</span>
		</div>
	)
}

export default WalletExpenseItem
