// src/components/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSettings, updateSettings } from "../actions/settingActions.js";

const App = () => {
  const dispatch = useDispatch();
  const { settings, loading } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(loadSettings());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateSettings({ ...settings, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSettings(settings));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Jira-WhatsApp Integration Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>WhatsApp Number:</label>
          <input
            type="text"
            name="whatsappNumber"
            value={settings.whatsappNumber || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Jira Webhook URL:</label>
          <input
            type="text"
            name="jiraWebhookUrl"
            value={settings.jiraWebhookUrl || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
