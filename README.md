## Example Express.js Socket.oi

In this example, I will use Express.js to create a simple RESTful API. The API should be able to receive and send JSON data to the client. I will use the browser console to accomplish this.

Normally, to create a server using Express.js, we would use `require('http')` from the Node modules. When we call `app.listen()`, an HTTP server is attached to our Express app, and this is usually the main approach. However, if we want to use something like WebSocket or TCP connections, creating an HTTP server would give us more flexibility.

`express.static("public")` Express should be to able to serve static
content inside the public folder. So, we can get an image for example: http://localhost:300/image.jpg

Once we have created an HTTP server and added our app to it, we can run our application this way: `server.listen(3000,()=>{})`.

Here are the middlewares that will be used:

- `app.use(bodyParser.json())`
- `app.use(morgan("dev"))`
- `app.use(express.static("public"))`
- `app.use(cors())`

### Get data directly from the browser console. Google Chrome is recommended.

Open a new tab and type this: about:blank and press F12 to open the console.

To send data to the server and receive a response, we can use the following fetch method:

```js
fetch("http://localhost:3000/customer", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Luna" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

To get data from the Node/Express, we can use the following method:

```js
fetch("http://localhost:3000/", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### About Socket.oi

When building real-time web applications, we often need to use WebSockets to establish a two-way communication channel between the server and the client. Socket.IO is a popular library for enabling real-time, bidirectional, event-based communication between the client and the server.

Express is a popular web application framework that makes building RESTful APIs and web applications a lot easier. Express also provides an easy way to create an HTTP server.

To use Socket.IO with Express, we can simply create a Socket.IO server and attach it to our Express HTTP server. This allows us to serve HTTP requests and WebSocket requests from the same server.

When a client connects to the server using Socket.IO, the client sends an initial HTTP request to establish the WebSocket connection. The server checks the request and decides whether it is an HTTP request or a WebSocket request. If it is an HTTP request, the server responds with an HTTP response. If it is a WebSocket request, the server upgrades the connection to a WebSocket connection and establishes a two-way communication channel with the client.

Once the WebSocket connection is established, the client and server can send data to each other in real-time without the need for constant HTTP requests. This makes it possible to build real-time web applications that respond instantly to user actions.

Overall, using Express with Socket.IO provides a powerful combination for building real-time web applications with ease.

### Testing our Socket.oi server

Use can code a client of course, but in this case I just want to do a simple test. For that we
can use teh [socketio-tester]("https://www.piesocket.com/socketio-tester")

![socketio](socket-tester.jpg)
