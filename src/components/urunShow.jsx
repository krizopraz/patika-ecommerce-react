import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { FavoriContext } from '../contexts/Favori'
import { SepetContext } from '../contexts/Sepet'
const Show = ({state})=>{
	const [favori,setFavori] = useContext(FavoriContext)
	const [sepet,setSepet] = useContext(SepetContext)
	const [adet, setAdet] = useState(0)
	return(
		<Wrapper>
			<Img src={state.image} alt="" />
			<Details>
				<h2>{state.title}</h2>
				<p>{state.description}</p>
				<Flex>
					<Ekle onClick={(e)=>{
						if(adet===0){
							setAdet(adet+1)
							state.adet = adet+1
							setSepet(sepet.concat(state))
							e.target.value = 'Sepete Eklendi - '+state.adet+' adet'
						}else{
							sepet.forEach((urun,index) => {
								if(urun.id===state.id){
									let newSepet = sepet
									newSepet.splice(index,1)
									setAdet(urun.adet+1)
									state.adet = urun.adet+1
									console.log(state.adet)
									console.log(state)
									newSepet = newSepet.concat(state)
									setSepet(newSepet)
									e.target.value = 'Sepete Eklendi - '+state.adet+' adet'
								}
							})
						}
					}} >Sepete Ekle</Ekle>
					<Vutton onClick={(e)=>{
						if(favori.includes(state)!= true){
							setFavori(favori.concat(state))
							e.target.value = 'Favorilere Eklendi'
							console.log(e.target.value)
						}
					}} >Favorilere ekle</Vutton>
				</Flex>
			</Details>
		</Wrapper>
	)
}
Show.propTypes = {
	state: PropTypes.object
}
const Wrapper = styled.div`
width:100vw;
margin-top:68px;
display:grid;
margin-bottom:20px;
place-items:center;
grid-template-columns:repeat(1,1fr);
text-align:left;
@media screen and (min-width:1440px) {
	grid-template-columns:repeat(2,1fr);
	margin-top:30vh;
	padding:4em;
}
`
const Img = styled.img`
height:380px;
object-fit:contain;
width:100%;
`
const Details = styled.div`
width:380px;
text-wrap:none;
& *{
	margin-top:1em;
}
`
const Ekle = styled.button`
padding:1em;
border:none;
background:#FED766;
color:#272727;
text-transform:uppercase;
border-radius:6px;
margin-right:2em;
margin-left:2em;
transition:all 0.2s ease ;
&:active{
	filter:brightness(200%);
}
cursor:pointer;
outline:#272727 solid;
`
const Flex = styled.div`
display:flex;
flex-direction:flex-start;
`
const Vutton = styled.button`
padding:1em;
border:none;
outline:#272727 solid;
color:#272727;
background:none;
text-transform:uppercase;
border-radius:6px;
margin-right:2em;
margin-left:2em;
transition:all 0.2s ease ;
&:active{
	filter:brightness(200%);
}
cursor:pointer;
`
export default Show