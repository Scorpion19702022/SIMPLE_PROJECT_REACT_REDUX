import styles from './Styles/Wallet.module.css'
import WalletInputsModal from './WalletInputsModal'
import WalletList from './WalletList'
import WalletManager from './WalletManager'

const Wallet = () => {
	return (
		<main className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className={styles.heading}>Wallet</h1>
				<span className={styles.text_heading}>- twój portfel -</span>
			</div>
			<div className={styles.box_wallet}>
				<WalletInputsModal />
				<WalletManager />
				<WalletList />
			</div>
		</main>
	)
}

export default Wallet
