import { useEffect, useState } from 'react'
import styles from './Styles/Wallet.module.css'
import WalletInputsModal from './WalletInputsModal'
import WalletList from './WalletList'
import WalletManager from './WalletManager'

const Wallet = () => {
	const [theme, setTheme] = useState<string>('')
	const [worth, setWorth] = useState<string>('')
	const [kind, setKind] = useState<string>('wybierz')
	const [emptyTheme, setEmptyTheme] = useState<string>('')
	const [emptyWorth, setEmptyWorth] = useState<string>('')
	const [emptyKind, setEmptyKind] = useState<string>('')
	const [activeModal, setActiveModal] = useState<boolean>(false)

	const handleChangeTheme = (e: string) => {
		if (e.length <= 15) {
			setTheme(e)
			setEmptyTheme('')
		}
	}

	const handleChangeWorth = (e: string) => {
		setWorth(e)
	}

	const handleChangeKind = (e: string) => {
		setKind(e)
	}

	useEffect(() => {
		if (theme.length >= 15) {
			setEmptyTheme('osiągnąłeś maksymalną ilość 15 znaków')
		} else {
			setEmptyTheme('')
		}
	}, [theme.length])

	const handleActiveModal = () => {
		setActiveModal(true)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (theme !== '' && worth !== '' && kind === 'przychód') {
			setActiveModal(false)
			setTheme('')
			setWorth('')
			setKind('wybierz')
		}

		if (theme !== '' && worth !== '' && kind === 'wydatek') {
			setActiveModal(false)
			setTheme('')
			setWorth('')
			setKind('wybierz')
		}

		if (!theme) {
			setEmptyTheme('podaj tytuł transakcji')
		}

		if (!worth) {
			setEmptyWorth('podaj kwotę transakcji')
		}

		if (kind === 'wybierz') {
			setEmptyKind('wybierz rodzaj transakcji')
		}
	}

	const handleCacelModal = () => {
		setActiveModal(false)
		setTheme('')
		setWorth('')
		setKind('wybierz')
		setEmptyTheme('')
		setEmptyWorth('')
		setEmptyKind('')
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
					emptyThemeInput={emptyTheme}
					emptyWorthInput={emptyWorth}
					emptyKindInput={emptyKind}
					isCancelModal={activeModal}
					changeTheme={handleChangeTheme}
					changeWorth={handleChangeWorth}
					changeKind={handleChangeKind}
					cancelModal={handleCacelModal}
					submit={handleSubmit}
				/>
				<WalletManager activeModal={handleActiveModal} />
				<WalletList />
			</div>
		</main>
	)
}

export default Wallet
