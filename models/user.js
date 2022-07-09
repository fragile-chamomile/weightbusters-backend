const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailCheck =
	/^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const userSchema = Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			match: emailCheck,
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: 6,
		},
		height: {
			type: Number,
		},
		age: {
			type: Number,
		},
		currentWeight: {
			type: Number,
		},
		desiredWeight: {
			type: Number,
		},
		bloodType: {
			type: Number,
		},
		dailyNorm: {
			type: Number,
		},
		notRecommendedProducts: {
			type: Array,
		},
		token: {
			type: String,
			default: null,
		},
		verify: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: String,
			required: [true, "Verify token is required"],
		},
	},
	{ versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const joiSignUpSchema = Joi.object({
	name: Joi.string(),
	password: Joi.string().min(6).required(),
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
		.required(),
});

const joiLogInSchema = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
		.required(),
});

const joiReVerificationSchema = Joi.object({
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
		.required(),
});

module.exports = {
	User,
	joiSignUpSchema,
	joiLogInSchema,
	joiReVerificationSchema,
};
