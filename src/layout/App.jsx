import React , {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Urunler from './pages/Urunler'
import { Route ,Switch} from 'react-router-dom'
import axios from 'axios'
import _urun from './pages/_urun'
import Favoriler from './pages/Favoriler'
import AlisverisSepeti from './pages/AlısverisSepeti'
import Iletisim from './pages/Iletisim'
const App = ()=>{
	const [satilacakUrunler, setUrunler] = useState([])
	useEffect(()=>{
		const getir =  async()=>{

			let women =await axios.get('https://fakestoreapi.com/products/category/women\'s%20clothing')

			let men = await axios.get('https://fakestoreapi.com/products/category/men\'s%20clothing')
			//console.log(men)
			setUrunler(men.data.concat(women.data))
		}
		getir()
	},[])
	return(
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Switch>
					<Route exact path='/'>
						<Urunler urunlerim={satilacakUrunler} />
					</Route>
					<Route path='/urunler/:id'>
						<_urun />
					</Route>
					<Route path='/favoriler'>
						<Favoriler/>
					</Route>
					<Route path='/iletisim'>
						<Iletisim/>
					</Route>
					<Route path='/sepetim'>
						<AlisverisSepeti/>
					</Route>
				</Switch>
			</main>
			<footer></footer>
		</>
	)
}
export default App