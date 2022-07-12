const { User } = require("../../models/user");
const { NotFound } = require("http-errors");

const getCurrent = async (req, res) => {
	const { _id, name, email } = req.user;
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
			},
		},
	});
};

module.exports = getCurrent;
