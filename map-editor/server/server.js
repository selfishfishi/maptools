const http = require("http");
const fs = require("fs").promises;

const port = 8080;
const hostname = "127.0.0.1";
const outputDir = "output";

const requestListener = function (req, res) {
  switch (req.url) {
    case "/inventory":
      getInventory(req, res);
      break;
    default:
      res.writeHead(404);
      res.end();
  }
};

function getInventory(req, res) {
  console.log("Getting inventory.json");
  const filePath = __dirname + "/" + outputDir + "/inventory.json";
  console.log(filePath);
  fs.readFile(filePath).then((contents) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(contents);
  });
}

const server = http.createServer(requestListener);
console.log("Starting Map Server");
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
