import './App.css';
import Container from './Components/MainContainer/MainContainer';
import MainFirstText from './Components/MainFirstText/MainFirstText';
import MainSecontText from './Components/MainSecondText/MainSecondText';
import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null)

  function updateWeather(city, temperature, description, date) {
    setCity(city);
    setTemperature(temperature);
    setDescription(description)
    setDate(date)
  }

  return (
    <div className="App">
      <MainFirstText />
      <Container updateWeather={updateWeather} city={city} description={description} date={date}/>
      <MainSecontText city={city} temperature={temperature} />
    </div>
  );
}

export default App;
