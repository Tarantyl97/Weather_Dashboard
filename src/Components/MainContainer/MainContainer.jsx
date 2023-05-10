import React from "react";
import './style-module.css'
import LeftColumn  from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";

function Container (props) {

    return (
        <div className="container">
            <LeftColumn updateWeather={props.updateWeather}/>
            <RightColumn city={props.city} description={props.description} date={props.date}/>
        </div>
    )
}

export default Container;