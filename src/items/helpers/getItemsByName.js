import { items } from "../data/items"

export const getItemsByName = (name = '')=>{
	name = name.toLocaleLowerCase().trim()

	if(name.length === 0 ) return []

	return items.filter( hero => hero.name.toLocaleLowerCase().includes(name))
}