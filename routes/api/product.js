const express = require("express");
const router = express.Router();
const { getProductsFromQueryParam } = require("../../controllers");
const {  auth, ctrlWrapper } = require("../../middlewares");

router.get("/", auth, ctrlWrapper(getProductsFromQueryParam));

module.exports = router;
