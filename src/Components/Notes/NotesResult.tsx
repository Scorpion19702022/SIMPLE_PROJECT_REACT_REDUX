import { TypeNotes } from '../../Features/Notes/TypeNotes'
import { useAppSelector } from '../../hooks/useReduxHooks'
import NotesItem from './NotesItem'
import styles from './Styles/NotesResult.module.css'

interface InitialProps {
	notesLists: TypeNotes[]
	popupAction: boolean
	closePopup: () => void
	deleteAllNotes: () => void
}

const NotesResult: React.FC<InitialProps> = ({ notesLists, popupAction, closePopup, deleteAllNotes }) => {
	const { notesList } = useAppSelector(state => state.notes)

	return (
		<section className={styles.wrapper}>
			<div className={popupAction ? styles.popup : styles.no_popup}>
				<span className={styles.popup_info}>Twój notes jest zapełniony</span>
				<button className={styles.popup_btn} onClick={closePopup}>
					X
				</button>
			</div>
			<div className={styles.box_info_select}>
				<div className={styles.box_counter}>
					<span className={styles.counter}>
						Ilość notatek: <span className={styles.count}>{notesList.length}</span>
					</span>
				</div>
				<div className={styles.box_btns_select}>
					<button className={styles.btn_select}>wszystkie</button>
					<button className={styles.btn_select}>dom</button>
					<button className={styles.btn_select}>praca</button>
					<button className={styles.btn_select}>rozrywka</button>
					<button className={styles.btn_select}>inne</button>
				</div>
				<button className={styles.btn_clean_all} onClick={deleteAllNotes}>
					usuń wszystko
				</button>
			</div>
			<h3 className={styles.heading}>Twój notes</h3>
			<div className={styles.box_category}>
				<div className={styles.category}>
					<div className={styles.category_color}></div>
					<span className={styles.category_info}> - dom</span>
				</div>
				<div className={styles.category}>
					<div className={styles.category_color}></div>
					<span className={styles.category_info}> - praca</span>
				</div>
				<div className={styles.category}>
					<div className={styles.category_color}></div>
					<span className={styles.category_info}> - rozrywka</span>
				</div>
				<div className={styles.category}>
					<div className={styles.category_color}></div>
					<span className={styles.category_info}> - inne</span>
				</div>
			</div>
			<div className={styles.box_notes}>
				{notesLists.map((item: TypeNotes) => (
					<NotesItem notes={item} key={item.id} />
				))}
			</div>
		</section>
	)
}

export default NotesResult
