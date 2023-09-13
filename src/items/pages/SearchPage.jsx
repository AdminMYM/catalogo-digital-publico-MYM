import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../ui/hooks/useForm'
import { ItemCard } from '../components'
import { getItemsByName } from '../helpers/getItemsByName'
export const SearchPage = () => {

	const navigate = useNavigate()
	const location = useLocation()

	const { q = '' } = queryString.parse(location.search)
	const heroes = getItemsByName(q)

	const showSearch = (q.length === 0)
	const showError = (q.length > 0) && heroes.length === 0

	const { searchText, onInputChange } = useForm({
		searchText: q
	})

	const onSearchSubmit = (event) => {
		event.preventDefault()

		navigate(`?q=${searchText}`)
	}

	return (
		<>
			<h1>Buscar</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Buscando</h4>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input
							type="text"
							placeholder="Buscar por código de la pieza, código cliente, nombre, marca y/o país"
							className="form-control"
							name="searchText"
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>

						<button className="btn btn-outline-primary mt-1">
							Buscar
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Resultados</h4>
					<hr />

					<div className="alert alert-primary animate__animated animate__fadeIn"
						style={{ display: showSearch ? '' : 'none' }}>
						Buscar un ítem
					</div>

					<div className="alert alert-danger animate__animated animate__fadeIn"
						style={{ display: showError ? '' : 'none' }}>
						No resultados <b>{q}</b>
					</div>

					{
						heroes.map(hero => (
							<ItemCard key={hero.id} {...hero} />

						))
					}

				</div>
			</div>
		</>
	)
}
