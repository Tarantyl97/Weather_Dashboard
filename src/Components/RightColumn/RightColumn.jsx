import React, { useState } from "react";
import styles from './style.module.css'
import InfoRight from "../InfoRight/InfoRight";
import BlockWeather from "../BlockWeather/BlockWeather";

function RightColumn (props) {
    const [weatherFiveD, setWeatherFiveD] = useState(null)
    const [errorCity, setErrorCity] = useState(null)

    function updateCurrent (weatherFiveD) {
        setWeatherFiveD(weatherFiveD);
    }

    function updateCurrentError(errorCity) {
        setErrorCity(errorCity)
    }

    return (
        <div>
            <InfoRight updateCurrent={updateCurrent} updateCurrentError={updateCurrentError} 
            city={props.city} description={props.description} date={props.date} errorCity={errorCity}/>

            <hr className={styles.line}></hr>

            {weatherFiveD ? (
            <BlockWeather updateCurrent={updateCurrent} weatherFiveD={weatherFiveD} />
            ) : null}
        </div>
    )
}

export default RightColumn;