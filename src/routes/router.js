const { getProduct } = require("./products/getProduct");
const { getProductsAtId } = require("./products/getProductsAtId");
const { getProductsAtCategory } = require("./products/getProductsAtCategory");

const mainRoute = require("./main/main");
const productsRoute = require("./products/products");


const url = require("url");

const router = request => {
  const path = url.parse(request.url);

  if (/\/products\/\d+/.test(path.path)) {
    let exp = /\d+/;
    let id = exp.exec(path.pathname);
    return getProduct(id);
  } else if (/\/products\/[?]/.test(path.path)) {
    let index = path.query.indexOf("=");
    let name = path.query.slice(0, index);
    if (name === "ids") {
      let args = path.query.slice(7, path.query.length - 3).split(",");
      return getProductsAtId(args);
    } else if (name === "category") {
      let category = path.query.slice(12, path.query.length - 3);
      return getProductsAtCategory(category);
    }
  } else if('/products/' === path.path) {
      return productsRoute;
  }
  else {
    return mainRoute;
  }
};

module.exports = router;
