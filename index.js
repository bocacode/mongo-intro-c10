import { client } from './mongoConnect.js'


const deleteFruit = async () => {
	// start try catch here

	const itemDeleted = await collection.deleteOne({ name: 'Pineapple' })
	console.log(itemDeleted)
}

// deleteFruit()
