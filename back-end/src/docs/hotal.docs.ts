<<<<<<< HEAD
/**
 * @swagger
 * components:
 *  schemas:
 *      correo:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: correo del usuario
 *              name:
 *                  type: string
 *                  description: nombre de usuario
 *      hostal:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: nombre de hostal
 *              ciudad:
 *                  type: string
 *                  description: ciudad en la cual se encuentra ubicado el hostal
 *              sede:
 *                  type: string
 *                  description: sede del hostal
 *              descripcion:
 *                  type: string
 *                  description: describe la características particulares del hostal
 *              direccion:
 *                  type: string
 *                  description: dirección de la sede
 *              foto:
 *                  type: string
 *                  description: url de la imagen 
 *              geometry1:
 *                  type: float
 *                  description: coordenadas en longitud del hostal 
 *              geometry2:
 *                  type: float
 *                  description: coordenadas en latitud
 *          required:
 *                  - nombre:
 *                  - ciudad:
 *                  - sede:
 *                  - descripción:
 *                  - foto:
 *                  - dirección: 
 *                  - geometry1:
 *                  - geometry2:
 *  
 *      room:
 *          type: object
 *          properties:
 *              tipo:
 *                  type: string
 *                  description: tipo de habitación 
 *              descripcion:
 *                  type: string
 *                  description:  descripción de la habitación del hostal
 *              foto:
 *                  type: string
 *                  description: fotos de las habitaciones 
 *              estado: 
 *                  type: number
 *                  description: estado de la habitación (1=disponible,2=ocupado,3=reservado sin paga,4= reservadas pagadas 5 =limpieza, 6=no molestar)
 *              capacidad:
 *                  type: string
 *                  description: características de la cantidad de personas 
 *              servicios:
 *                  type: string
 *                  description: servicios prestados en la habitación
 *              precio:
 *                  type: string
 *                  description: precio por noche 
 *              imagenes:
 *                  type: string
 *                  description: Url de imágenes alternativas  
 *          required: 
 *                  - nombre:
 *                  - ciudad:
 *                  - sede:
 *                  - descripción:
 *                  - foto:
 *                  - coordenadas:
 *                  - dirección:
 *                  - servicios
 *                  - precio:
 *      users:
 *          type: object
 *          properties:
 *              nombre: 
 *                  type: string
 *                  description: nombre del usuario
 *              apellido:
 *                  type: string
 *                  description: apellido del usuario
 *              email:
 *                  type: string
 *                  description: correo del usuario 
 *              contrasena: 
 *                  type: string 
 *                  description: contraseña de usuario
 *              celular: 
 *                  type: number
 *                  description: número de celular de usuario 
 *              tipo_documento:
 *                  type: string
 *                  description: describe el tipo de documento del usuario
 *              numero_documento:
 *                  type: string
 *                  description: número de documento del usuario
 *              nacionalidad:
 *                  type: string
 *                  description: campo que describe la nacionalidad del usuario
 *              rol: 
*                  type: boolean
 *                  description: rol del usuario donde TRUE(admin) y False(user)
 *              id_hostal:
 *                  type: number
 *                  description: relación del usuario con el hostal
 *          required: 
 *                  - nombre:
 *                  - apellido:
 *                  - email:
 *                  - contrasena:
 *                  - celular:
 *                  - tipo_documento:
 *                  - numero_documento:
 *                  - nacionalida:
 *                  - rol:
 *                  - id_hostal: 
 *      reserva:
 *          type: object
 *          properties:
 *               sede:
 *                  type: string
 *                  description: sede de la reserva
 *               ciudad:
 *                  type: string
 *                  description: ciudad de la reserva
 *               checkIn:
 *                  type: string
 *                  description: fecha de entrada de la reserva
 *               checkOut:
 *                  type: string
 *                  description: fecha de salida de la reserva
 *               huespedes:
 *                  type: number
 *                  description: cantidad de huéspedes de la reserva
 *               noches:
 *                  type: number
 *                  description: cantidad de noches de la reserva
 *               habitacion:
 *                  type: number
 *                  description: habitación de la reserva
 *               valorTotal:
 *                  type: number
 *                  description: valor total de la reserva
 *          required:
 *                  - sede:
 *                  - ciudad:
 *                  - checkIn:
 *                  - checkOut:
 *                  - huéspedes:
 *                  - noches:
 *                  - habitacion:
 *                  - valorTotal:
 *      Planes turisticos:
 *          type: object
 *          properties:
 *              destino:
 *                  type: string
 *                  description: destino del plan turistico
 *              descripcion:
 *                  type: string
 *                  description: descripcion del plan turistico
 *              incluye:
 *                  type: string
 *                  description: lo que incluye el plan turistico
 *              valor:
 *                  type: number
 *                  description: valor del plan turistico
 *          required:
 *                  - destino:
 *                  - descripcion:
 *                  - incluye:
 *                  - valor:
 *      Restaurantes:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: nombre del restaurante
 *              direccion:
 *                  type: string
 *                  description: direccion del restaurante
 *              barrio:
 *                  type: string
 *                  description: barrio del restaurante
 *              telefono:
 *                  type: number
 *                  description: telefono del restaurante
 *              descripcion:
 *                  type: string
 *                  description: descripcion del restaurante
 *              tipo de comida:
 *                  type: string
 *                  description: tipo de comida del restaurante
 *              rango de precios:
 *                  type: string
 *                  description: rango de precios del restaurante       
 *          required:
 *                  - nombre:
 *                  - direccion:
 *                  - barrio:
 *                  - telefono:
 *                  - descripcion:
 *                  - tipo de comida:
 *                  - rango de precios:
 *      Transportes:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: nombre del transporte
 *              tipo:
 *                  type: string
 *                  description: tipo de transporte
 *              contacto:
 *                  type: string
 *                  description: contacto del transporte
 *          required:
 *                  - nombre:
 *                  - tipo:
 *                  - contacto:
 */
