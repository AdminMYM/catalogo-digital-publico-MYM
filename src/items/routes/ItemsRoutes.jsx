import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, ItemPage, SearchPage, Home} from '../pages'
import { MenuItem } from '../components'


export const ItemsRoutes = () => {
	return (
		<>
			<Navbar />

			<div className='container'>
				<MenuItem />
				<Routes>
					<Route path='dc' element={<DcPage />} />

					<Route path='home' element={<Home />} />
					<Route path='search' element={<SearchPage />} />
					<Route path='hero/:id' element={<ItemPage />} />
					
					<Route path='/' element={<Navigate to='/dc' />} />
				</Routes>
			</div>
		</>
	)
}
