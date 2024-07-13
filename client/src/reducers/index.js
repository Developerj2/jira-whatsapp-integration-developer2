// src/reducers/index.js
import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer.js";

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
