import './App.css'
import WeatherApp from './WeatherApp';

function App() {
  let handleClick = () => {
    console.log("Buttom was clicked!");
  };

  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
