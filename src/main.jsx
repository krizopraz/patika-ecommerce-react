import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './layout/App'
import SepetContextProvider from './contexts/Sepet'
ReactDOM.render(
	<React.StrictMode>
		<SepetContextProvider>
			<Router>
				<App />
			</Router>
		</SepetContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
