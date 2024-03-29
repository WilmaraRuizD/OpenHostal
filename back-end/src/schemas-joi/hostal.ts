<<<<<<< HEAD
import Joi, { number, required, string } from "joi";

export const  hostalSchema=Joi.object({
    nombre:Joi.string().min(1).max(25).required(),
    ciudad:Joi.string().min(1).max(45).required(),
    sede:Joi.string().required(),
    descripcion:Joi.string().min(1).max(200).required(),
    direccion:Joi.string().required(),
    geometry1:Joi.number().required(),
    geometry2:Joi.number().required()

 });

 export const usersSchema=Joi.object({
    nombre:Joi.string().min(1).max(15).required(),
    apellido:Joi.string().min(1).max(50).required(),
    email:Joi.string().email().required(),
    contrasena:Joi.string().min(1).max(30).required(),
    celular:Joi.number().required(),
    tipo_documento:Joi.string().required(),
    numero_documento:Joi.number().required(),
    nacionalidad:Joi.string().min(1).max(15).required(),
    rol:Joi.boolean().required(),
    id_hotales:Joi.number().required()
})

export const roomSchema=Joi.object({
    tipo:Joi.string().min(1).max(30),
    descripcion:Joi.string().min(1).max(100).required(),
    foto:Joi.string().required(),
    estado:Joi.number().required(),
    capacidad:Joi.number().required(),
    servicios:Joi.string().min(1).max(30),
    precio:Joi.boolean().required(),
    imagenes:Joi.string(),
    id_hotales:Joi.number().required()
})

=======
import Joi, { number, required, string } from "joi";

//  const  hostalSchema=Joi.object({
//     nombre:Joi.string().min(1).max(25).required(),
//     cuidad:Joi.string().min(1).max(45).required(),
//     sede:Joi.string().min(1).max(45),
//     descripcion:Joi.string().min(1).max(200).required(),
//     direccion:Joi.string().required(),
//     foto: Joi.any().required(),
//     coordenadas:Joi.string().min(1).max(100).required(),

// });

 export const usersSchema=Joi.object({
    nombre:Joi.string().min(1).max(15).required(),
    apellido:Joi.string().min(1).max(50).required(),
    email:Joi.string().email().required(),
    contrasena:Joi.string().min(1).max(30).required(),
    celular:Joi.number().required(),
    tipo_documento:Joi.string().required(),
    numero_documento:Joi.number().required(),
    nacionalidad:Joi.string().min(1).max(15).required(),
    rol:Joi.string().required(),
    id_hotales:Joi.number().required()
})

export const roomSchema=Joi.object({
    tipo:Joi.string().min(1).max(30),
    descripcion:Joi.string().min(1).max(100).required(),
    foto:Joi.string().required(),
    estado:Joi.number().required(),
    capacidad:Joi.number().required(),
    servicios:Joi.string().min(1).max(30),
    id_hotales:Joi.number().required()
})

>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
