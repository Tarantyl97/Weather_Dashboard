import React from "react";
import city from './city.png'
import search from './search.png'
import styles from './style.module.css'

export default function Input ({handleGeo, value, onChange, handleHover}) {

    return (
    <div className={styles.search}>
        <img src={city} alt="city" onClick={handleGeo}></img>
        <input className={styles.search__input}
            type='search' 
            placeholder="Choose city"
            value={value}
            onChange={onChange}
        ></input>
        <button className={styles.search__btn} onClick={handleHover}>
            <img src={search} alt="icon-search"></img>  
        </button>
    </div>
    )
}