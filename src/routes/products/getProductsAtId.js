const { sendData } = require('./sendData');
const getProductsAtId = ids => (request, response) => {
  sendData(product => ids.some(id => +id === product.id), product => ({
    id: product.id,
    sku: product.sku,
    name: product.name,
    description: product.description
  }), response);
};
exports.getProductsAtId = getProductsAtId;