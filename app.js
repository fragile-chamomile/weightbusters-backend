const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./config/passport");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const productRouter = require("./routes/api/product");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "https://weightbusters-api.herokuapp.com",
				description: "API base URL",
			},
		],
	},
	apis: ["./SwaggerDocs/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message: err.message });
});

module.exports = app;
