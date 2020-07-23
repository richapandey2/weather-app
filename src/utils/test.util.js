import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

export const testStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};
