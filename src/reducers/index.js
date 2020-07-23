import { combineReducers } from "redux";
import weatherReducer from "./Weather.Reducer";

const rootReducer = combineReducers({
  weatherReducer
});

export default rootReducer;
