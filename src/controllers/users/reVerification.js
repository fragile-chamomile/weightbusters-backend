const { User } = require("../../models/user");
const { NotFound, BadRequest } = require("http-errors");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const reVerification = async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw NotFound("User not found");
	}
	if (user.verify) {
		throw BadRequest("Verification has already been passed");
	}
	const msg = {
		to: email,
		from: "vall.bell91@gmail.com",
		subject: "Confirm Your Email",
		html: `<p>By clicking on the following link, you are confirming your email address.</p>
					<a target="_blank" href="https://weightbusters-api.herokuapp.com/users/verify/${user.verificationToken}">Confirm email</a>`,
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
		})
		.catch((error) => {
			console.error(error);
		});
	res.json({
		message: "Verification email sent",
	});
};
module.exports = reVerification;
