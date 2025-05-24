import styles from './Styles/NotesItem.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'

const NotesItem = () => {
	return (
		<div className={styles.card}>
			<h3 className={styles.theme}>Tytuł</h3>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, odit praesentium deleniti nisi qui nulla
				itaque consequuntur laudantium enim fuga, soluta eum quisquam, placeat est.
			</p>
			<em className={styles.date}>12.11.1970</em>
			<button className={styles.btn}>
				<RiDeleteBin6Line />
			</button>
		</div>
	)
}

export default NotesItem
