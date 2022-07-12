/**
 * @swagger
 * tags:
 *   name: Daily calorie intake
 *   description: The daily calorie intake managing API
 */

/**
 * @swagger
 * /daily-calorie-intake:
 *   post:
 *     summary: Daily calorie intake for an unregistered user
 *     tags: [Daily calorie intake]
 *     requestBody:
 *       required: true
 *       description: Daily calorie intake object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - height
 *               - age
 *               - currentWeight
 *               - desiredWeight
 *               - bloodType
 *             properties:
 *               height:
 *                 type: number
 *                 description: The user height
 *               age:
 *                 type: number
 *                 description: The user age
 *               currentWeight:
 *                 type: number
 *                 description: The user current weight
 *               desiredWeight:
 *                 type: number
 *                 description: The user desired weight
 *               bloodType:
 *                 type: number
 *                 description: The user blood type
 *     responses:
 *       200:
 *         description: The information was successfully created.
 *       400:
 *         description: Missing some field. All form fields are required.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /daily-calorie-intake/private:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     summary: Daily calorie intake for a registered user
 *     tags: [Daily calorie intake]
 *     requestBody:
 *       required: true
 *       description: Daily calorie intake object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - height
 *               - age
 *               - currentWeight
 *               - desiredWeight
 *               - bloodType
 *             properties:
 *               height:
 *                 type: number
 *                 description: The user height
 *               age:
 *                 type: number
 *                 description: The user age
 *               currentWeight:
 *                 type: number
 *                 description: The user current weight
 *               desiredWeight:
 *                 type: number
 *                 description: The user desired weight
 *               bloodType:
 *                 type: number
 *                 description: The user blood type
 *     responses:
 *       200:
 *         description: The information was successfully added.
 *       400:
 *         description: Missing some field. All form fields are required.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       500:
 *         description: Some server error.
 */
