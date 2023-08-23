const express = require("express");

const app = express();

const path = require("path");

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Name is Nazeeh and Express Server is running on port ${PORT}`)
);
