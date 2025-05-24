import styles from './Styles/NotesItem.module.css'

const NotesItem = () => {
	return (
		<div className={styles.card}>
			<h3 className={styles.theme}></h3>
			<p className={styles.text}></p>
			<em className={styles.date}></em>
			<button className={styles.btn}></button>
		</div>
	)
}

export default NotesItem
