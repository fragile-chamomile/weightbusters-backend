const auth = require("./auth");
const users = require("./users");
const { getProductsFromQueryParam } = require("./products/productsController");
const dailyCalorieIntake = require("./dailyCalorieIntake");

module.exports = {
	auth,
	users,
	getProductsFromQueryParam,
	dailyCalorieIntake,
};
