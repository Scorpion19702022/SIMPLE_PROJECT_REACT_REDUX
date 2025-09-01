import { useState } from 'react'
import styles from './Styles/Wallet.module.css'
import WalletInputsModal from './WalletInputsModal'
import WalletList from './WalletList'
import WalletManager from './WalletManager'

const Wallet = () => {
	const [theme, setTheme] = useState<string>('')
	const [worth, setWorth] = useState<string>('')
	const [kind, setKing] = useState<string>('wybierz')
	const [error, setError] = useState<string>('')
	const [activeModal, setActiveModal] = useState<boolean>(false)

	const handleChangeTheme = (e: string) => {
		setTheme(e)
	}

	const handleChangeWorth = (e: string) => {
		setWorth(e)
	}

	const handleChangeKind = (e: string) => {
		setKing(e)
	}

	const handleActiveModal = () => {
		setActiveModal(true)
	}

	const handleCacelModal = () => {
		setActiveModal(false)
	}

	return (
		<main className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className={styles.heading}>Wallet</h1>
				<span className={styles.text_heading}>- twój portfel -</span>
			</div>
			<div className={styles.box_wallet}>
				<WalletInputsModal
					themeInput={theme}
					worthInput={worth}
					kindInput={kind}
					isCancelModal={activeModal}
					changeTheme={handleChangeTheme}
					changeWorth={handleChangeWorth}
					changeKind={handleChangeKind}
					cancelModal={handleCacelModal}
				/>
				<WalletManager activeModal={handleActiveModal} />
				<WalletList />
			</div>
		</main>
	)
}

export default Wallet
