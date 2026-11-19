
let apiKey = "285d831bd4395fdd5185832084edd3d2";

function getWeather() {
    let city = document.getElementById("city").value.trim();
    let weather = document.getElementById("weather");
    let error = document.getElementById("error");

    weather.innerHTML = "";
    error.innerHTML = "";

    // Check empty input
    if (city === "") {
        error.innerHTML = "Please enter a city name";
        return;
    }

    // Fetch weather data from API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error("City not found or API error");
        }
        return response.json();
    })
    .then(data => {
        weather.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    })
    .catch(() => {
        error.innerHTML = "Unable to get weather data. Check the city name or try again.";
    });
}
