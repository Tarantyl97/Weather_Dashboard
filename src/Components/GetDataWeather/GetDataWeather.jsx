import React from "react";
import styles from './style.module.css'

export default function GetDataWeather ({ weather, loading, error }) {
    if (loading) {
        return <p>Loading...</p>;
    }

    if(error && error.response.status === 404 ) {
        return <p>Not found this City<br></br> Try Again</p>
       }

    if (error) {
        return <p>Sorry, something went wrong.<br></br> Please try again later.</p>;
    }

    if (!weather) {
        return null;
    }

    if (weather) {
        const { name, visibility, main, weather: [currentWeather], wind, sys } = weather;
        const pressureInMmHg = (main.pressure * 0.75006).toFixed(2);
        const sunriseTime = new Date(sys.sunrise * 1000);
        const sunriseHours = sunriseTime.getHours();
        const sunriseMinutes = sunriseTime.getMinutes();
        const sunriseFormatted = `${sunriseHours.toString().padStart(2, '0')}:${sunriseMinutes.toString().padStart(2, '0')}`;
        const sunsetTime = new Date(sys.sunset * 1000);
        const sunsetHours = sunsetTime.getHours();
        const sunsetMinutes = sunsetTime.getMinutes();
        const sunsetFormatted = `${sunsetHours.toString().padStart(2, '0')}:${sunsetMinutes.toString().padStart(2, '0')}`;

    return (
            <div className={styles.info}>
            <h1>{name}</h1>
                <p>Visibility: {visibility}m</p>
                <p>Description: "{currentWeather.description}"</p>
                <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}></img>
                <p>Temperature: {main.temp}°C</p>
                <p>Temperature-feels: {main.feels_like}°C</p>
                <p>Pressure: {pressureInMmHg}mm/Hg</p>
                <p>Humidity: {main.humidity}%</p>
                <p>Wind-speed: {wind.speed}m/s</p>
                <p>Sunrise: {sunriseFormatted}</p>
                <p>Sunset: {sunsetFormatted}</p>
            </div>
    ) 
    } else {
        return null;
    }
}

