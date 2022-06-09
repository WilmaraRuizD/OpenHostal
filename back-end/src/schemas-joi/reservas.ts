import Joi from 'joi';

const reservaShema = Joi.object({
    checkin: Joi.date().required(),
    checkout: Joi.date().required(),
    huespedes: Joi.number().required(),
    habitacion: Joi.number().required(),
    valorTotal: Joi.number().required(),
    body: Joi.string().required()
})

export default reservaShema;
