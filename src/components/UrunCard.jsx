import React from 'react'
import styled from 'styled-components'
import Badge from './Badge'
import PropTypes from 'prop-types'
const UrunCard = ({title,price,img}) => {
	return(
		<Card>
			<Img src={img} alt="" />
			<H3>{title}</H3>
			<Details>
				<div><Badge /> Onaylı</div>

				<span>{price}TL</span>
			</Details>
		</Card>
	)
}
UrunCard.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}
const Card = styled.div`
/* Card */
&>*{
	width:100%;
}
overflow:hidden;
display: grid;
position:relative;
padding:4rem;
width: 206px;
height: 282px;
place-content:center;

border: 4px solid #272727;
border-radius: 6px;
`
const Img = styled.img`
/* Rectangle 3 */
position: relative;
width: 158px;
height: 158px;
object-fit:contain;
border: 1px solid rgba(39, 39, 39, 0.92);
box-sizing: border-box;
border-radius: 6px;
`
const Details = styled.div`
height:50px;
width:100%;
position:absolute;
bottom:0;
display:flex;
align-items:center;
padding:1em;
justify-content:space-between;
background:#272727;
 *{
	 color:#FED766!important;
 }
`
const H3 = styled.h4`
	width:158px;
	height:41px;
	text-align:center;
	text-wrap:no-wrap;
	overflow:hidden;
	text-overflow: ellipsis;
	margin-bottom:53px;
`
export default UrunCard