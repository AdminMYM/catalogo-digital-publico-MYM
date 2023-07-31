import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import React from 'react'
import {items} from '../data/items'
import { ItemList } from "./ItemList"
import { ItemCard } from "./ItemCard"
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"


export const MenuItem = () => {
	const { setArbi } = useContext(AuthContext)
	const [e, setE] = useState('')
	const navigate = useNavigate()

	useEffect(()=>{
		const li = document.getElementsByClassName('list-item')
		const list = [...li]
		list.map(item => {
			item.addEventListener('click', ()=>{
				const menuItem = document.querySelector('.menu-item')
				menuItem.classList.toggle('inactive')
				navigate('/dc')
				setArbi(item.innerHTML)
			})
		})


	},[e])
	
	return (
		<div className="menu-item inactive" >
			<ul>
			<h2>Categorías de productos</h2>
				<li className='list-item' >Bobina Ignición</li>
				<li className='list-item' >Bomba Agua</li>
				<li className='list-item' >Bomba Combustible</li>
				<li className='list-item' >Caja Dirección</li>
				<li className='list-item' >Cazoleta Amortiguador</li>
				<li className='list-item' >Crapodina Hidráulica</li>
				<li className='list-item' >Cuerpo Aceleración</li>
				<li className='list-item' >Electroventiladores</li>
				<li className='list-item' >Embragues</li>
				<li className='list-item' >Extremo Dirección</li>
				<li className='list-item' >Filtros</li>
				<li className='list-item' >Inducido</li>
				<li className='list-item' >Inyectores</li>
				<li className='list-item' >Juntas Homocinéticas</li>
				<li className='list-item' >Kit Cadena</li>
				<li className='list-item' >Maza Rueda</li>
				<li className='list-item' >Parrilla Suspensión</li>
				<li className='list-item' >Polea Viscosa</li>
				<li className='list-item' >Portacarbón</li>
				<li className='list-item' >Portamazas</li>
				<li className='list-item' >Resistencias Electro</li>
				<li className='list-item' >Rótula Suspensión</li>
				<li className='list-item' >Semieje</li>
				<li className='list-item' >Sonda Lambda</li>
				<li className='list-item' >Soportes Cardan</li>
				<li className='list-item' >Soportes Motor</li>
				<li className='list-item' >Tanque Expansión</li>
				<li className='list-item' >Termostatos</li>
				<li className='list-item' >Tuercas Antirrobo</li>
			</ul>
			<div className="menu-background"></div>
		</div>
	)
}
