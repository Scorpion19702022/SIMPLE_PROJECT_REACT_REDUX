import styles from './Styles/NotesResult.module.css'

const NotesResult = () => {
	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Notes</h3>
			<div className={styles.box_notes}>
				<div className={styles.box01}></div>
				<div className={styles.box02}></div>
				<div className={styles.box03}></div>
				<div className={styles.box04}></div>
			</div>
		</section>
	)
}

export default NotesResult
