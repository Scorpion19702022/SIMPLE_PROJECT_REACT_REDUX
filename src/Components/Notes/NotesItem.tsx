import { TypeNotes } from '../../Features/Notes/TypeNotes'
import styles from './Styles/NotesItem.module.css'

import { RiDeleteBin6Line } from 'react-icons/ri'

interface initialProps {
	notes: TypeNotes
}

const NotesItem: React.FC<initialProps> = ({ notes }) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.theme}>{notes.themeType}</h3>
			<div className={styles.box_content}>
				<p className={styles.text}>{notes.textType}</p>
				<em className={styles.date}>{notes.dateType}</em>
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
