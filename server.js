const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const server = http.createServer(app);

/**
 * @desc Middlewares
 * bodyParser => parse application/json
 * morgan => log requests to the console
 * express.static => serve static files from public directory
 * cors => enable CORS
 */
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(cors());
app.get("/", (req, res) => {
  res.set("Content-type", "application/json");
  res.json({ name: "Seven" });
});

app.post("/customer", (req, res) => {
  const customer = {
    name: req.body.name,
  };
  res.json(customer);
});

server.listen(3000, () => console.log("listening on 3000"));
