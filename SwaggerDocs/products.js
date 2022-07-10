/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - categories
 *         - weight
 *         - title
 *         - calories
 *         - groupBloodNotAllowed
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         categories:
 *           type: Array
 *           description: categories of product
 *         weight:
 *           type: Number
 *           description: weight of product
 *         title:
 *           type: Object
 *           description: name of product
 *         calories:
 *           type: Number
 *           description: calories of product
 *         groupBloodNotAllowed:
 *           type: Array
 *           description: a list of blood types according to which this product is desirable or undesirable for consumption
 *       example:
 *         id: 5d51694802b2373622ff553b
 *         categories: ["яйца"]
 *         weight: 100
 *         title: {ru: "Яйцо куриное (желток сухой)", ua: "Яйце куряче (жовток сухий)"}
 *         calories: 623
 *         groupBloodNotAllowed: [null, true, false, false, false]
 */

/**
 * @swagger
 * /products/{query}:
 *   get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get product from query
 *     tags: [Products]
 *     parameters:
 *       - name: query
 *         required: true
 *         in: path
 *         description: Query for find product by name
 *     responses:
 *       200:
 *         description: Get product or array of products.
 *       400:
 *         description: Some bad request.
 *       500:
 *         description: Some server error.
 */
