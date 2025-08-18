import styles from './Styles/WalletList.module.css'

const WalletList = () => {
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{`lista transakcji`.toLocaleUpperCase()}</h2>
			<div className={styles.box_deal}></div>
		</section>
	)
}

export default WalletList
