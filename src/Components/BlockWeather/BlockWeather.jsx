import React from "react";
import styles from './style.module.css'

function BlockWeather(props) {

    if (!props.weatherFiveD || !props.weatherFiveD.length) {
      return null;
    }

    return (
      <div className={styles.blockFive}>
        {props.weatherFiveD.map((item) => (
          <div key={item.date}>
            <p>{item.date}</p>
            <p>{item.description}</p>
            <img src={`http://openweathermap.org/img/w/${item.icon}.png`} alt="weather icon" />
            <p>{item.temperature}°C</p>
          </div>
        ))}
      </div>
    );
}

    export default BlockWeather;