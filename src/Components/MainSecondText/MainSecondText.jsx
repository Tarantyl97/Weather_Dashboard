import React from "react";

function MainSecontText (props) {

    if(props.city === '') {
        return (
            <div className='title'>
                <p className='title__text'>Temperature</p>
                <p className='title__text'>City</p>
            </div>
        )
    }

    return (
        <div className='title'>
            <p className='title__text'>{props.temperature}°C</p>
            <p className='title__text'>{props.city}</p>
        </div>
    )
}

export default MainSecontText;