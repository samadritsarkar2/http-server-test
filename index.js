const http = require("http");
const PORT = "8080";

const helloWorld = (req, res) => {
  res.write(`Hello world from ${PORT} port`);
  res.end();
};
const server = http.createServer(helloWorld);

server.listen(PORT, () => {
  console.log("Server is running on PORT:-", PORT);
});
