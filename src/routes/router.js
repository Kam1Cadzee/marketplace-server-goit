const mainRoute = require('./main/main');
const productsRoute = require('./products/products');

const router = {
  '/products': productsRoute,
  default: mainRoute
};

module.exports = router;