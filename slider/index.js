const http = require("http");
const fs = require("fs");
const path = require("path");
const filePath =path.join(__dirname,'','index.html')
  
const server = http.createServer((reg, res) => {
    // const ext = path.extname(filePath);
  let contentType = "text/html";

  // switch (ext) {
  //   case ".css":
  //     contentType = "text/css";
  //     break;
  //   case ".js":
  //     contentType = "text/javascript";
  //     break;
  //   default:
  //     contentType = "text/html";
  // }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    res.writeHead(200, { "Content-type": contentType });
    // console.log(ext)

    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server has been started...");
});
