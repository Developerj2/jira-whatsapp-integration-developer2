// server/routes/whatsappRoutes.js
import express from "express";
const router = express.Router();
import { handleWhatsAppMessage } from "../controllers/whatsappController.js";

router.post("/webhook", handleWhatsAppMessage);

export default router;
