/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The auth managing API
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
