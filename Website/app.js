/* Global Variables */
const apiKey = 'cfb61b45ec82c5f4f5fbc40744a07f8f';
const baseUrl = 'api.openweathermap.org/data/2.5/weather?zip=';


let button = document.getElementById("generate");
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
getWeather = async (zipCode) => {
    alert('clicked');
    let res = await fetch(baseUrl + zipCode + '&appid=' + apiKey)
    try {
        const data = await res.json();
        postWeather('/all', data);              //send as{temp:data.main.temp......}
        alert('sent');
        console.log(res);
    } catch (error) {
        console.log("error", error);
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

// Create a new date instance dynamically with JS

button.addEventListener('click', () => {
    let zipCode = document.getElementById("zip").value;
    let feelings = document.getElementById('feelings').value
    getWeather(zipCode);
});

let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();