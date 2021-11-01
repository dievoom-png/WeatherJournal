// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();
const port = 8000;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ // As of node 4.+ we dont have to use body parser as it gave me an error saying bodyparser is deprecated
    extended: false
}));
app.use(express.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server 
app.listen(port, () => {
    console.log(`Example app listening at 127.0.0.1:${port}`)
})
app.get('/', (req, res) => {
    res.send(index.html);
})
app.post('/all', (req, res) => {
    projectData.push(req.body)
})