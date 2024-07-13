// // server/app.js
// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";

// const app = express();
// const port = process.env.PORT || 3001;

// // mongoose.connect("mongodb://localhost:27017/jira-whatsapp", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// app.use(bodyParser.json());

// // Import routes
// // import jiraRoutes from "./routes/jiraRoutes.js";
// // import whatsappRoutes from "./routes/whatsappRoutes.js";

// // app.use("/api/jira", jiraRoutes);
// // app.use("/api/whatsapp", whatsappRoutes);

// app.listen(port, () => console.log(`Server running on port ${port}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//route import
import jiraRoutes from "./routes/jiraRoutes.js";
import whatsappRoutes from "./routes/whatsappRoutes.js";

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//routes
app.use("/api/jira", jiraRoutes);
app.use("/api/whatsapp", whatsappRoutes);

app.get("/", (req, res) => {
  res.send(`Server is working on PORT ${PORT} of jira-whatsapp-integration`);
});

export default app;
