import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');

async function connectToDatabase() {
  await client.connect();
}

async function closeDatabaseConnection() {
  await client.close();
}

export { connectToDatabase, closeDatabaseConnection };