import styles from './Styles/NotesInputs.module.css'

const Notes = () => {
	const kind = ['wybierz kategorię', 'dom', 'praca', 'rozrywka', 'inne']

	const optionSelect = kind.map((option, id) => (
		<option value='' key={id}>
			{option}
		</option>
	))

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>Wypełnij formularz</h2>
			<form className={styles.form}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>wpisz tytuł:</label>
					<input className={styles.input} type='text' />
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>wybierz datę:</label>
					<input className={styles.input_date} type='date' />
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>wpisz tekst:</label>
					<span className={styles.marks}>Znaków: 0</span>
					<textarea className={styles.textarea}></textarea>
					<span className={styles.error}>error</span>
				</div>
				<div className={styles.box_inputs}>
					<label className={styles.label}>wybierz kategorię zadania:</label>
					<select className={styles.select}>{optionSelect}</select>
					<span className={styles.error}>error</span>
				</div>
				<button className={styles.btn} type='submit'>
					dodaj
				</button>
			</form>
		</section>
	)
}

export default Notes
