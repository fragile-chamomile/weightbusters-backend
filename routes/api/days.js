const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiDaySchema } = require("../../models/day");
const { days: ctrl } = require("../../controllers");

const router = express.Router();

router.get(
  "/user",
  auth,
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
  ctrlWrapper(ctrl.deleteEatenProduct)
);

module.exports = router;
