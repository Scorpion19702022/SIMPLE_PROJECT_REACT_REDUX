import styles from './Styles/UsersList.module.css'

const UsersList = () => {
	return (
		<section className={styles.wrapper}>
			<h3 className={styles.heading}>Lista użytkowików</h3>
			<div className={styles.box_count}>
				<span className={styles.span_count}>
					wszyscy: <span className={styles.count}>0</span>
				</span>
				<span className={styles.span_count}>
					koiety: <span className={styles.count}>0</span>
				</span>
				<span className={styles.span_count}>
					mężczyźni: <span className={styles.count}>0</span>
				</span>
			</div>
			<div className={styles.box_btn_select}>
				<button className={styles.btn_select}>wszyscy</button>
				<button className={styles.btn_select}>kobiety</button>
				<button className={styles.btn_select}>mężczyźni</button>
			</div>
			<div className={styles.box_list_users}>
				<p>lista</p>
			</div>
			<button className={styles.btn_clean_all}>wyczyść</button>
		</section>
	)
}

export default UsersList
