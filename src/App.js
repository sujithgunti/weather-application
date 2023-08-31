import { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempatureAndDetails from './components/TempatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/Weatherservice';
import getWeatherData from './services/Weatherservice';
function App() {
  const [query, setQuery] = useState({ q: 'hyderabad' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    }
    fetchWeather();
  }, [query, units]);
  // const fetchWeather = async () => {
  //       const data= await getFormattedWeatherData({q:'london'});
  //       console.log(data);
  //     }
  //     fetchWeather();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits}/>

      { 
        weather && <div>
          <TimeAndLocation weather={weather} />
          <TempatureAndDetails weather={weather} />

          {/* <Forecast title="hourly forecast" />
          <Forecast title="Daily forecast" /> */}
        </div>
      }

    </div>
  );
}

export default App;
