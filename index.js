// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port
const port = 3000;

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
