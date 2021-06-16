import React, { useContext } from 'react'
import UrunCard from '../../components/UrunCard'
import { FavoriContext } from '../../contexts/Favori'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Favoriler = ()=>{
	const [favori,] = useContext(FavoriContext)
	console.log(favori)
	return(
		<Wrapper>
			<h1>Favoriler</h1>
			{favori.map(urun=> <Link key={urun.id} to={'/urunler/'+urun.id} ><UrunCard  title={urun.title} price={urun.price} img={urun.image} /></Link> )}
		</Wrapper>
	)
}
const Wrapper = styled.div`
gap:34px;
margin-top:68px;
display:grid;
grid-template-columns:repeat(1,1fr);
padding:2rem;
place-items:center;
*{
	color:#272727;
}
@media screen and (min-width:768px){
	grid-template-columns:repeat(3,1fr);
}
@media screen and (min-width:1440px){
	grid-template-columns:repeat(5,1fr);
}
`
export default Favoriler