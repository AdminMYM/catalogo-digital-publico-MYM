import {items} from '../data/items'

export const getItemByPublisher = (publisher)=>{
	const validPublishers = ['otro']
	if( !validPublishers.includes(publisher)){
		throw new Error(`${publisher} is not a valid publisher`)
	}

	return items.filter(item => item.publisher === publisher)
}