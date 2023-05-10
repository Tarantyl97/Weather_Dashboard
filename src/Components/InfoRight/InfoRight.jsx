import React from "react";
import styles from './style.module.css'
import axios from "axios";
import { apiKey } from "../LeftColumn/LeftColumn";

function InfoRight(props) {
    const currentDate = new Date(props.date * 1000).toLocaleString()

    async function fetchDataFiveD() {
        try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`)
        const dailyWeatherData = response.data.list.filter((item, index) => index % 8 === 0).map((item) => ({
            date: new Date(item.dt * 1000).toLocaleDateString(),
            temperature: item.main.temp,
            icon: item.weather[0].icon,
            description: item.weather[0].description
          }));

        props.updateCurrent(dailyWeatherData)
        props.updateCurrentError(null)

        } catch (error) {
            props.updateCurrentError(error)
        }
    }

    function handlerWeather () {
        fetchDataFiveD()
        console.log('hi', props.city)
    }

    if (props.errorCity) {
    return (
        <div className={styles.infoRight}> 
            <h2 className={styles.title}>NATIONAL<br></br> WEATHER</h2>
            <h3>Weather Forecast</h3>
            <p><b>Attention!</b><br></br> First: you need find the city<br></br>Second: tap the button</p>
            <button className={styles.btn} onClick={handlerWeather}>Forecast for 5 Days</button>
        </div>
        )
    }

    if (!props.description || !props.city) {
        return (
          <div className={styles.infoRight}> 
            <h2 className={styles.title}>NATIONAL<br></br> WEATHER</h2>
            <h3>Weather Forecast</h3>
            <button className={styles.btn} onClick={handlerWeather}>Forecast for 5 Days</button>
          </div>
        )
      }

    return (
        <div className={styles.infoRight}> 
            <h2 className={styles.title}>NATIONAL<br></br> WEATHER</h2>
            <h3>Weather Forecast</h3>
            <p>Last update: {currentDate}</p>
            <p>Description: {props.description}</p>
            <p>Found city: <b>{props.city}</b></p>
            <button className={styles.btn} onClick={handlerWeather}>Forecast for 5 Days</button>
        </div>
    )
}

export default InfoRight;