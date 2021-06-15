import axios from 'axios'
import React,{useState,useEffect} from 'react'
//import styled from 'styled-components'
import Show from '../../components/urunShow'
//import axios from 'axios'
import { useParams } from 'react-router'
const _urun = () =>{
	const params = useParams()
	const [state, setState] = useState({})
	useEffect(()=>{
		const getir = async () =>{
			const urun  = await axios.get('https://fakestoreapi.com/products/'+params.id)
			setState(urun.data)
		}
		getir()
	},[params.id])
	//console.log(state)
	return(
		<Show state={state} />
	)
}
export default _urun