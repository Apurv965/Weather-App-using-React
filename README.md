
# Weather App

**Simple React weather app using Material UI styles**

**Description:**
- This is a small single-page React application that fetches current weather data for a searched location and displays it with a clean, responsive UI. It demonstrates working with the OpenWeatherMap API (or similar), React component structure, and basic styling.

**Features:**
- Search for a city and get current weather (temperature, description, humidity, wind).
- Clean, responsive UI components and info boxes.
- Minimal dependencies and easy to extend.

**Setup:**
1. Install dependencies:

```
npm install
```

2. Add your weather API key (example for OpenWeatherMap): create a `.env` file in the project root and add:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

3. Run the development server:

```
npm run dev
```

**Usage:**
- Open the app in your browser (Vite will show the local URL). Use the search box to enter a city name and press Enter or click the search button. The app will display the current weather details.

**Project structure (high level):**
- `src/` — React source files
- `src/WeatherApp.jsx` — main app component
- `src/SearchBox.jsx` — search input and submit
- `src/InfoBox.jsx` — weather info display components

**Scripts:**
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build


