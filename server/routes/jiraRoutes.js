// server/routes/jiraRoutes.js
import express from "express";
const router = express.Router();
import { handleJiraWebhook } from "../controllers/jiraController.js";

router.post("/webhook", handleJiraWebhook);

export default router;
