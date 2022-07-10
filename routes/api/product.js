const express = require("express");
const router = express.Router();
const { getProductsFromQueryParam } = require("../../controllers");
const {  auth, ctrlWrapper } = require("../../middlewares");

router.post("/:query", auth, ctrlWrapper(getProductsFromQueryParam));

module.exports = router;
