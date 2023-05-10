import React, { useState, useEffect } from "react";
import axios from "axios";
import './style-module.css'
import GetDataWeather from '../GetDataWeather/GetDataWeather'
import Normal from "../Normal/Normal";
import Input from "../Input/Input";

export const apiKey = 'cfba8eeba50cfb047315ceb55e771158';

interface LeftColumnProps {
    updateWeather: (city: string, temperature: number, description: string, date: Date) => void;
}

function LeftColumn (props: LeftColumnProps) {
    const [searchValue, setSearchValue] = useState('');
    const [isHover, setHover] =  useState(true)
    const [weather, setWeather] = useState <any> (null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState <any> (null);
    const [latitude, setLatitude] = useState <number | null> (null);
    const [longitude, setLongitude] = useState <number | null> (null);
    const [errorG, setErrorG] = useState <GeolocationPositionError | null> (null);
    
    
    async function fetchWeather() {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=metric`);
        setWeather(response.data)
        setLoading(false);
        setError(null);
            props.updateWeather(response.data.name, response.data.main.temp, response.data.weather[0].description, response.data.dt);
            console.log('work')
      } catch (error) {
        setWeather(null);
        setLoading(false);
        setError(error);
      }
  };

  async function fetchWeatherPosition() {
    setLoading(true);
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
        setWeather(response.data)
        setLoading(false);
        setError(null);
        props.updateWeather(response.data.name, response.data.main.temp, response.data.weather[0].description, response.data.dt);
  } catch (error) {
    setWeather(null);
    setLoading(false);
    setError(error);
    console.log(error)
  }
};

    const handleGeo = () => {
        fetchWeatherPosition()
        setHover(false)
    }

    const handleHover = () => {
        setHover(false)
        fetchWeather()
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => setErrorG(error)
        );
      }, []);

    return (
        <div className="all">
            <Input handleGeo={handleGeo} value={searchValue} handleHover={handleHover} onChange={event => setSearchValue(event.target.value)}/>
            {
                isHover ?
                <Normal /> :
                <GetDataWeather weather={weather} loading={loading} error={error}/>
            }
        </div>
    )
}

export default LeftColumn;