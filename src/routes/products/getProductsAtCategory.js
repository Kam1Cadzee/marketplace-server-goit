const { sendData } = require('./sendData');
const getProductsAtCategory = category => (request, response) => {
  sendData(product => product.categories.some(c => c === category), product => ({
    id: product.id,
    sku: product.sku,
    name: product.name,
    description: product.description
  }), response);
};
exports.getProductsAtCategory = getProductsAtCategory;
