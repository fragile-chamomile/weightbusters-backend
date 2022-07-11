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
			default: null,
		},
		age: {
			type: Number,
			default: null,
		},
		currentWeight: {
			type: Number,
			default: null,
		},
		desiredWeight: {
			type: Number,
			default: null,
		},
		bloodType: {
			type: Number,
			default: null,
		},
		dailyCalorieIntake: {
			type: Number,
			default: null,
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
	name: Joi.string().min(3).max(30).required(),
	password: Joi.string().min(6).required(),
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
		.required(),
	height: Joi.number().min(100).max(250).optional(),
	age: Joi.number().integer().positive().min(14).max(120).optional(),
	currentWeight: Joi.number().integer().positive().min(30).max(300).optional(),
	desiredWeight: Joi.number().integer().positive().min(20).max(300).optional(),
	bloodType: Joi.number().integer().positive().min(1).max(4).optional(),
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

const joiDailyCalorieIntakeSchema = Joi.object({
	height: Joi.number().min(100).max(250).required(),
	age: Joi.number().integer().positive().min(16).max(120).required(),
	currentWeight: Joi.number().integer().positive().min(30).max(300).required(),
	desiredWeight: Joi.number().integer().positive().min(20).max(300).required(),
	bloodType: Joi.number().integer().positive().min(1).max(4).required(),
});

module.exports = {
	User,
	joiSignUpSchema,
	joiLogInSchema,
	joiReVerificationSchema,
	joiDailyCalorieIntakeSchema,
};
