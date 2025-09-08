import { TypesWallet } from '../../Features/Wallet/TypesWallet'
import styles from './Styles/WalletIncomeItem.module.css'

interface initialProps {
	walletIncomeListResult: TypesWallet
	deleteDeal: (id: string) => void
}

const WalletIncomeItem: React.FC<initialProps> = ({ walletIncomeListResult, deleteDeal }) => {
	return (
		<div className={styles.box_income}>
			<span className={styles.income_theme}>{walletIncomeListResult.themeType.toLocaleUpperCase()}</span>
			<span className={styles.income_worth}>
				{walletIncomeListResult.worthType} <span className={styles.worth}> zł</span>
			</span>
			<div className={styles.box_btn}>
				<button className={styles.btn} onClick={() => deleteDeal(walletIncomeListResult.id)}>
					usuń
				</button>
			</div>
		</div>
	)
}

export default WalletIncomeItem
