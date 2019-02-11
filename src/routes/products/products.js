const fs = require('fs');

const products = (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  fs.createReadStream("src/db/products/products-mock.json").pipe(response);

};

module.exports = products;