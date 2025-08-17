import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App/App'
import './index.css'
import NotesComponent from './Components/Notes/NotesComponent'
import UsersComponent from './Components/Users/UsersComponent'
import HomeComponent from './Components/Home/HomeComponent'
import { Provider } from 'react-redux'
import { store } from './Features/store'
import Magic8Ball from './Components/Magic8Ball/Magic8Ball'
import Wallet from './Components/Wallet/Wallet'

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					index: true,
					element: <HomeComponent />,
				},
				{
					path: 'UsersInputs',
					element: <UsersComponent />,
				},
				{
					path: 'Notes',
					element: <NotesComponent />,
				},
				{
					path: 'Magic8Ball',
					element: <Magic8Ball />,
				},
				{
					path: 'Wallet',
					element: <Wallet />,
				},
			],
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
		},
	}
)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
