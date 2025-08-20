import styles from './Styles/WalletList.module.css'
import WalletExpenseItem from './WalletExpenseItem'
import WalletIncomeItem from './WalletIncomeItem'

const WalletList = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`lista transakcji`.toLocaleUpperCase()}</h2>
			<div className={styles.box_deal}>
				<div className={styles.box_income}>
					<h3 className={styles.heading_income}>{`przychody`.toLocaleUpperCase()}</h3>
					<div className={styles.deal_list}>
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
						<WalletIncomeItem />
					</div>
				</div>
				<div className={styles.box_expense}>
					<h3 className={styles.heading_expense}>{`wydatki`.toLocaleUpperCase()}</h3>
					<div className={styles.deal_list}>
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
						<WalletExpenseItem />
					</div>
				</div>
			</div>
		</section>
	)
}

export default WalletList
