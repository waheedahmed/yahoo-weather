import * as TYPES from './actionTypes';

export const updateLocation = (location) => ({
    type: TYPES.UPDATE_LOCATION,
    payload: location,
});

export const getWeatherForcast = () => ({
    type: TYPES.FETCH_WEATHER_FORECAST,
});

export const getWeatherForcastAttempt = () => ({
    type: TYPES.FETCH_WEATHER_ATTEMPT,
});

export const getWeatherForcastSuccess = (data) => ({
    type: TYPES.FETCH_WEATHER_SUCCESS,
    payload: data,
});

export const getWeatherForcastFail = (error) => ({
    type: TYPES.FETCH_WEATHER_FAIL,
    error: error,
});