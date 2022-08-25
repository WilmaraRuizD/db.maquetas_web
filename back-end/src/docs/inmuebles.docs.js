/**
 * @swagger
 * components:
 *  schemas:
 *      inmueble:
 *          type: object
 *          properties:
 *              num:
 *                  type: string
 *                  description: número único del inmueble
 *              state:
 *                  type: number
 *                  description: estado del inmueble
*/
/**
 * @swagger
 * /api/inmuebles:
 *  get:
 *      summary: Trae todos los inmuebles
 *      tags: [Inmueble]
 *      responses:
 *          200:
 *              description: Lista de todos los inmuebles
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/inmueble'
 *
 */
/**
 * @swagger
 * /api/inmuebles/{id}:
 *  get:
 *      summary: Consulta los inmueble por su id 
 *      tags: [Inmueble]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador del inmueble
 *      responses:
 *          200:
 *              description: Se consultó inmueble por ID
 *          500:
 *              description: Error en el servidor
 */

/**
 * @swagger
 * /api/inmuebles:
 *  post:
 *      summary: Crea un nuevo inmueble
 *      tags: [Inmueble]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/inmueble'
 *      responses:
 *          200:
 *              description: inmueble creado
 *          400:
 *              description: inmueble no creada por error en el envío de datos
 *          500:
 *              description: inmueble no creada por error en el servidor
*/

/**
 * @swagger
 * /api/inmuebles/{id}:
 *  delete:
 *      summary: Elimina las inmueble pasándole el ID como parámetro
 *      tags: [Inmueble]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los inmuebles
 *      responses:
 *          200:
 *              description: inmueble eliminado
 *          500:
 *              description: Error en el servidor
 */

/**
 * @swagger
 * /api/inmuebles/{id}:
 *  put:
 *      summary: Edita un inmueble pasándole el ID como parámetro
 *      tags: [Inmueble]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador del inmueble 
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/inmueble'
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/inmueble'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */

/**
 * @swagger
 * /api/inmuebles/numero/{num}:
 *  get:
 *      summary: Consulta los inmuebles por su número
 *      tags: [Inmueble]
 *      parameters:
 *        - in: path
 *          name: num
 *          schema:
 *              type: string
 *          required: true
 *          description: numero del inmueble
 *      responses:
 *          200:
 *              description: Se consultó inmueble por num
 *          500:
 *              description: Error en el servidor
 */