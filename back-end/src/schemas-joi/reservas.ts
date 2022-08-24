import Joi from 'joi';

const reservaShema = Joi.object({
<<<<<<< HEAD
    sede: Joi.string().required(),
    ciudad: Joi.string().required(),
    checkIn: Joi.string(),
    checkOut: Joi.string(),
    huespedes: Joi.number().required(),
    noches:Joi.number().required(),
    habitacion: Joi.number().required(),
    valorTotal: Joi.number().required(),

=======
    checkin: Joi.date().required(),
    checkout: Joi.date().required(),
    huespedes: Joi.number().required(),
    habitacion: Joi.number().required(),
    valorTotal: Joi.number().required(),
    body: Joi.string().required()
>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
})

export default reservaShema;
