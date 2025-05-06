import { useState } from 'react'
import Home from './Home'
import styles from './Styles/HomeComponent.module.css'

const HomeComponent = () => {
	const [action, setAction] = useState<boolean>(false)

	const handleActionCard = () => {
		setAction(!action)
	}

	return (
		<section className={styles.wrapper}>
			<Home actionCard={action} addActionCard={handleActionCard} />
		</section>
	)
}

export default HomeComponent
