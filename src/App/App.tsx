import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import HomeComponent from '../Components/Home/HomeComponent'
import NotesComponent from '../Components/Notes/NotesComponent'
import UsersComponent from '../Components/Users/UsersComponent'

function App() {
	return (
		<Router>
			<NavBar />
			<section>
				<Routes>
					<Route path='/' Component={HomeComponent} />
					<Route path='/Notes' Component={NotesComponent} />
					<Route path='/Users' Component={UsersComponent} />
				</Routes>
			</section>
		</Router>
	)
}

export default App
