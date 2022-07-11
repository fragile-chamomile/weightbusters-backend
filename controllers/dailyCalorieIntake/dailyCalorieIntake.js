const { calculateCalorie } = require("../../helpers/calculateCalorie");

const dailyCalorieIntake = async (req, res, next) => {
	const { height, age, currentWeight, desiredWeight, bloodType } = req.body;
	const { dailyCalorieIntake, notRecommendedProducts } = await calculateCalorie(
		req.body
	);

	res.json({
		status: "success",
		code: 200,
		message: "Information added successfully",
		data: {
			user: {
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

module.exports = dailyCalorieIntake;
