/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The auth managing API
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: String
 *           example: 62cc0f7fa9c8032807cb8cf6
 *           description: The auto-generated id of the user
 *         name:
 *           type: String
 *           minLength: 3
 *           maxLength: 30
 *           example: Camila Brown
 *           description: The user name
 *         email:
 *           type: String
 *           allow: com, net, ua
 *           example: brown.c@gmail.com
 *           description: The user email
 *         password:
 *           type: String
 *           minLength: 6
 *           example: example2022
 *           description: The user password
 *         height:
 *           type: Number
 *           min: 100
 *           max: 250
 *           example: 172
 *           description: The user height
 *         age:
 *           type: Number
 *           min: 14
 *           max: 120
 *           example: 30
 *           description: The user age
 *         currentWeight:
 *           type: Number
 *           min: 30
 *           max: 300
 *           example: 84
 *           description: The user current weight
 *         desiredWeight:
 *           type: Number
 *           min: 20
 *           max: 300
 *           example: 64
 *           description: The user desired weight
 *         bloodType:
 *           type: Number
 *           min: 1
 *           max: 4
 *           example: 3
 *           description: The user blood type
 *         dailyCalorieIntake:
 *           type: Number
 *           example: 1189
 *           description: The user daily calorie intake
 *         notRecommendedProducts:
 *           type: Array
 *           example: [зерновые, молочные, мучные, яйца]
 *           description: Not recommended products
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       description: Registration's object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user name
 *               email:
 *                 type: string
 *                 description: The user email
 *               password:
 *                 type: string
 *                 description: The user password
 *     responses:
 *       201:
 *         description: The user was successfully created.
 *       400:
 *         description: Missing some field.
 *       409:
 *         description: The user with this email already registered.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in the user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       description: Authentication object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user email
 *               password:
 *                 type: string
 *                 description: The user password
 *     responses:
 *       200:
 *         description: The user was successfully authorized.
 *       400:
 *         description: Missing some field.
 *       401:
 *         description: Email is wrong or not verify, or password is wrong.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Log out the user
 *     tags: [Auth]
 *     responses:
 *       204:
 *         description: The user was successfully log out.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       500:
 *         description: Some server error.
 */
