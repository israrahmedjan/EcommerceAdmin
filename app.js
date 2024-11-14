const express = require('express');
const connectToDatabase = require('./database');
const cors = require('cors'); // Import cors package
const app = express();
const port = 3000;




// Enable all CORS requests (not recommended for production)
app.use(cors());

// Alternatively, configure CORS with options

const corsOptions = {
  origin: 'https://ecommerce-admin-zeta-hazel.vercel.app/', // Allow specific origin
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({'Message': 'Home Page!'});
});

app.get('/products', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const productsCollection = db.collection('products'); // Access the products collection
    
    // Optimizing query (optional if you have a filter)
    const products = await productsCollection.find({}).toArray(); // Retrieve all products
    
    res.json(products); // Send products data as JSON response
  } catch (error) {
    //console.error('Error fetching products:', error);
    //res.status(500).send('Error fetching products');
    res.json(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
