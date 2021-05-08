const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static(__dirname + "/dist/bebot-frontend"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/bebot-frontend/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening...");
});