/**
 * @swagger
 * /api/hostal:
 *  get:
 *      summary: Trae todas los hostal
 *      tags: [hostal]
 *      responses:
 *          200:
 *              description: Lista de todos los hostal
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/hostal'
 *
 */
/**
 * @swagger
 * /api/hostal/{id}:
 *  get:
 *      summary: Consulta los hostales por su id 
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los hostales
 *      responses:
 *          200:
 *              description: Se consultó hostales por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/hostal:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: Crea un nuevo hostal
 *      tags: [hostal]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                          nombre:
 *                              type: string
 *                              description: nombre de hostal
 *                          ciudad:
 *                              type: string
 *                              description: ciudad en la cual se encuentra ubicado el hostal
 *                          sede:
 *                              type: string
 *                              description: sede del hostal
 *                          descripcion:
 *                              type: string
 *                              description: describe las características particulares del hostal
 *                          direccion:
 *                              type: string
 *                              description: dirección de la sede    
 *                          foto:
 *                              type: string
 *                              format: binary
 *                          geometry1:
 *                              type: float
 *                              description: coordenadas en longitud del hostal 
 *                          geometry2:
 *                              type: float
 *                              description: coordenadas en latitud       
 *      responses:
 *          200:
 *              description: Hostal creado  
 *          400:
 *              description: Hostal no creado por error en el envío de datos
 *          500:
 *              description: Hostal no creado por error en el servidor
 *          452:
 *              description: Hostal se crea sin campo foto el cual no acepta valores null
*/
/**
 * @swagger 
 * /api/hostal/{id}:
 *  delete:
 *      summary: Elimina el hostal pasándole el ID como parámetro
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador del hostal 
 *      responses:
 *          200:
 *              description: hostal eliminado
 *          500:
 *              description: Error en el servidor
 *          
 */
