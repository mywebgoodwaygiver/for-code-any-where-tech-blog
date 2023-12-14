import { MongoClient} from "mongodb";

const DB = process.env.TESTDATABASE;
let client;

(async () => {
  client = new MongoClient(DB);
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
})();

// You need to handle the case where 'client' might be undefined
// if the connection hasn't been established yet.
const database = client.db();

// Define a collection
export const collection = database?.collection("allPost");