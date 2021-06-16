import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MenuButton from './MenuButton'
import { NavLink } from 'react-router-dom'
const Navbar = () =>{
	const [state, setstate] = useState(false)
	return(
		<>
			<Nav>
				<Content>
					<Link exact to="/">
						<Logo />
					</Link>
					<Upperlinks>
						<li>
							<Link exact to="/">Ürünler</Link>
						</li>
						<li>
							<Link to="/favoriler">Favori Ürünlerim</Link>
						</li>
						<li>
							<Link to="/iletisim">İletişim</Link>
						</li>
						<li>
							<Link to="/sepetim">Alışveriş Sepetim</Link>
						</li>
					</Upperlinks>

				</Content>
			</Nav>
			<Button  onClick={()=>setstate(!state)}>

				<MenuButton active={state} />
			</Button>
			{state ? <Dropdown>
				<ul>
					<li>
						<Link exact to="/">Ürünler</Link>
					</li>
					<li>
						<Link to="/favoriler">Favori Ürünlerim</Link>
					</li>
					<li>
						<Link to="/iletisim">İletişim</Link>
					</li>
					<li>
						<Link to="/sepetim">Alışveriş Sepetim</Link>
					</li>
				</ul>
			</Dropdown>:''}
		</>
	)
}

const Dropdown = styled.div`
position:fixed;
z-index:40;
bottom:68px;right:40px;
background:#272727;
width:max-content;
padding:1em;
border-radius:6px;
&>ul{
	&>*{
		padding:1rem 0;
	}
	text-align:center;
	width:100%;
	list-style:none;
	display:flex;
	flex-direction:column;
}
`
const Button = styled.button`
border:none;
background: #272727;
border-radius:50px;
position: fixed;
width: 74px;
height: 74px;
right:0px;
bottom:0;
display:grid;
place-content:center;
margin-bottom:10px;
margin-right:10px;
z-index:40;
@media screen and (min-width:1440px){
	display:none;
}
`
const Nav = styled.nav`
/* Navbar Android */
position:fixed;
z-index:40;
width:100%;
top:0;
&>ul{
	list-style:none;
	display:flex;
	justify-conten:space-evenly;
}

/* Auto Layout */
height:68px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px 12px;

/* Black */

background: #272727;

@media screen and (min-width:1440px){
	justify-items:space-between;
	display:flex;
}
`
const Upperlinks = styled.div`
display:none;
&>li:not(last-child){
	margin-right:16px;
}
@media screen and (min-width:1440px){
	list-style:none;
	display:flex;
	justify-content:space-evenly;
	margin-left:40px;
}
`
const Link = styled(NavLink)`
color:#EFF1F3;
text-decoration:none;
`
const Content = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export default Navbar