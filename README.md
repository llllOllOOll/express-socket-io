## Example using Express.js

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
