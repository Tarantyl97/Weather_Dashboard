import React from "react";
import './style-module.css'
import LeftColumn  from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";

interface ContainerProps {
    updateWeather: (city: string, temperature: number, description: string, date: Date) => void;
    city: string;
    description: string | null;
    date: Date | null;
  }
  
  function Container(props: ContainerProps): JSX.Element {
    return (
      <div className="container">
        <LeftColumn updateWeather={props.updateWeather} />
        <RightColumn city={props.city} description={props.description} date={props.date} />
      </div>
    );
  }
  
  export default Container;