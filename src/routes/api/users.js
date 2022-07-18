const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiReVerificationSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post(
	"/verify",
	validation(joiReVerificationSchema),
	ctrlWrapper(ctrl.reVerification)
);

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/info", auth, ctrlWrapper(ctrl.getUserInfo));

module.exports = router;
