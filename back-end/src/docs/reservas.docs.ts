/**
 * @swagger
 *  components:
 *   schemas:
 *      Reserva:
 *          type: object
 *          properties:
 *              sede:
 *                  type: string
 *                  description: sede de la reserva
 *              ciudad:
 *                  type: string
 *                  description: ciudad de la reserva
 *              checkin:
 *                  type: string
 *                  description: fecha de entrada de la reserva
 *              checkout:
 *                  type: string
 *                  description: fecha de salida de la reserva
 *              huespedes:
 *                  type: number
 *                  description: cantidad de huespedes de la reserva
 *              noches:
 *                  type: number
 *                  description: cantidad de noches de la reserva
 *              habitacion:
 *                  type: string
 *                  description: habitacion de la reserva
 *              valorTotal:
 *                  type: number
 *                  description: valor total de la reserva
 *          required:
 *                  - sede:
 *                  - ciudad:
 *                  - checkin:
 *                  - checkout:
 *                  - huespedes:
 *                  - noches:
 *                  - habitacion:
 *                  - valorTotal:   
 *                            
 */

/**
 * @swagger
 * /api/reservation:
 * get:
 *      summary: Trae todas las reservaciones
 *      tags: [reservation]
 *      responses:
 *          200:
 *              description: Lista de todas las reservaciones
 *              content:
 *                  application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/reservation'
 * 
 */

/**
 * @swagger
 * /api/reservation/{id}:
 *  get:
 *      summary: Consulta las reservaciones por su id
 *      tags: [reservation]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las reservaciones
 *      responses:
 *          200:
 *              description: Se consultó reservaciones por ID
 *          500:
 *              description: Error en el servidor
 * 
 */

/**
 * @swagger
 * /api/reservation:
 *  post:
 *      summary: Crea una nueva reservacion
 *      tags: [reservation]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                  type: object
 *                  $ref: '#/components/schemas/reservation'
 *      responses:
 *          200:
 *              description: Se creó una nueva reservacion
 *          400:
 *              description: Reservación no creada por error en el envio de datos
 *          500:
 *              description: Reservación no creada por error en el servidor
 *       
 */

/**
 * @swagger
 * /api/reservation/{id}:
 * put:
 *      summary: Actualiza una reservacion
 *      tags: [reservation]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la reservacion
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:   
 *                      type: object
 *                      $ref: '#/components/schemas/reservation'
 *      responses:
 *          200:
 *              description: Se actualizó la reservacion
 *          400:
 *              description: Reservación no actualizada por error en el envio de datos
 *          500: 
 *              description: Reservación no actualizada por error en el servidor
 * 
 */

/**
 * @swagger
 * /api/reservation/{id}:
 *  delete:
 *      summary: Elimina una reservacion
 *      tags: [reservation]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la reservacion
 *      responses:
 *          200:
 *              description: Se eliminó la reservacion
 *          400:
 *              description: Reservación no eliminada por error en el envio de datos
 * 
 */