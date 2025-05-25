import styles from './Styles/NotesItem.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'

const NotesItem = () => {
	return (
		<div className={styles.card}>
			<h3 className={styles.theme}>Lorem, ipsum.</h3>
			<div className={styles.box_content}>
				<p className={styles.text}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In minima nostrum ipsam repellat sunt optio tempora
					a fugit nisi libero.
				</p>
				<em className={styles.date}>12.11.1970</em>
			</div>
			<div className={styles.box_btn}>
				<button className={styles.btn}>
					<RiDeleteBin6Line className={styles.bin} />
				</button>
			</div>
		</div>
	)
}

export default NotesItem
