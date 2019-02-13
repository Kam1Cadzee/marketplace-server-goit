const fs = require("fs");
const path = require("path");

const sendData = (filter, map, response) => {
  let pathFile = path.resolve(__dirname, "../..", "db/products/products-mock.json");
  fs.readFile(pathFile, (err, data) => {
    let dataProducts = JSON.parse(data);
    let products = dataProducts.filter(filter).map(map);
    let resp = {
      status: products.length === 0 ? "no products" : "success",
      products
    };
    response.end(JSON.stringify(resp));
  });
};
exports.sendData = sendData;