import styles from './Styles/Wallet.module.css'
import WalletManager from './WalletManager'

const Wallet = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className={styles.heading}>Wallet</h1>
				<span className={styles.text_heading}>- twój portfel -</span>
			</div>
			<div className={styles.box_wallet}>
				<WalletManager />
			</div>
		</main>
	)
}

export default Wallet
