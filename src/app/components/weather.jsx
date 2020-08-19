import React from 'react';
import { connect } from 'react-redux';
import { getCurrentConditionFromState, getLocationFromState, getForecastsFromState } from '../redux/selectors';
import ForecastItem from './forecastItem';
import CurrentWeather from './currentCondition';

const WeatherComponent = ({currentWeather, location, forecasts}) => {

    return (
        <div>
            { location && <h2 className="header-lablel">Conditions for {location?.city}, {location?.country}</h2>}
            { currentWeather && <CurrentWeather currentWeather={currentWeather} />}
            <br/>
            { forecasts &&
                <div>
                    <b>Forecasts:</b>
                    <ul className="forecast-list">
                        {
                            Object.entries(forecasts).map(([key, value]) => {
                                return <ForecastItem key={`item-${key}`} item={value} />
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
};

const mapStateToProps = state => {
    const currentWeather = getCurrentConditionFromState(state);
    const location = getLocationFromState(state);
    const forecasts = getForecastsFromState(state);
    return { currentWeather, location, forecasts };
};

export default connect(mapStateToProps)(WeatherComponent);