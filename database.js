const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ahmedjanisrar2:Israrabc123@cluster0.9y2vd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client;
let db;

async function connectToDatabase() {
  if (db) {
    // Return the existing database connection if it's already established
    return db;
  }

  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  console.log("Connected to MongoDB!");
  db = client.db('onlineshop'); // Replace 'StrapiIsrar' with your actual database name
  return db;
}

module.exports = connectToDatabase;
