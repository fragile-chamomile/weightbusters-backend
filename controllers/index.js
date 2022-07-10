const auth = require("./auth");
const users = require("./users");
const { getProductsFromQueryParam } = require("./products/productsController");
const days = require("./days");

module.exports = {
	auth,
	users,
  getProductsFromQueryParam,
	days,
};
