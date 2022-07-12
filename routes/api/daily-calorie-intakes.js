const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiDailyCalorieIntakeSchema } = require("../../models/user");
const { dailyCalorieIntake: ctrl } = require("../../controllers");

const router = express.Router();

router.post(
	"/",
	validation(joiDailyCalorieIntakeSchema),
	ctrlWrapper(ctrl.dailyCalorieIntake)
);
router.post(
	"/private",
	auth,
	validation(joiDailyCalorieIntakeSchema),
	ctrlWrapper(ctrl.privateDailyCalorieIntake)
);

module.exports = router;
