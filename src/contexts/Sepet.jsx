import React, {createContext, useState} from 'react'
import PropTypes from 'prop-types'
export const SepetContext  = createContext()
const Sepet = ({children}) => {
	const[sepet,setSepet] = useState({
		id:0,title:'',price:''
	})
	return(
		<SepetContext.Provider value={[sepet,setSepet]}>
			{children}
		</SepetContext.Provider>
	)
}
export default Sepet
Sepet.propTypes = {
	children: PropTypes.node.isRequired
}