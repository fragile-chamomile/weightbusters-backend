const { User } = require("../../models/user");
const { calculateCalorie } = require("../../helpers/calculateCalorie");

const privateDailyCalorieIntake = async (req, res) => {
	const { height, age, currentWeight, desiredWeight, bloodType } = req.body;
	const token = req.token;
	const { _id } = req.user;
	const { dailyCalorieIntake, notRecommendedProducts } = await calculateCalorie(
		req.body
	);

	await User.findByIdAndUpdate(
		{ _id, token },
		{
			$set: {
				height,
				age,
				currentWeight,
				desiredWeight,
				bloodType,
				dailyCalorieIntake,
				notRecommendedProducts,
			},
		},
		{ new: true }
	);

	return res.json({
		status: "success",
		code: 200,
		message: "Information created successfully",
		data: {
			user: {
				_id,
				name: req.user.name,
				email: req.user.email,
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

module.exports = privateDailyCalorieIntake;
