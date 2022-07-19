const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");
const { JWT_SECRET_KEY } = process.env;

const logIn = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user || !user.verify) {
		throw new Unauthorized(
			`Email is wrong or not verify, or password is wrong`
		);
	}

	const passCompare = bcrypt.compareSync(password, user.password);
	if (!passCompare) {
		throw new Unauthorized(
			`Email is wrong or not verify, or password is wrong`
		);
	}

	const payload = {
		id: user._id,
	};
	const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
	await User.findByIdAndUpdate(user._id, { token });
	res.json({
		status: "success",
		code: 200,
		message: "Authorization is successfully",
		data: {
			token,
			user: {
				name: user.name,
			},
		},
	});
};

module.exports = logIn;
