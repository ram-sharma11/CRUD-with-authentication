/**
 * @openapi
 * /register:
 *  post:
 *    summary: To Register the User.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                email:
 *                  type: string
 *                  example: 'user@yupmail.com'
 *                name:
 *                  type: string
 *                  example: 'User'
 *                password:
 *                  type: string
 *                  example: 'user5@1234'
 *                phone:
 *                  type: string
 *                  example: '1234945632'
 *    responses:
 *      200:
 *         description: Request Sucessfull
 *      400:
 *         description: Bad Request
 */

/**
 * @openapi
 * /login:
 *  post:
 *    summary: Login the User.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                email:
 *                  type: string
 *                  example: 'user@yupmail.com'
 *                password:
 *                  type: string
 *                  example: 'user5@1234'
 *    responses:
 *      200:
 *         description: Request Sucessfull
 *      401:
 *         description: Bad Request
 */

/**
 * @openapi
 * /me:
 *  get:
 *    summary: Fetch user details.
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *         description: Request Sucessful
 *      401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /fetch-by-id/{_id}:
 *  get:
 *    summary: Fetch user details by id.
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - name: _id
 *        in: path
 *        required: true
 *    responses:
 *      200:
 *         description: Request Sucessful
 *      401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /all-account:
 *  get:
 *    summary: Fetch all user details.
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *         description: Request Sucessful
 *      401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /update:
 *  patch:
 *    summary: update the User deatails like name and phone number.
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *                name:
 *                  type: string
 *                  example: 'Aman'
 *                phone:
 *                  type: string
 *                  example: '7458963214'
 *    responses:
 *      200:
 *         description: Request Sucessfull
 *      401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /remove:
 *  delete:
 *    summary: Delete the user
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *         description: Request Sucessfull
 *      401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 */
