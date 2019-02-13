const { sendData } = require('./sendData');
const getProduct = id => (request, response) => {
  sendData(product => product.id === +id, product => product, response);
};
exports.getProduct = getProduct;