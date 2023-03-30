import dotenv from 'dotenv'

dotenv.config()
const MONGOURI = process.env.MONGOURI

import { MongoClient } from 'mongodb'

export const client = new MongoClient(MONGOURI)
const database = client.db('products')

export const fruitsCollection = database.collection('fruits')
export const toysCollection = database.collection('toys')

