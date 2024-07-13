// src/reducers/settingsReducer.js
import { SET_SETTINGS, LOADING_SETTINGS } from "../actions/settingActions.js";

const initialState = {
  settings: {},
  loading: false,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SETTINGS:
      return { ...state, loading: true };
    case SET_SETTINGS:
      return { ...state, settings: action.payload, loading: false };
    default:
      return state;
  }
};

export default settingsReducer;
