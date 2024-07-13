// server/controllers/whatsappController.js
import axios from "axios";

export const handleWhatsAppMessage = async (req, res) => {
  const { from, body } = req.body;
  // Parse the message and perform corresponding actions in Jira
  // Example: create a new Jira issue
  if (body.startsWith("create issue")) {
    const issueSummary = body.replace("create issue ", "");
    await createJiraIssue(issueSummary);
    await sendWhatsAppMessage("Issue created successfully", from);
  }
  res.status(200).send("Message received");
};

export const createJiraIssue = async (summary) => {
  try {
    await axios.post(
      "https://your-jira-instance.atlassian.net/rest/api/2/issue",
      {
        fields: {
          project: {
            key: "PROJECT_KEY",
          },
          summary: summary,
          issuetype: {
            name: "Task",
          },
        },
      },
      {
        auth: {
          username: "YOUR_JIRA_USERNAME",
          password: "YOUR_JIRA_API_TOKEN",
        },
      }
    );
  } catch (error) {
    console.error("Error creating Jira issue:", error);
  }
};

export const sendWhatsAppMessage = async (message, to) => {
  try {
    await axios.post("https://api.twilio.com/whatsapp/send", {
      body: message,
      from: "whatsapp:+YOUR_TWILIO_NUMBER",
      to: `whatsapp:${to}`,
    });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
};
