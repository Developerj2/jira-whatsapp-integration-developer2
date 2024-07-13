// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const fetchSettings = () => api.get("/settings");
export const saveSettings = (settings) => api.post("/settings", settings);
