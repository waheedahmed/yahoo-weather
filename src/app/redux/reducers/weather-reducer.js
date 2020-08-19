import * as TYPES from '../actionTypes';

const initialState = {
    data: null,
    error: null,
    isLoading: false,
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_WEATHER_ATTEMPT:
            return {
                ...state, isLoading: true
            };
        case TYPES.FETCH_WEATHER_SUCCESS:
            return {
                ...state, data: action.payload, isLoading: false
            };
        case TYPES.FETCH_WEATHER_FAIL:
            return {
                ...state, error: action.error, isLoading: false
            };
        default:
            return state;
    }
}