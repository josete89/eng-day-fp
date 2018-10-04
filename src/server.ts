import * as express from "express";

const app = express();
const port = 8080;

app.get("/", (req:express.Request, res:express.Response) => {
  res.json({
    message: "Hello, worlds"
  });
});

app.listen(port);
console.log("listen on port " + port);