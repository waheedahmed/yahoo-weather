import React from 'react';

const ForecastItem = ({item}) => (
    <li className="forecast-item">
        {item.day} - {item.text}. High: <span className="high">{item.high}F</span> Low: <span className="low">{item.low}F</span>
    </li>
  );

export default ForecastItem;