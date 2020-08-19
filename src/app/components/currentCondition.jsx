import React from 'react';

const CurrentWeather = ({currentWeather}) => {
    return (
        <div>
            <b>Current Condition:</b>
            <div>
                {currentWeather?.text}, {currentWeather?.temperature}F
            </div>
        </div>
    )
};

export default CurrentWeather;