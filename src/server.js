const express = require('express');

const app = express();
const port = 8080;

app.get("/", (req,res) => {
  res.json({
    message: "Hello, worlds"
  });
});

app.listen(port);
console.log("listen on port " + port);