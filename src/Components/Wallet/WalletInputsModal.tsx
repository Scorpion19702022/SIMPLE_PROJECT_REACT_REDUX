import styles from './Styles/WalletInputsModal.module.css'

interface initialProps {
	isCancelModal: boolean
	cancelModal: () => void
}

const WalletInputsModal: React.FC<initialProps> = ({ isCancelModal, cancelModal }) => {
	const dealKindOption = ['wybierz', 'przychód', 'wydatek']

	const optionSelect = dealKindOption.map((item, id) => (
		<option className={styles.option} value={item} key={id}>
			{item}
		</option>
	))

	return (
		<section className={isCancelModal ? styles.wrapper_no_active : styles.wrapper_active}>
			<h2 className={styles.heading}>{`Twoja transakcja`.toLocaleUpperCase()}</h2>
			<form className={styles.form}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Podaj nazwę transakcji:</label>
					<input className={styles.input} type='text' />
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Podaj kwotę transakcji:</label>
					<input className={styles.input} type='number' />
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_select}>
					<label className={styles.label}>Wybierz rodzaj transakcji:</label>
					<select className={styles.select}>{optionSelect}</select>
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn}>dodaj</button>
					<button className={styles.btn} type='button' onClick={cancelModal}>
						anuluj
					</button>
				</div>
			</form>
		</section>
	)
}

export default WalletInputsModal
