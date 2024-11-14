const express = require('express');
const connectToDatabase = require('./database');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
 res.json({'Message':'Home Page!'})
});


app.get('/products', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const productsCollection = db.collection('products'); // Access the products collection
    const products = await productsCollection.find().toArray(); // Retrieve all documents
    res.json(products); // Send the data as a JSON response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
