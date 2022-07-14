/**
 * @swagger
 * tags:
 *   name: Days
 *   description: The products managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Day:
 *       type: object
 *       required:
 *         - date
 *         - owner
 *         - items
 *       properties:
 *         _id:
 *           type: String
 *           description: The auto-generated id of the day
 *         date:
 *           type: String
 *           description: Current day date
 *         owner:
 *           type: String
 *           description: Id of user
 *         items:
 *           type: Array
 *           description: Array of eaten products
 *       example:
 *         id: 62caac17d8f24742721ad929
 *         date: "7/7/2022"
 *         owner: "62caaa9451927562810cb74f"
 *         items: [{weight: 400, name: {ru: Яйцо куриное (желток сухой), ua: Яйце куряче (жовток сухий), en: Chicken egg (dry yolk)}, calories: 1380, id: 1142b8bf-c3cc-4b62-8a1b-051db52ce693}]
 *         createdAt: 2022-07-10T10:38:15.854Z
 *         updatedAt: 2022-07-10T10:49:42.963Z
 */

/**
 * @swagger
 * /days/create:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     summary: Add eaten product
 *     tags: [Days]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            required:
 *              - date:
 *              - item:
 *            properties:
 *              date:
 *                type: string
 *                description: Date of current day
 *              item:
 *                type: object
 *                properties:
 *                  weight:
 *                    type: number
 *                    description: Weight of eaten product
 *                  name:
 *                    type: string
 *                    description: Product name
 *     responses:
 *       200:
 *         description: Get current day by shema
 *       400:
 *         description: Some bad request.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /days/user:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     summary: Get current day
 *     tags: [Days]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            required:
 *              - date:
 *            properties:
 *              date:
 *                type: string
 *                description: Date of current day
 *     responses:
 *       200:
 *         description: Get current day by shema
 *       400:
 *         description: Some bad request.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /days/user/product/{id}:
 *   post:
 *     security:
 *      - bearerAuth: []
 *     summary: Delete eaten product
 *     tags: [Days]
 *     parameters:
 *       - name: id
 *         required: true
 *         in: path
 *         description: Product id for delete 
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            required:
 *              - date:
 *            properties:
 *              date:
 *                type: string
 *                description: Date of current day
 *     responses:
 *       204:
 *         description: Product is deleted
 *       400:
 *         description: Some bad request.
 *       500:
 *         description: Some server error.
 */
