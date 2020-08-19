import { combineReducers } from 'redux';
import { weatherReducer } from './weather-reducer';
import { locationReducer } from './location-reducer';

export const rootReducer = combineReducers({
    weatherReducer,
    locationReducer,
});