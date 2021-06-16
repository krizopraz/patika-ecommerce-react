import React, {createContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
export const FavoriContext  = createContext()
const Favori = (props) => {
	const[favori,setFavori] = useState([])
	useEffect(() => {
		console.log(favori)
	}, [favori])
	return(
		<FavoriContext.Provider value={[favori,setFavori]}>
			{props.children}
		</FavoriContext.Provider>
	)
}
export default Favori
Favori.propTypes = {
	children: PropTypes.node
}