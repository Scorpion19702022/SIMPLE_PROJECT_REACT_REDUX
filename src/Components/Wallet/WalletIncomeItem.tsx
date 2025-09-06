import { TypesWallet } from '../../Features/Wallet/TypesWallet'
import styles from './Styles/WalletIncomeItem.module.css'

interface initialProps {
	walletIncomeListResult: TypesWallet
}

const WalletIncomeItem: React.FC<initialProps> = ({ walletIncomeListResult }) => {
	return (
		<div className={styles.box_income}>
			<span>{walletIncomeListResult.themeType.toLocaleUpperCase()}</span>
			<span>{walletIncomeListResult.worthType}</span>
			<button className={styles.btn}>usuń</button>
		</div>
	)
}

export default WalletIncomeItem
