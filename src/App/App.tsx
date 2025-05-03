import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import HomeComponent from '../Components/Home/HomeComponent'
import NotesComponent from '../Components/Notes/NotesComponent'

function App() {
	return (
		<Router>
			<NavBar />
			<section>
				<Routes>
					<Route path='/' Component={HomeComponent} />
					<Route path='./Notes' Component={NotesComponent} />
				</Routes>
			</section>
		</Router>
	)
}

export default App
