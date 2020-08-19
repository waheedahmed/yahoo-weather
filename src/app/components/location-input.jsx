import React, { useCallback, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { updateLocation, getWeatherForcast } from '../redux/actions';
import { selectLocationFromState } from '../redux/selectors';

const LocationInput = (props) => {
    const dispatch = useDispatch();
    const locationInput = useSelector(selectLocationFromState);
    const handleClick = useCallback(() => {
        dispatch(getWeatherForcast());
    }, [dispatch]);

    return (
        <Fragment>
            <div className="get-forcast-container">
                <label>Enter Location: </label>
                <input value={locationInput} onChange={(e) => dispatch(updateLocation(e.target.value))}></input>
                <button className="btn-get" onClick={handleClick}>Get Forcast</button>
            </div>
        </Fragment>
    );
}

export default connect(null, { updateLocation, getWeatherForcast })(LocationInput);