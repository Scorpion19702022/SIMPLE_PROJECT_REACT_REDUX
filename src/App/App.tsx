import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

const App = () => {
	return (
		<>
			<NavBar />
			<section>
				<Outlet />
			</section>
		</>
	)
}

export default App
