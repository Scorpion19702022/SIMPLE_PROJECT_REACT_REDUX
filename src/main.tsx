import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App/App'
import './index.css'
import NotesComponent from './Components/Notes/NotesComponent'
import UsersComponent from './Components/Users/UsersComponent'
import HomeComponent from './Components/Home/HomeComponent'

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
		<RouterProvider router={router} />
	</React.StrictMode>
)
