/**
 * @swagger
 * tags:
 *   name: Days
 *   description: The users managing API
 */

/**
 * @swagger
 * /days/create:
 *    post:
 *      summary: Add eated product
 *      tags: [Days]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              required:
 *                - date
 *                - item
 *              properties:
 *                date:
 *                 type: string
 *                 description: Date of created
 *                item:
 *                  type: object
 *                    properties:
 *                      weight: number
 *                  
 */