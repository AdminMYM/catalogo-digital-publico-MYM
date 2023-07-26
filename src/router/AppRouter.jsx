import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ItemsRoutes } from '../items'
import { LoginPage } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
	return (
		<>
			<Routes>
					{/* <Route path='login' element={<LoginPage />}/> */}

					<Route path="/login" element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					} 

					/>

					<Route path='/*' element={
						<PrivateRoute>
							<ItemsRoutes />
						</PrivateRoute>
					} />

					{/* <Route path='/*' element={<HeroesRoutes />}/> */}

			</Routes>
		</>
	)
}
