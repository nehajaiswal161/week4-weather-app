import { CONFIG } from './config.js';
export class WeatherService {
    async getCurrentWeather(city) {
        try {
            const response = await fetch(
  `${CONFIG.BASE_URL}/weather?q=${city}&units=metric&appid=${CONFIG.API_KEY}`
);
            if (!response.ok) {
                throw new Error('City not found');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}