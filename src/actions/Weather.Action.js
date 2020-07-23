import { weatherApi } from "../api/weather/Weather.Api";
import {
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "../constants/ActionTypes";

export const fetchWeatherAction = (city) => (dispatch) => {
  weatherApi(city)
    .then((response) =>
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response })
    )
    .catch(() => dispatch({ type: FETCH_WEATHER_FAILURE }));
};

export const loaderAction = () => (dispatch) => {
  dispatch({ type: FETCH_WEATHER_PENDING });
};
