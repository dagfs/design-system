const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "storybook-static")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/storybook*", function(req, res) {
  res.sendFile(path.join(__dirname, "storybook-static", "index.html"));
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
