import { client } from './mongoConnect.js'


const getAllFruits = async () => {
	try {
		await client.connect()
		const allFruits = await collection.find().toArray()
		console.log(allFruits)
	} catch (error) {
		console.log(error)
	} finally {
		await client.close()
	}

	/*** using .then .catch */
	// collection
	// 	.find()
	// 	.toArray()
	// 	.then(items => console.log(items))
	// 	.catch(err => console.log(err))
}

getAllFruits()

const deleteFruit = async () => {
	// start try catch here

	const itemDeleted = await collection.deleteOne({ name: 'Pineapple' })
	console.log(itemDeleted)
}

// deleteFruit()
