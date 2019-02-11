const path = require("path");
const fs = require("fs");
const mainRoute = (request, response) => {
  fs.readFile(path.resolve("./index.html"), (error, data) => {
    if (error) {
      response.statusCode = 404;
      response.end("Resourse not found!");
    } else {
      response.setHeader("Content-Type", "text/html");
      response.end(data);
    }
  });
};

module.exports = mainRoute;
