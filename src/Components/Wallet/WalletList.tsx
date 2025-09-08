import { TypesWallet } from '../../Features/Wallet/TypesWallet'
import styles from './Styles/WalletList.module.css'
import WalletExpenseItem from './WalletExpenseItem'
import WalletIncomeItem from './WalletIncomeItem'

interface initialProps {
	walletListIncome: TypesWallet[]
	walletListExpense: TypesWallet[]
}

const WalletList: React.FC<initialProps> = ({ walletListIncome, walletListExpense }) => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`lista transakcji`.toLocaleUpperCase()}</h2>
			<div className={styles.box_deal}>
				<div className={styles.box_income}>
					<h3 className={styles.heading_income}>{`przychody`.toLocaleUpperCase()}</h3>
					<div className={styles.deal_list}>
						{walletListIncome.map((item: TypesWallet) => (
							<WalletIncomeItem key={item.id} walletIncomeListResult={item} />
						))}
					</div>
					<div className={styles.box_sum}>
						<span className={styles.text_sum}>
							Razem: <span className={styles.sum_income}>0 zł</span>
						</span>
					</div>
				</div>
				<div className={styles.box_expense}>
					<h3 className={styles.heading_expense}>{`wydatki`.toLocaleUpperCase()}</h3>
					<div className={styles.deal_list}>
						{walletListExpense.map((item: TypesWallet) => (
							<WalletExpenseItem key={item.id} walletExpenseListResult={item} />
						))}
					</div>
					<div className={styles.box_sum}>
						<span className={styles.text_sum}>
							Razem: <span className={styles.sum_expense}>0 zł</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WalletList
