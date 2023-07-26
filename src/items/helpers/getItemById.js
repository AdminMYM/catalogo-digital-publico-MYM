import { items } from "../data/items"

export const getItemById = (id) => {
	return items.find(hero => hero.id === id)
}
