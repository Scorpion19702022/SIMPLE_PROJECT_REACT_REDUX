import { useAppSelector } from '../../Hooks/useReduxHooks'
import styles from './Styles/NotesResult.module.css'

const NotesResult = () => {
	const { notesList } = useAppSelector(state => state.notes)

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_info_select}>
				<div className={styles.box_counter}>
					<span className={styles.counter}>
						Ilość notatek: <span className={styles.count}>0</span>
					</span>
				</div>
				<div className={styles.box_btns_select}>
					<button className={styles.btn_select}>wszystkie</button>
					<button className={styles.btn_select}>dom</button>
					<button className={styles.btn_select}>praca</button>
					<button className={styles.btn_select}>rozrywka</button>
					<button className={styles.btn_select}>inne</button>
				</div>
				<button className={styles.btn_clean_all}>usuń wszystko</button>
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
				<div className={styles.popup}>
					<span className={styles.popup_info}>Twój notes jest zapełniony</span>
					<button className={styles.popup_btn}>X</button>
				</div>
			</div>
		</section>
	)
}

export default NotesResult
