// server/controllers/jiraController.js
import axios from "axios";

export const handleJiraWebhook = async (req, res) => {
  const { issue, user, webhookEvent } = req.body;
  // Process the webhook event
  // Send a notification to WhatsApp
  // Example: send a message using Twilio API
  const message = `Issue ${issue.key} has been updated by ${user.displayName}`;
  await sendWhatsAppMessage(message);
  res.status(200).send("Webhook received");
};

export const sendWhatsAppMessage = async (message) => {
  try {
    await axios.post("https://api.twilio.com/whatsapp/send", {
      body: message,
      from: "whatsapp:+YOUR_TWILIO_NUMBER",
      to: "whatsapp:+USER_PHONE_NUMBER",
    });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
};
