import styles from './Styles/NotesResult.module.css'

const NotesResult = () => {
	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Notes</h3>
			<div className={styles.box_notes}></div>
		</section>
	)
}

export default NotesResult
