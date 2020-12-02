
import React, {useState} from 'react';
import CityDisplay from './CityDisplay';

function App() {
  const [city] = useState('London');
  return (
    <div>
      <h2>React Hooks</h2>
  <h2>I love {city}</h2>
  <CityDisplay  cityName={city}/>
    </div>
  );
}

export default App;
