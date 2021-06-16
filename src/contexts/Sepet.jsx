import React, {createContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
export const SepetContext  = createContext()
const Sepet = (props) => {
	const[sepet,setSepet] = useState([])
	useEffect(() => {
		console.log(sepet)
	}, [sepet])
	return(
		<SepetContext.Provider value={[sepet,setSepet]}>
			{props.children}
		</SepetContext.Provider>
	)
}
export default Sepet
Sepet.propTypes = {
	children: PropTypes.node
}