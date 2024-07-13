// src/actions/settingsActions.js
import { fetchSettings, saveSettings } from "../api/api";

export const SET_SETTINGS = "SET_SETTINGS";
export const LOADING_SETTINGS = "LOADING_SETTINGS";

export const loadSettings = () => async (dispatch) => {
  dispatch({ type: LOADING_SETTINGS });
  const result = await fetchSettings();
  dispatch({ type: SET_SETTINGS, payload: result.data });
};

export const updateSettings = (settings) => async (dispatch) => {
  await saveSettings(settings);
  dispatch({ type: SET_SETTINGS, payload: settings });
};
