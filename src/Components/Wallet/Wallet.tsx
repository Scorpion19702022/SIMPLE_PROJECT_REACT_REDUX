import { useEffect, useState } from 'react'
import styles from './Styles/Wallet.module.css'
import WalletInputsModal from './WalletInputsModal'
import WalletList from './WalletList'
import WalletManager from './WalletManager'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useReduxHooks'
import { addIncomeDeal } from '../../Features/Wallet/WalletSlice'

const Wallet = () => {
	const { walletIncome, walletExpense } = useAppSelector(state => state.wallet)
	const dispatch = useDispatch()

	const [theme, setTheme] = useState<string>('')
	const [worth, setWorth] = useState<string>('')
	const [kind, setKind] = useState<string>('wybierz')
	const [emptyTheme, setEmptyTheme] = useState<string>('')
	const [emptyWorth, setEmptyWorth] = useState<string>('')
	const [emptyKind, setEmptyKind] = useState<string>('')
	const [activeModal, setActiveModal] = useState<boolean>(false)

	const handleChangeTheme = (e: string) => {
		if (e.length <= 12) {
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
		if (theme.length >= 12) {
			setEmptyTheme('osiągnąłeś maksymalną ilość 12 znaków')
		} else {
			setEmptyTheme('')
		}
	}, [theme.length])

	useEffect(() => {
		if (worth !== '') {
			setEmptyWorth('')
		}
	}, [worth])

	useEffect(() => {
		if (kind !== 'wybierz') {
			setEmptyKind('')
		}
	}, [kind])

	const handleActiveModal = () => {
		setActiveModal(true)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (theme !== '' && worth !== '' && kind === 'przychód') {
			setActiveModal(false)
			dispatch(
				addIncomeDeal({
					id: uuidv4(),
					themeType: theme,
					worthType: worth,
					kindType: kind,
				})
			)
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
				<WalletList walletListIncome={walletIncome} />
			</div>
		</main>
	)
}

export default Wallet
