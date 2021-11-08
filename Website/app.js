/* Global Variables */
const apiKey = '0d408b07ca35238b77ba75ed90be78c8';
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';


let button = document.getElementById("generate");
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
//api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}
getWeather = async (baseUrl,zipCode,apikey) => {
    alert('clicked');
    const res = await fetch(baseUrl+ zipCode+',us' + '&APPID=' + apiKey)

    console.log(res);

    try {
        const apiData = await res.json();

        alert(res.status);
        console.log(apiData);
        return (temp = apiData.main.temp);
    } catch (error) {
        console.log(error);
    }
}

const postWeather = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    })
};


updateLog = async () => {

}
// Create a new date instance dynamically with JS

button.addEventListener('click', () => {
    let zipCode = document.getElementById("zip").value;
    let feelings = document.getElementById('feelings').value
    getWeather(baseUrl,zipCode,apiKey)
        .then(function (temp) {
            postWeather('/all', {
                    temp: temp,
                    date: newDate,
                    feeling: feelings
                })
                .then(function () {
                    updateLog();

                })
        })
        .catch(error => console.log(error));


});

let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();