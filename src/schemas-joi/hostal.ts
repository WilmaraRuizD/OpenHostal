import Joi, { number, required, string } from "joi";

export const  hostalSchema=Joi.object({
    nombre:Joi.string().min(1).max(25).required(),
    cuidad:Joi.string().min(1).max(45).required(),
    sede:Joi.string().min(1).max(45),
    descripcion:Joi.string().min(1).max(200).required(),
    foto:Joi.string().min(1).max(50).required(),
    coordenadas:Joi.string().min(1).max(100).required(),

});

export const usersSchema=Joi.object({
    nombre:Joi.string().min(1).max(50).required(),
    apellido:Joi.string().min(1).max(50).required(),
    email:Joi.string().min(1).max(50).required(),
    contrasena:Joi.string().min(1).max(30).required(),
    celular:Joi.string().min(6).max(30).required(),
    tipo_documento:Joi.string().min(1).max(16).required(),
    numero_documento:Joi.number().min(1).max(20).required(),
    nacionalidad:Joi.string().min(1).max(15).required(),
    rol:Joi.string(),
    id_hotales:Joi.number().required()
})

export const roomSchema=Joi.object({
    tipo:Joi.string().min(1).max(30),
    descripcion:string().min(1).max(100).required(),
    foto:string().min(1).max(50),
    estado:string().min(1).max(30),
    capacidad:number().required(),
    servicios:string().min(1).max(30),
    id_hotales:number().required()
})