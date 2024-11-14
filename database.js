const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ahmedjanisrar2:Israrabc123@cluster0.9y2vd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client;
let db;

async function connectToDatabase() {
  if (db) {
    // Return the existing database connection if it's already established
    return db;
  }

  // Initialize the MongoClient and connect
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    useNewUrlParser: true,
    useUnifiedTopology: true, // Use unified topology for better performance
  });

  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    db = client.db('onlineshop'); // Use the correct database name
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error; // Rethrow error if connection fails
  }
}

module.exports = connectToDatabase;
