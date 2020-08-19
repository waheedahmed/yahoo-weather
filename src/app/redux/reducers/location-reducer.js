import * as TYPES from '../actionTypes';

const initialState = {
    location: '',
}

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.UPDATE_LOCATION:
            return {
                ...state, location: action.payload
            };
        default:
            return state;
    }
}