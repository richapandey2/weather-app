import {
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "../constants/ActionTypes";

const initialState = {
  isPending: false,
  showData: true,
  data: {},
  isError: false,
};

export default function weatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return Object.assign({}, state, { isPending: true, showData: false });
    case FETCH_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        showData: true,
        data: action.payload,
      });
    case FETCH_WEATHER_FAILURE:
      return Object.assign({}, state, {
        isPending: false,
        showData: false,
        isError: true,
      });
    default:
      return state;
  }
}
