const { User } = require("../../models/user");
const { NotFound } = require("http-errors");

const getCurrent = async (req, res) => {
  const {
    _id,
    name,
    email,
    height,
    age,
    currentWeight,
    desiredWeight,
    bloodType,
    dailyCalorieIntake,
    notRecommendedProducts,
  } = req.user;
  const user = await User.findById(_id);
  if (!user) {
    throw new NotFound("User not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        name,
        email,
        height,
        age,
        currentWeight,
        desiredWeight,
        bloodType,
        dailyCalorieIntake,
        notRecommendedProducts,
      },
    },
  });
};

module.exports = getCurrent;
