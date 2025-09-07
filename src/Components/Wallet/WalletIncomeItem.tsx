import { TypesWallet } from '../../Features/Wallet/TypesWallet'
import styles from './Styles/WalletIncomeItem.module.css'

interface initialProps {
	walletIncomeListResult: TypesWallet
}

const WalletIncomeItem: React.FC<initialProps> = ({ walletIncomeListResult }) => {
	return (
		<div className={styles.box_income}>
			<span className={styles.income_theme}>{walletIncomeListResult.themeType.toLocaleUpperCase()}</span>
			<span className={styles.income_worth}>
				{walletIncomeListResult.worthType} <span className={styles.worth}> zł</span>
			</span>
			<div className={styles.box_btn}>
				<button className={styles.btn}>usuń</button>
			</div>
		</div>
	)
}

export default WalletIncomeItem
