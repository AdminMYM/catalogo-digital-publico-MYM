import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
	// const [item, setItem] = useState()

	useEffect(() => {
		const menu = document.querySelector('.menu')
		menu.addEventListener('click', () => {
			const menuItem = document.querySelector('.menu-item')
			menuItem.classList.toggle('inactive')
			// setItem('hola')
		})
	},)

	return (
		<>
			<nav className="navbar-header navbar navbar-expand-sm navbar-dark bg-dark p-2">


				<Link
					className="navbar-brand"
					to="/home"
				>
					<img className='logo' src="https://i.ibb.co/94MFB2x/copia-logo.png" alt="Logo MYM" />
				</Link>

				<div className="menu">
					<i className="fa-solid fa-bars fa-2xl"></i>
				</div>

				<div className="navbar-collapse">
					<div className="navbar-nav">

						<NavLink
							className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
							to="/dc"
						>
							Autopartes
						</NavLink>

						<NavLink
							className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
							to="/search"
						>
							Buscar
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	)
}