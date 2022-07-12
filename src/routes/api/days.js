const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiDaySchema, joiGetDaySchema } = require("../../models/day");
const { days: ctrl } = require("../../controllers");

const router = express.Router();

router.post(
	"/user",
	auth,
	validation(joiGetDaySchema),
	ctrlWrapper(ctrl.getOneDay)
);

router.post(
	"/create",
	auth,
	validation(joiDaySchema),
	ctrlWrapper(ctrl.createDay)
);

router.post(
	"/user/product/:id",
	auth,
	validation(joiGetDaySchema),
	ctrlWrapper(ctrl.deleteEatenProduct)
);

module.exports = router;
