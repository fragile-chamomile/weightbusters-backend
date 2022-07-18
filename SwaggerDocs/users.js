/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /users/verify/{verificationToken}:
 *   get:
 *     summary: Mail verification
 *     tags: [Users]
 *     parameters:
 *       - name: verificationToken
 *         required: true
 *         in: path
 *         description: Token issued to the current user.
 *     responses:
 *       200:
 *         description: Verification successful.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/verify:
 *   post:
 *     summary: Resending an email to a user with a verification link
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user email
 *     responses:
 *       200:
 *         description: Verification email sent.
 *       400:
 *         description: The user with this email already verify.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /users/current:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get information about the current user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Information found.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */
/**
 * @swagger
 * /users/info:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get all information about the current user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Information found.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Some server error.
 */
