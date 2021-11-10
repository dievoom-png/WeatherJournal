// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;
// Setup Server 
app.listen(port, () => {
    console.log(`Example app listening at 127.0.0.1:${port}`)
})

app.post('/all', (req, res) => { //grabs the data from the frontend
    //projectData.push(req.body)
    projectData.temp = req.body.temperature;
    projectData.date = req.body.date;
    projectData.feelings = req.body.feelings;
    res.end();

})
app.get("/getWeatherData",(req,res)=>{//sends the data to be displayed to the user using the updatelog function
    res.send(projectData);
})