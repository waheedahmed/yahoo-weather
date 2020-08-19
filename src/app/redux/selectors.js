export const selectLocationReducerFromState = (state) => state.locationReducer;
export const selectLocationFromState = (state) => selectLocationReducerFromState(state).location;

export const getweatherReducerFromState = (state) => state.weatherReducer;
export const getWeatherDataFromState = (state) => getweatherReducerFromState(state).data;
export const getCurrentObservationsFromState = (state) => getWeatherDataFromState(state)?.current_observation;
export const getCurrentConditionFromState = (state) => getCurrentObservationsFromState(state)?.condition;

export const getLocationFromState = (state) => getWeatherDataFromState(state)?.location;

export const getForecastsFromState = (state) => getWeatherDataFromState(state)?.forecasts;