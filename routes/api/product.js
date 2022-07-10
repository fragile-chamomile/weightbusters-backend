const express = require("express");
const router = express.Router();
const { getProductsFromQueryParam } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");
const { auth } = require("../../middlewares");

router.post("/:query", auth, ctrlWrapper(getProductsFromQueryParam));

module.exports = router;