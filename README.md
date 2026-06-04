🌤️ Weather Dashboard Application

📝 Project Overview

A dynamic, real-time weather monitoring application built to provide users with accurate climate data. This project demonstrates efficient API integration and modular frontend architecture.

⚙️ Setup Instructions

1.Clone the repository to your local machine.
2.Open the project in VS Code.
3.Use the "Go Live" extension to run the project on 127.0.0.1:5500.
4.Enter your city name and click "Get Weather" to retrieve data.

📂 Code Structure

The project is organized into a modular hierarchy:

index.html: Main structure of the dashboard.

app.js: Initializes the application and handles event listeners.

weatherService.js: Manages API communication and data retrieval.

ui.js: Handles DOM manipulation and visual updates.

storage.js: Manages localStorage for persistent user preferences.

🖼️ Visual Documentation

Screenshots demonstrating the functionality of the dashboard:

Initial View:
![Initial State](Screenshot (314).jpg)

Functional View (Data Loaded):

🛠️ Technical Details
Asynchronous Programming: Uses async/await for non-blocking API calls to the OpenWeatherMap API.

Data Flow: Input is captured in app.js, processed in weatherService.js, rendered by ui.js, and persisted via storage.js.

🧪 Testing Evidence
Successfully tested for connectivity with real-time API responses.

Implemented try-catch blocks to handle errors like "City not found".

🏗️ Component Architecture
The application follows a class-based modular architecture to ensure separation of concerns:

WeatherService Class: Handles asynchronous fetch calls.

UI Class: Dynamically updates the interface with fetched data.

Storage Class: Saves and retrieves the last searched location.