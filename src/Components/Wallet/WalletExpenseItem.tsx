import styles from './Styles/WalletExpenseItem.module.css'

import { TypesWallet } from '../../Features/Wallet/TypesWallet'

interface initialProps {
	walletExpenseListResult: TypesWallet
}

const WalletExpenseItem: React.FC<initialProps> = ({ walletExpenseListResult }) => {
	return (
		<div className={styles.box_expense}>
			<span className={styles.expense_theme}>{walletExpenseListResult.themeType.toLocaleUpperCase()}</span>
			<span className={styles.expense_worth}>
				{walletExpenseListResult.worthType}
				<span className={styles.worth}> zł</span>
			</span>
			<div className={styles.box_btn}>
				<button className={styles.btn}>usuń</button>
			</div>
		</div>
	)
}

export default WalletExpenseItem
