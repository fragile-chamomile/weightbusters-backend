const auth = require("./auth");
const users = require("./users");
const { getProductsFromQueryParam } = require("./products/productsController");

module.exports = {
  auth,
  users,
  getProductsFromQueryParam,
};
