import { ItemList } from "../components"
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import {items} from '../data/items'
import { ItemCard } from "../components/ItemCard"

export const A = () => {
	const {arbi} = useContext(AuthContext)
	const item = items.filter(item => item.categoria === arbi)
	console.log(item)
	return (
		<div className="row row-cols-1 row-cols-md-3 g-3">
			{item.map(i =>(<ItemCard {...i}/>))}
		</div>
	)
}


export const DcPage = () => {
	const { arbi } = useContext(AuthContext)
	console.log(arbi)

	return (
		<>
			{
				arbi ? 
				<div>
					<h1>{arbi}</h1>
				<A />
				</div>
				:
				<div className="dcPage">
				<h1>Autopartes</h1>
				<hr />
					<ItemList  publisher='otro'/>
			</div>
			}
		</>
	)
}
