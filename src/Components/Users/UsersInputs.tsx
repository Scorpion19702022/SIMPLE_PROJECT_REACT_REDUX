import styles from './Styles/UsersInputs.module.css'

const UsersInputs = () => {
	const genderSelect = ['wybierz płeć', 'kobieta', 'mężczyzna']

	const optionSelect = genderSelect.map((item, index) => (
		<option value='' key={index}>
			{item}
		</option>
	))

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.heading}>Dodaj użytkownika</h3>
			<form className={styles.form}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Podaj imię:</label>
					<input className={styles.input} type='text' />
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Podaj nazwisko:</label>
					<input className={styles.input} type='text' />
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Wybierz płeć::</label>
					<select className={styles.select}>{optionSelect}</select>
					<span className={styles.error}>error</span>
				</div>
				<button type='submit' className={styles.btn}>
					dodaj
				</button>
			</form>
		</div>
	)
}

export default UsersInputs
