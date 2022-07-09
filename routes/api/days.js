const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiDaySchema } = require("../../models/day");
const { days: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/user", ctrlWrapper(ctrl.getOneDay));

router.post("/create", validation(joiDaySchema), ctrlWrapper(ctrl.createDay));

// router.post(
//   "/verify",
//   validation(joiReVerificationSchema),
//   ctrlWrapper(ctrl.reVerification)
// );

// router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
