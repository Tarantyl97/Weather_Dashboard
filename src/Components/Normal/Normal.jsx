import React from "react";
import styles from './style.module.css'
import weatherIcon from './icon-weather.jpg'

export default function Normal() {

    return(
            <div className={styles.infoNormal}>
            <h1>We will find the Forecast</h1>
                <p>Please choose city or use find "Geolocation"</p>
                <p>You can tap on the "house" for find Geolocation</p>
                <img src={weatherIcon} width={"300px"}></img>
            </div>
    )
}