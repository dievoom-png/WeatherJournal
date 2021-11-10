/* Global Variables */
const apiKey = '0d408b07ca35238b77ba75ed90be78c8';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';


let button = document.getElementById("generate");

getWeather = async (baseUrl, zipCode, apikey) => {  //the getWeather function uses the userinput and passes it to the fetch to get the wanted country weather
    
    const res = await fetch(baseUrl + zipCode + ',us' + '&APPID=' + apiKey)

    //console.log(res);

    try {
        const apiData = await res.json();

        //console.log(apiData);
        return (temp = apiData.main.temp);
    } catch (error) {
        console.log(error);
    }
}

const postWeather = async (url = '', data = {}) => { //posts the data to the server
   // console.log(data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    })

    try {
        const weather = await res.json();
       // console.log("data sent to server");
        return weather;
    } catch (error) {
        console.log(error)
    }
};


updateLog = async () => {
    const res = await fetch('http://localhost:8000/getWeatherData') //grabs the data from the server to be displayed
    try {
        const weatherData = await res.json()
       // console.log("data fetched from server");
       // console.log(weatherData);
        document.getElementById("date").innerHTML = weatherData.date; //displays the data to the user using InnerHtml
        document.getElementById("temp").innerHTML = weatherData.temp;
        document.getElementById("content").innerHTML = weatherData.feelings;

    } catch (error) {
        console.log(error);
    }

}
// Create a new date instance dynamically with JS

button.addEventListener('click', () => {
    let zipCode = document.getElementById("zip").value;
    let feelings = document.getElementById('feelings').value;
    getWeather(baseUrl, zipCode, apiKey)
        .then(function (temp) {
            postWeather('http://localhost:8000/all', { 
                    temperature: temp,
                    date: newDate,
                    feelings: feelings
                })
                .then(function () {
                    updateLog();

                })
        })
        .catch(error => console.log(error));


});

let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();