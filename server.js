// Import Modules
const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");

// Global Variables
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Start Server
db.once("open", () => {
  app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
  });
});
