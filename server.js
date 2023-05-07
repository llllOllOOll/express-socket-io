const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
  method: ["GET", "POST"],
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("message", (msg) => {
    io.emit("message", `server reply: ${msg}`);

    console.log("message: " + msg);
  });
});

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
