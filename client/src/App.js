// client/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const result = await axios.get("/api/settings");
      setSettings(result.data);
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/settings", settings);
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
