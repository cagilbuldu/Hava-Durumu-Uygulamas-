import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import City from './City';


function App() {
  const key = "a1b14973fc6f01c26d6500e5d36ed080";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search])
  return (
    <div className="App">
      <div class="mb-3 pt-0">
        <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-950">
          WEATHER FORECAST
        </h1>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Enter a City" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none " />
      </div>
      {city && <City city={city} />}
    </div>
  );
}

export default App;
