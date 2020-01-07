let message = "Hello World";
console.log(message);

// $ npm install ini
// npm WARN enoent ENOENT: no such file or directory,
// open '/tmp/package.json'
// + ini@1.3.5
// added 1 package in 0.552s
// $ node
// > const {parse} = require("ini");
// page 353
// process.exit(0);

let {readFile} = require("fs");
readFile("file.txt", "utf8", (error, text) => {
	if (error) throw error;
console.log("The file contains:", text);
});

const {readFile} = require("fs");
readFile("file.txt", (error, buffer) => {
if (error) throw error;
console.log("The file contained", buffer.length, "bytes.",
"The first byte is:", buffer[0]);
});

// A similar function, writeFile, is used to write a file to disk.
const {writeFile} = require("fs");
writeFile("graffiti.txt", "Node was here", err => {
if (err) console.log(`Failed to write file: ${err}`);
else console.log("File written.");
});

// same functions as fs but uses promises rather than callback functions.
const {readFile} = require("fs").promises;
readFile("file.txt", "utf8")
.then(text => console.log("The file contains:", text));


// This is all it takes to start an HTTP server: This is Most Imortant
const {createServer} = require("http");
let server = createServer((request, response) => {
       response.writeHead(200, {"Content-Type": "text/html"});
       response.write(`
         <h1>Hello!</h1>
         <p>You asked for <code>${request.url}</code></p>`);
       response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");