
import React, {useState} from 'react';
import CityDisplay from './CityDisplay';

// use of useState in react Hooks and passing props

function App() {
  const [city] = useState('Minneapolis...');
  return (
    <div>
      <h2>React Hooks</h2>
  <h2>I love {city}</h2>
  <CityDisplay  cityName={city}/>
    </div>
  );
}

export default App;
