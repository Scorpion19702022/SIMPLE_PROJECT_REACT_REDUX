import { selectTotalSum } from '../../Features/Wallet/WalletSelectors'
import { useAppSelector } from '../../hooks/useReduxHooks'
import styles from './Styles/WalletManager.module.css'

interface initialProps {
	activeModal: () => void
	deleteAllDeal: () => void
}

const WalletManager: React.FC<initialProps> = ({ activeModal, deleteAllDeal }) => {
	const totalSum = useAppSelector(selectTotalSum)

	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<h2 className={styles.heading}>{`dostępne środki:`.toLocaleUpperCase()}</h2>
				<span className={styles.count}>
					{totalSum}
					<span className={styles.span_count}> zł</span>
				</span>
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn} onClick={activeModal}>
					dodaj transakcję
				</button>
				<button className={styles.btn} onClick={deleteAllDeal}>
					usuń wszystko
				</button>
			</div>
		</section>
	)
}

export default WalletManager
