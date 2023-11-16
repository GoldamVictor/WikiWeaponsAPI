const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is now working");
});

app.listen(3000, () => {
  console.log("Server is now listening on port 3000");
});
