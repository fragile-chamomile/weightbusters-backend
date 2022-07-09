const express = require("express");
const router = express.Router();
const { getProductsFromQueryParam } = require("../../controllers");
const { auth } = require("../../middlewares");

router.post("/:query", auth, getProductsFromQueryParam);

module.exports = router;