const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/RickAndMorty"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "RickAndMorty", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
