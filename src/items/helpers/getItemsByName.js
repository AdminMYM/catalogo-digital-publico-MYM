import { items } from "../data/items"

export const getItemsByName = (name = '')=>{
	name = name.toLocaleLowerCase().trim()

	if(name.length === 0 ) return []

	
	return items.filter( item => (
		item.name.toLocaleLowerCase().includes(name) || item.oem.toLocaleLowerCase().includes(name) || item.pais.toLocaleLowerCase().includes(name) || item.codigoCliente.toLocaleLowerCase().includes(name) || item.marca.toLocaleLowerCase().includes(name)
	)
	)
}