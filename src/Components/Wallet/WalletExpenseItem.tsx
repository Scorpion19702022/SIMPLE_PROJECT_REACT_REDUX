import styles from './Styles/WalletExpenseItem.module.css'

import { TypesWallet } from '../../Features/Wallet/TypesWallet'

interface initialProps {
	walletExpenseListResult: TypesWallet
}

const WalletExpenseItem: React.FC<initialProps> = ({ walletExpenseListResult }) => {
	return (
		<div className={styles.box_expense}>
			<span className={styles.expense_theme}>Temat</span>
			<span className={styles.expense_worth}>200</span>
		</div>
	)
}

export default WalletExpenseItem
