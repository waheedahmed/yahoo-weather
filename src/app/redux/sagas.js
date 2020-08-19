import { all, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_WEATHER_FORECAST } from './actionTypes';
import * as actions from './actions';
import { selectLocationFromState } from './selectors';
import { getAuthHeaders } from './sagaUtils';

// Worker Saga
function* fetchWeather(action) {
    const location = yield select(selectLocationFromState);
    try {
        yield put(actions.getWeatherForcastAttempt());
        const response = yield axios(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json`,
            {
                headers: {
                    'Authorization': getAuthHeaders(location),
                    'X-Yahoo-App-Id': 'Eu7DR9sU',
                }
            }
        ).then((resp) => resp);
        yield put(actions.getWeatherForcastSuccess(response.data));
    } catch (error) {
        yield put(actions.getWeatherForcastFail(error));
    }
}

// Watcher Saga
function* watchWeatherForcast() {
    yield takeLatest(FETCH_WEATHER_FORECAST, fetchWeather)
};


// Root Saga
export default function* rootSaga() {
    yield all([
        watchWeatherForcast(),
    ]);
};