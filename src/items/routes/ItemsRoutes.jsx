import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, ItemPage, SearchPage } from '../pages'

export const ItemsRoutes = () => {
	return (
		<>
			<Navbar />

			<div className='container'>
				<Routes>
					<Route path='dc' element={<DcPage />} />

					<Route path='search' element={<SearchPage />} />
					<Route path='hero/:id' element={<ItemPage />} />
					
					<Route path='/' element={<Navigate to='/dc' />} />
				</Routes>
			</div>
		</>
	)
}
