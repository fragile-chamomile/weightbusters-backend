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
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user name
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *       example:
 *         id: d5fE_asz
 *         name: Viola Brown
 *         email: brown.v@gmail.com
 *         password: example2022
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
