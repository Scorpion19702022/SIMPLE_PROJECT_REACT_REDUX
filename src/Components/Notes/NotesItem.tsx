import styles from './Styles/NotesItem.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'

const NotesItem = () => {
	return (
		<div className={styles.card}>
			<h3 className={styles.theme}></h3>
			<p className={styles.text}></p>
			<em className={styles.date}></em>
			<button className={styles.btn}>
				<RiDeleteBin6Line />
			</button>
		</div>
	)
}

export default NotesItem
