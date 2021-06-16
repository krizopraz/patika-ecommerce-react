import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './layout/App'
import SepetContextProvider from './contexts/Sepet'
import FavoriContextProvider from './contexts/Favori.jsx'
ReactDOM.render(
	<React.StrictMode>
		<SepetContextProvider>
			<FavoriContextProvider>
				<Router>
					<App />
				</Router>
			</FavoriContextProvider>
		</SepetContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
