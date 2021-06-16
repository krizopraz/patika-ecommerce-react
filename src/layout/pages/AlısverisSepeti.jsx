import React, { useContext } from 'react'
import { SepetContext } from '../../contexts/Sepet'
import styled from 'styled-components'
const AlisverisSepeti = ()=>{
	// eslint-disable-next-line react/prop-types
	const SepetUrunCard = ({price,title,adet,image,remove}) => {
		return(
			<CardWrapper>
				<Img src={image} alt="" />
				<span>{title}</span>
				<span>{price} TL</span>
				<span>{adet} adet</span>
				<button onClick={remove()}>Sepetten Kaldır </button>
			</CardWrapper>
		)
	}
	const [sepet,] = useContext(SepetContext)
	return(
		<div>
			<h1>AlısverisSepeti</h1>
			<Wrapper>
				<div>
					{sepet.map((urun)=><SepetUrunCard remove={()=>{}} key={urun.id} {...urun} />)}

				</div>
				<div>

				</div>
			</Wrapper>
		</div>
	)
}
const Wrapper = styled.div`
	display:grid;
	place-content: center;
	margin-top:68px;
`
const CardWrapper = styled.div`
width:380px;
height:200px;
display:flex;
align-items:center;
justify-content:space-evenly;
outline:1px solid;
`
const Img = styled.img`
object-fit:contain;
height:100%;`
export default AlisverisSepeti