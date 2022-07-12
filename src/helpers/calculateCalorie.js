const { Product } = require("../models/product");

const calculateCalorie = async ({
	height,
	age,
	currentWeight,
	desiredWeight,
	bloodType,
}) => {
	const calc =
		10 * currentWeight +
		6.25 * height -
		5 * age -
		161 -
		10 * (currentWeight - desiredWeight);

	const dailyCalorieIntake = Math.round(calc);

	switch (Number(bloodType)) {
		case 1: {
			const notRecommendedProducts = await Product.find({
				"groupBloodNotAllowed.1": { $eq: true },
			})
				.select("categories -_id")
				.distinct("categories");

			return { dailyCalorieIntake, notRecommendedProducts };
		}
		case 2: {
			const notRecommendedProducts = await Product.find({
				"groupBloodNotAllowed.2": { $eq: true },
			})
				.select("categories -_id")
				.distinct("categories");

			return { dailyCalorieIntake, notRecommendedProducts };
		}
		case 3: {
			const notRecommendedProducts = await Product.find({
				"groupBloodNotAllowed.3": { $eq: true },
			})
				.select("categories -_id")
				.distinct("categories");

			return { dailyCalorieIntake, notRecommendedProducts };
		}
		case 4: {
			const notRecommendedProducts = await Product.find({
				"groupBloodNotAllowed.4": { $eq: true },
			})
				.select("categories -_id")
				.distinct("categories");

			return { dailyCalorieIntake, notRecommendedProducts };
		}
		default:
			return false;
	}
};

module.exports = { calculateCalorie };
