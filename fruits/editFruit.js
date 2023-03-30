import { client, fruitsCollection } from '../mongoConnect.js'

client.connect()

const editFruit = async () => {
	// collection.findOne({ name: 'Pear' })
	const updatedFruit = await fruitsCollection.findOneAndUpdate(
		{ name: 'Pear' },
		{ $set: { name: 'Grape', special: true } }
	)

	console.log(updatedFruit)
}

editFruit()
