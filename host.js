const {createServer} = require("http");
let server = createServer((request, response) => {
	console.log(request);

  response.writeHead(200, {"Content-Type": "text/html"});
  console.log(response);
  response.write(`
      <h1>Hello I am Rizwan!</h1>
      <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");

// To act as an HTTP client, we can use the request function in the http
// module.
const {request} = require("http");
let requestStream = request({
  hostname: "eloquentjavascript.net",
  path: "/20_node.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, response => {
  console.log("Server responded with status code", response.statusCode);
});
requestStream.end();

// 367