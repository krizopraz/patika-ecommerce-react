import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
const Show = ({state})=>{
	return(
		<Wrapper>
			<Img src={state.image} alt="" />
			<Details>
				<h2>{state.title}</h2>
				<p>{state.description}</p>
				<Flex>
					<Ekle>Sepete Ekle</Ekle>
					<button>Favorilere ekle</button>
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
grid-template-columns:repeat(1,1fr);
text-align:center;
`
const Img = styled.img`
height:380px;
object-fit:contain;
width:100%;
`
const Details = styled.div`
width:100%;
text-wrap:none;
& *{
	margin-top:1em;
}
`
const Ekle = styled.button`
padding:1em;
border:none;
background:#272727;
color:#FED766;
text-transform:uppercase;
border-radius:6px;
margin-right:2em;
margin-left:2em;
transition:all 0.2s ease ;
&:active{
	filter:brightness(200%);
}
`
const Flex = styled.div`
display:flex;
flex-direction:flex-start;
`
export default Show