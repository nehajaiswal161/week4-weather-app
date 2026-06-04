import { WeatherService } from './weatherService.js';
const weather = new WeatherService();
const btn = document.getElementById('searchBtn');
const input = document.getElementById('searchInput');
const display = document.getElementById('weatherDisplay');
btn.addEventListener('click', async () => {
    const city = input.value;
    if (!city) return alert("Please enter a city name!");
    try {
        const data = await weather.getCurrentWeather(city);
        display.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        display.innerHTML = `<p style="color:red;">Error: City not found!</p>`;
    }
});