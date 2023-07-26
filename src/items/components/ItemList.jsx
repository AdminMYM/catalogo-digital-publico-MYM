import { ItemCard } from "./ItemCard"
import { getItemByPublisher } from "../helpers/getItemByPublisher"
import { useMemo } from "react"

export const ItemList = ({publisher}) => {
	const items = useMemo(()=> getItemByPublisher(publisher),[publisher])

	return (
		<div className="row row-cols-1 row-cols-md-3 g-3">
			{
				items.map(item =>(
					<ItemCard key={item.id} {...item}/>
				))
			}
		</div>
	)
}
