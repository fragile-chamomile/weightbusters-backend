const auth = require("./auth");
const users = require("./users");
const { getProductsFromQueryParam } = require("./products/productsController");
const days = require("./days");
const dailyCalorieIntake = require("./dailyCalorieIntake");

module.exports = {
	auth,
	users,
	getProductsFromQueryParam,
	days,
	dailyCalorieIntake,
};
