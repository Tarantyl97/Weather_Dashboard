import './App.css';
import Container from './Components/MainContainer/MainContainer';
import MainFirstText from './Components/MainFirstText/MainFirstText';
import MainSecontText from './Components/MainSecondText/MainSecondText';
import React, { useState } from 'react';

interface Props {
    updateWeather: (city: string, temperature: number, description: string, date: Date) => void;
    city: string;
    temperature: number | null;
    description: string | null;
    date: Date | null
}

function AppTS() : JSX.Element {
  const [city, setCity] = useState <string>('');
  const [temperature, setTemperature] = useState <number | null> (null);
  const [description, setDescription] = useState <string | null> (null);
  const [date, setDate] = useState <Date | null> (null)

  function updateWeather(city: string, temperature: number, description: string, date: Date): void {
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

export default AppTS;