/**
 * @swagger
 * /api/hostal/{id}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                          nombre:
 *                              type: string
 *                              description: nombre de hostal
 *                          ciudad:
 *                              type: string
 *                              description: ciudad en la cual se encuentra ubicado el hostal
 *                          sede:
 *                              type: string
 *                              description: sede del hostal
 *                          descripcion:
 *                              type: string
 *                              description: describe la características particulares del hostal
 *                          direccion:
 *                              type: string
 *                              description: dirección de la sede 
 *                          foto:
 *                              type: string
 *                              format: binary
 *                          geometry1:
 *                              type: float
 *                              description: coordenadas en longitud del hostal 
 *                          geometry2:
 *                              type: float
 *                              description: coordenadas en latitud
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/hostal'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *     
 */
/** 
 * @swagger
 * /api/users:
 *  get:
 *      summary: Trae todos los usuarios
 *      tags: [users]
 *      responses:
 *          200:
 *              description: Lista de todos los usuarios
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/users'
 */
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Consulta los usuarios por su id 
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      responses:
 *          200:
 *              description: Se consultó usuarios por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Crea un nuevo usuario
 *      tags: [users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: usuario creado
 *          400:
 *              description: usuario no creada por error en el envío de datos
 *          500:
 *              description: Hostal no creada por error en el servidor
*/
/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Elimina los usuarios pasándole el ID como parámetro
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador del usuario 
 *      responses:
 *          200:
 *              description: usuarios eliminado
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/users'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */
/** 
 * @swagger
 * /api/room:
 *  get:
 *      summary: Trae todas las habitaciones
 *      tags: [room]
 *      responses:
 *          200:
 *              description: Lista de todas las habitaciones
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/room'
 */
/**
 * @swagger
 * /api/room/{id}:
 *  get:
 *      summary: Consulta las habitaciones por su id 
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones
 *      responses:
 *          200:
 *              description: Se consultó habitaciones por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/roomestado/{estado}:
 *  get:
 *      summary: Consulta las habitaciones y su relación con el hostal según su estado. 
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: estado
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador según el estado de la habitación
 *      responses:
 *          200:
 *              description: Se consultó habitación según su estado
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/room:
 *  post:
 *      summary: Crea una nueva habitaciones
 *      tags: [room]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      tipo:
 *                          type: string
 *                          description: tipo de habitación 
 *                      descripcion:
 *                          type: string
 *                          description: descripción de la habitación del hostal
 *                      foto:
 *                          type: string
 *                          format: binary
 *                          description: foto de la habitación
 *                      estado: 
 *                          type: string
 *                          description: estado de la habitación
 *                      capacidad:
 *                          type: string
 *                          description: características de la cantidad de personas 
 *                      servicios:
 *                          type: string
 *                          description: servicios prestado en la habitación
 *                      precio:
 *                          type: string
 *                          description: valor de la habitación 
 *                      imagenes:
 *                          type: string
 *                          description: imagenes alternativas
 *                      id_hostal:
 *                          type: string
 *                          description: relación del usuario con el hostal  
 *      responses:
 *          200:
 *              description: habitación creada
 *          400:
 *              description: habitaciones no creada por error en el envío de datos
 *          500:
 *              description: habitación no creada por error en el servidor
*/
/**
 * @swagger
 * /api/room/{id}:
 *  delete:
 *      summary: Elimina las habitaciones pasándole el ID como parámetro
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones 
 *      responses:
 *          200:
 *              description: habitacion eliminada
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/room/{id}:
 *  put:
 *      summary: Edita una habitación pasándole el ID como parámetro
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones 
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      tipo:
 *                          type: string
 *                          description: tipo de habitación 
 *                      descripcion:
 *                          type: string
 *                          description: descripción de la habitación del hostal
 *                      foto:
 *                          type: string
 *                          format: binary
 *                          description: foto de la habitación 
 *                      estado: 
 *                          type: string
 *                          description: estado de la habitación
 *                      capacidad:
 *                          type: string
 *                          description: características de la cantidad de personas 
 *                      servicios:
 *                          type: string
 *                          description: servicios prestados en la habitación
 *                      precio:
 *                          type: float
 *                          description: valor de la habitación
 *                      imagenes:
 *                          type: string
 *                          description: imagenes alternativas de la habitación
 *                      id_hostal:
 *                          type: string
 *                          description: relación del usuario con el hostal  
 *      responses:  
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/room'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/reserva:
 *  get:
 *      summary: Trae todas las reservas
 *      tags: [reserva]
 *      responses:
 *          200:
 *              description: Lista de todas las reserva
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/reserva'
 *
 */
 /**
/**
 * @swagger
 * /api/reserva/{id}:
 *  post:
 *      summary: Crea una nueva reserva pasandole el id de habitación 
 *      tags: [reserva]
 *      parameters:
 *        - in: path
 *          name: id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          checkIn:
 *                              type: string
 *                              description: fecha de entrada de la reserva
 *                          checkOut:
 *                              type: string
 *                              description: fecha de salida de la reserva
 *                          huespedes:
 *                              type: number
 *                              description: cantidad de huéspedes de la reserva
 *                          noches:
 *                              type: number
 *                              description: cantidad de noches de la reserva
 *      responses:
 *          200:
 *              description: reserva creada
 *          400:
 *              description: reserva no creada por error en el envío de datos
 *          500:
 *              description: reserva no creada por error en el servidor
*/
/**

 /**
 * @swagger
 * /api/reserva/{id}:
 *  put:
 *      summary: Edita una reserva pasándole el ID como parámetro
 *      tags: [reserva]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/reserva'
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/reserva'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */
 /**
 * @swagger
 * /api/reserva/{id}:
 *  delete:
 *      summary: Elimina las reserva pasándole el ID como parámetro
 *      tags: [reserva]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones 
 *      responses:
 *          200:
 *              description: reserva eliminada
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/SEND_CHECKIN:
 *  post:
 *      summary: Crea una nueva reserva
 *      tags: [reserva]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/reserva'
 *      responses:
 *          200:
 *              description: reserva creada
 *          400:
 *              description: reserva no creada por error en el envío de datos
 *          500:
 *              description: reserva no creada por error en el servidor
*/
/**
 * @swagger
 * /api/SEND_CheckOut:
 *  post:
 *      summary: Correo de CheckOut
 *      tags: [correo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/correo'
 *      responses:
 *          200:
 *              description: correo enviado de manera exitosa
 *          400:
 *              description: error en el envío de datos
 */
/**
 * @swagger
 * /api/SEND_CHECKIN:
 *  post:
 *      summary: Correo de Checkin
 *      tags: [correo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/correo'
 *      responses:
 *          200:
 *              description: correo enviado de manera exitosa
 *          400:
 *              description: error en el envío de datos
*/
/**
 * @swagger
 * /api/validar:
 *  post:
 *      summary: Validar correo de usuarios no registrados al momento de realizar la reserva  
 *      tags: [correo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/correo'
 *      responses:
 *          200:
 *              description: correo enviado de manera exitosa
 *          400:
 *              description: error en el envío de datos
*/
/**
 * @swagger
 * /api/registro:
 *  post:
 *      summary: Correo de registro
 *      tags: [correo]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/correo'
 *      responses:
 *          200:
 *              description: correo enviado de manera exitosa
 *          400:
 *              description: error en el envío de datos
*/
 /**
 * @swagger
 * /api/planes:
 * get:
 *      summary: Trae todas los planes turisticos
 *      tags: [Planes turisticos]
 *      responses:
 *          200:
 *              description: Lista de todos los planes turisticos
 *              content:
 *                  application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/planesTuristicos'
 * 
 */
/**
 * @swagger
 * /api/planes/{id}:
 *  get:
 *      summary: Consulta los planes turisticos por el ID
 *      tags: [planes turisticos]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los planes turisticos
 *      responses:
 *          200:
 *              description: Se consultó el plan turistico con ID
 *          500:
 *              description: Error en el servidor
 * 
 */
/**
 * @swagger
 * /api/planes:
 *  post:
 *      summary: Crea un nuevo plan turistico
 *      tags: [planes turisticos]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      destino:
 *                          type: string
 *                          description: destino del plan turistico
 *                      descripcion:
 *                          type: string
 *                          description: descripcion del plan turistico
 *                      incluye:
 *                          type: string
 *                          description: lo que incluye el plan turistico
 *                      valor:
 *                          type: number
 *                          description: valor del plan turistico      
 *      responses:
 *          200:
 *              description: Plan turistico creado
 *          400:
 *              description: Plan turistico no creado por error en el envío de datos
 *          500:
 *              description: Plan turistico no creado por error en el servidor
*/
/**
 * @swagger
 * /api/planes/{id}:
 *  put:
 *      summary: Edita un plan turistico pasándole el ID como parámetro
 *      tags: [planes turisticos]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los planes turisticos 
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      destino:
 *                          type: string
 *                          description: destino del plan turistico
 *                      descripcion:
 *                          type: string
 *                          description: descripcion del plan turistico
 *                      incluye:
 *                          type: string
 *                          description: lo que incluye el plan turistico
 *                      valor:
 *                          type: number
 *                          description: valor del plan turistico
 *      responses:
 *          200:
 *              description: Se editó el plan turistico de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/planesTuristicos'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/planes/{id}:
 *  delete:
 *      summary: Elimina un plan turistico pasándole el ID como parámetro
 *      tags: [planes turisticos]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los planes turisticos
 *      responses:
 *          200:
 *              description: Se eliminó el plan turistico de manera correcta
 *          400:
 *              description: plan turistico no eliminado por error en el envio de datos
 */
/**
 * @swagger
 * /api/restaurantes:
 * get:
 *      summary: Trae todas los restaurantes
 *      tags: [restaurantes]
 *      responses:
 *          200:
 *              description: Lista de todos los restaurantes
 *              content:
 *                  application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/restaurantes'
 * 
 */
/**
 * @swagger
 * /api/restaurantes/{id}:
 *  get:
 *      summary: Consulta el restaurante por el ID
 *      tags: [restaurantes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los restaurantes
 *      responses:
 *          200:
 *              description: Se consultó el restaurante con ID
 *          500:
 *              description: Error en el servidor
 * 
 */
/**
 * @swagger
 * /api/restaurantes:
 *  post:
 *      summary: Crea un nuevo restaurante
 *      tags: [restaurantes]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      nombre:
 *                          type: string
 *                          description: nombre del restaurante
 *                      direccion:
 *                          type: string
 *                          description: direccion del restaurante
 *                      barrio:
 *                          type: string
 *                          description: barrio del restaurante
 *                      telefono:
 *                          type: number
 *                          description: telefono del restaurante
 *                      descripcion:
 *                          type: string
 *                          description: descripcion del restaurante
 *                      tipo de comida:
 *                          type: string
 *                          description: tipo de comida del restaurante
 *                      rango de precios:
 *                          type: string
 *                          description: rango de precios del restaurante     
 *      responses:
 *          200:
 *              description: Restaurante creado
 *          400:
 *              description: Restaurante no creado por error en el envío de datos
 *          500:
 *              description: Restaurante no creado por error en el servidor
*/
/**
 * @swagger
 * /api/restaurantes/{id}:
 *  put:
 *      summary: Edita un restaurante pasándole el ID como parámetro
 *      tags: [restaurantes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los restaurantes
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      nombre:
 *                          type: string
 *                          description: nombre del restaurante
 *                      direccion:
 *                          type: string
 *                          description: direccion del restaurante
 *                      barrio:
 *                          type: string
 *                          description: barrio del restaurante
 *                      telefono:
 *                          type: number
 *                          description: telefono del restaurante
 *                      descripcion:
 *                          type: string
 *                          description: descripcion del restaurante
 *                      tipo de comida:
 *                          type: string
 *                          description: tipo de comida del restaurante
 *                      rango de precios:
 *                          type: string
 *                          description: rango de precios del restaurante
 *      responses:
 *          200:
 *              description: Se editó el restaurante de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/restaurantes'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/restaurantes/{id}:
 *  delete:
 *      summary: Elimina un restaurante pasándole el ID como parámetro
 *      tags: [restaurantes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los restaurantes
 *      responses:
 *          200:
 *              description: Se eliminó el restaurante de manera correcta
 *          400:
 *              description: Restaurante no eliminado por error en el envio de datos
 */
/**
 * @swagger
 * /api/transportes:
 * get:
 *      summary: Trae todas los transportes
 *      tags: [transportes]
 *      responses:
 *          200:
 *              description: Lista de todos los transportes
 *              content:
 *                  application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/transportes'
 * 
 */
/**
 * @swagger
 * /api/transportes/{id}:
 *  get:
 *      summary: Consulta el transporte por el ID
 *      tags: [transportes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los transportes
 *      responses:
 *          200:
 *              description: Se consultó el transporte con ID
 *          500:
 *              description: Error en el servidor
 * 
 */
/**
 * @swagger
 * /api/transportes:
 *  post:
 *      summary: Crea un nuevo transporte
 *      tags: [transportes]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      nombre:
 *                          type: string
 *                          description: nombre del transporte
 *                      tipo:
 *                          type: string
 *                          description: tipo de transporte
 *                      contacto:
 *                          type: string
 *                          description: contacto del transporte     
 *      responses:
 *          200:
 *              description: Transporte creado
 *          400:
 *              description: Transporte no creado por error en el envío de datos
 *          500:
 *              description: Transporte no creado por error en el servidor
*/
/**
 * @swagger
 * /api/transportes/{id}:
 *  put:
 *      summary: Edita un transporte pasándole el ID como parámetro
 *      tags: [transportes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los transportes
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      nombre:
 *                          type: string
 *                          description: nombre del transporte
 *                      tipo:
 *                          type: string
 *                          description: tipo de transporte
 *                      contacto:
 *                          type: string
 *                          description: contacto del transporte
 *      responses:
 *          200:
 *              description: Se editó el transporte de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/transportes'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/transportes/{id}:
 *  delete:
 *      summary: Elimina un transporte pasándole el ID como parámetro
 *      tags: [transportes]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los transportes
 *      responses:
 *          200:
 *              description: Se eliminó el transporte de manera correcta
 *          400:
 *              description: El transporte no eliminado por error en el envio de datos
 */
=======
/**
 * @swagger
 * components:
 *  schemas:
 *      room:
 *          type: object
 *          properties:
 *              tipo:
 *                  type: string
 *                  description: tipo de habitacion 
 *              descripcion:
 *                  type: string
 *                  description: descripcion de la habitacion del hostal
 *              foto:
 *                  type: string
 *                  description: fotos de las habitaciones 
 *              estado: 
 *                  type: number
 *                  description: estado de la habitacion (1=disponible,2=ocupado,3=reservado sin paga,4= reservadas pagadas 5 =limpieza, 6=no molestar)
 *              capacidad:
 *                  type: string
 *                  description: caracteristicas de la cantidad de personas 
 *              servicios:
 *                  type: string
 *                  description: servicios prestado en la habitacion
 *              id_hostal:
 *                  type: string
 *                  description: relacion del usuario con el hotal  
 *          required: 
 *                  - nombre:
 *                  - ciudad:
 *                  - sede:
 *                  - descripcion:
 *                  - foto:
 *                  - coordenadas:
 *                  - direccion:
 *      users:
 *          type: object
 *          properties:
 *              nombre: 
 *                  type: string
 *                  description: nombre del usuario
 *              apellido:
 *                  type: string
 *                  description: apellido del usuario
 *              email:
 *                  type: string
 *                  description: correo del usuario 
 *              contrasena: 
 *                  type: string 
 *                  description: contraseña de usuario
 *              celular: 
 *                  type: number
 *                  description: numero de celular de usuario 
 *              tipo_documento:
 *                  type: string
 *                  description: describe el tipo de documento del usuario
 *              numero_documento:
 *                  type: string
 *                  description: numero de documento del usuario
 *              nacionalidad:
 *                  type: string
 *                  description: campo que describe la nacionalidad del usuario
 *              rol: 
 *                  type: string
 *                  description: rol del usuario 
 *              id_hostal:
 *                  type: number
 *                  description: relacion del usuario con el hotal
 *          required: 
 *                  - nombre:
 *                  - apellido:
 *                  - email:
 *                  - contrasena:
 *                  - celular:
 *                  - tipo_documento:
 *                  - numero_documento:
 *                  - nacionalida:
 *                  - rol:
 *                  - id_hostal: 
 *      hostal:
 *          type: object
 *          properties: 
 *              nombre:
 *                  type: string
 *                  description: nombre de hostal
 *              ciudad:
 *                  type: string
 *                  description: ciudad en la cual se encuentra hubicado el hostal
 *              sede:
 *                  type: string
 *                  description: sede del hostal
 *              descripcion:
 *                  type: string
 *                  description: describe la caracteristicas particulares del hostal
 *              direccion:
 *                  type: string
 *                  description: direccion de la sede
 *              foto:
 *                  type: string
 *                  description: url de la imagen 
 *              coordenadas:
 *                  type: string
 *                  description: cordenadas en eje x y del hostal
 *          required: 
 *                  - nombre:
 *                  - ciudad:
 *                  - sede:
 *                  - descripcion:
 *                  - foto:
 *                  - coordenadas:
 *                  - direccion: 
 * @swagger
 * /api/hostal:
 *  get:
 *      summary: Trae todas los hostal
 *      tags: [hostal]
 *      responses:
 *          200:
 *              description: Lista de todos los hostal
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/hostal'
 *
 */

/**
 * @swagger
 * /api/hostal/{id}:
 *  get:
 *      summary: Consulta las hostales por su id 
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los hostales
 *      responses:
 *          200:
 *              description: Se consultó hostales por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/hostal:
 *  post:
 *      summary: Crea un nuevo hostal
 *      tags: [hostal]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                          nombre:
 *                              type: string
 *                              description: nombre de hostal
 *                          ciudad:
 *                              type: string
 *                              description: ciudad en la cual se encuentra hubicado el hostal
 *                          sede:
 *                              type: string
 *                              description: sede del hostal
 *                          descripcion:
 *                              type: string
 *                              description: describe la caracteristicas particulares del hostal
 *                          direccion:
 *                              type: string
 *                              description: direccion de la sede    
 *                          foto:
 *                              type: string
 *                              format: binary
 *                          coordenadas:
 *                              type: string
 *                              description: cordenadas en eje x y del hostal       
 *      responses:
 *          200:
 *              description: Hostal creada
 *          400:
 *              description: Hostal no creada por error en el envío de datos
 *          500:
 *              description: Hostal no creada por error en el servidor
*/
/**
 * @swagger
 * /api/hostal/{id}:
 *  delete:
 *      summary: Elimina los hostal pasándole el ID como parámetro
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la hostal 
 *      responses:
 *          200:
 *              description: hostal eliminada
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/hostal/{id}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                          nombre:
 *                              type: string
 *                              description: nombre de hostal
 *                          ciudad:
 *                              type: string
 *                              description: ciudad en la cual se encuentra hubicado el hostal
 *                          sede:
 *                              type: string
 *                              description: sede del hostal
 *                          descripcion:
 *                              type: string
 *                              description: describe la caracteristicas particulares del hostal
 *                          direccion:
 *                              type: string
 *                              description: direccion de la sede 
 *                          foto:
 *                              type: string
 *                              format: binary
 *                          coordenadas:
 *                              type: string
 *                              description: cordenadas en eje x y del hostal      
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/hostal'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */
/** 
 * @swagger
 * /api/users:
 *  get:
 *      summary: Trae todas los usuarios
 *      tags: [users]
 *      responses:
 *          200:
 *              description: Lista de todos los usuarios
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/users'
 */
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Consulta los usuarios por su id 
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      responses:
 *          200:
 *              description: Se consultó usuarios por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Crea un nuevo usuarios
 *      tags: [users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: usuario creado
 *          400:
 *              description: usuario no creada por error en el envío de datos
 *          500:
 *              description: Hostal no creada por error en el servidor
*/
/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Elimina los usuarios pasándole el ID como parámetro
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la usuarios 
 *      responses:
 *          200:
 *              description: usuarios eliminada
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/users'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */
/** 
 * @swagger
 * /api/room:
 *  get:
 *      summary: Trae todas los usuarios
 *      tags: [room]
 *      responses:
 *          200:
 *              description: Lista de todas las habitaciones
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/room'
 */
/**
 * @swagger
 * /api/room/{id}:
 *  get:
 *      summary: Consulta las hostales por su id 
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones
 *      responses:
 *          200:
 *              description: Se consultó habitaciones por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/roomestado/{estado}:
 *  get:
 *      summary: Consulta las habitaciones y su realcion con el hostal sugun su estado. 
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: estado
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador segun el estado de la habitaciom
 *      responses:
 *          200:
 *              description: Se consultó habitacion segun su estado
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/room:
 *  post:
 *      summary: Crea una nueva habitaciones
 *      tags: [room]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      tipo:
 *                          type: string
 *                          description: tipo de habitacion 
 *                      descripcion:
 *                          type: string
 *                          description: descripcion de la habitacion del hostal
 *                      foto:
 *                          type: string
 *                          format: binary
 *                          description: fotos de las habitaciones 
 *                      estado: 
 *                          type: string
 *                          description: estado de la habitacion
 *                      capacidad:
 *                          type: string
 *                          description: caracteristicas de la cantidad de personas 
 *                      servicios:
 *                          type: string
 *                          description: servicios prestado en la habitacion
 *                      id_hostal:
 *                          type: string
 *                          description: relacion del usuario con el hotal  
 *      responses:
 *          200:
 *              description: habitacion creada
 *          400:
 *              description: habitaciones no creada por error en el envío de datos
 *          500:
 *              description: habitacion no creada por error en el servidor
*/
/**
 * @swagger
 * /api/room/{id}:
 *  delete:
 *      summary: Elimina las habitaciones pasándole el ID como parámetro
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones 
 *      responses:
 *          200:
 *              description: habitaciones eliminada
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/room/{id}:
 *  put:
 *      summary: Edita una habitaciones pasándole el ID como parámetro
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones 
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      tipo:
 *                          type: string
 *                          description: tipo de habitacion 
 *                      descripcion:
 *                          type: string
 *                          description: descripcion de la habitacion del hostal
 *                      foto:
 *                          type: string
 *                          format: binary
 *                          description: fotos de las habitaciones 
 *                      estado: 
 *                          type: string
 *                          description: estado de la habitacion
 *                      capacidad:
 *                          type: string
 *                          description: caracteristicas de la cantidad de personas 
 *                      servicios:
 *                          type: string
 *                          description: servicios prestado en la habitacion
 *                      id_hostal:
 *                          type: string
 *                          description: relacion del usuario con el hotal  
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/room'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *
 */




>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
