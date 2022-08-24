<<<<<<< HEAD
import express, { Request, Response, Router } from 'express'
import { pool } from '../sql/config';
export const usersRouter = express.Router();
import { createValidator } from "express-joi-validation";
import { usersSchema }  from"../schemas-joi/hostal"
import { decodeToken} from'../firebase/token'

const validator=createValidator({});

usersRouter.use(express.json())

usersRouter.get('/users',async(req,res)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM users')
        res.json(result.rows)
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

usersRouter.get('/users/:id', async(req,res)=>{
    let cliente = await pool.connect()
    const { id } = req.params  
    try{
        let result =await cliente.query(`SELECT * FROM users WHERE id = $1`,
        [id])
       if(result.rows.length>0){
        res.json(result.rows)
       }else{
           res.send('NO EXISTE HOSTAL')
       }
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})
//,validator.body(usersSchema)
usersRouter.post('/users',decodeToken,async(req,res)=>{
    try{
       
        const{
            nombre,
            apellido,
            email,
            contrasena ,
            celular,
            tipo_documento,
            numero_documento,
            nacionalidad,
            rol,
            id_hostal
        }=req.body
       
        const cliente=await pool.connect()
        const response=await cliente.query( `INSERT INTO users(nombre,apellido,email,contrasena,celular,tipo_documento,numero_documento,nacionalidad,rol,id_hostal)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)RETURNING id`,
            [  nombre,
                apellido,
                email,
                contrasena,
                celular ,
                tipo_documento,
                numero_documento,
                nacionalidad,
                rol,
                id_hostal]
        )
        if (response.rowCount > 0) {res.send ('Se crea usuario correctamente')
            }
            else{  res.json({ message: 'No se pudo crear el usuario' })}
            }catch(err){console.log(err)
                res.status(500).json({ error: 'Internal error server' })
            }
         } )

         usersRouter.put('/users/:id',decodeToken,validator.body(usersSchema),async(req,res)=>{
            let cliente=await pool.connect()
            const{ id }=req.params
            const{
                nombre,
                apellido,
                email,
                contrasena,
                celular ,
                tipo_documento,
                numero_documento,
                nacionalidad,
                rol,
                id_hostal
            }=req.body
            try{
                const result=await cliente.query(`UPDATE users SET nombre = $1, apellido=$2,email = $3,contrasena =$4,celular =$5, tipo_documento=$6,numero_documento=$7,nacionalidad=$8,rol=$9, id_hostal=$10 WHERE id =$11`,
                    [  nombre,
                        apellido,
                        email,
                        contrasena,
                        celular,
                        tipo_documento,
                        numero_documento,
                        nacionalidad,
                        rol,
                        id_hostal,
                        id]
                    ) 
                    if (result.rowCount > 0) {
                        res.json({ message: 'Actualización realizada correctamente' })
                      } else { res.status(503)
                        .json({ message: 'Ocurrio un envento inesperado, intente de nuevo' })}
                    }
                catch (err) {
                    console.log({ err })
                    res.status(500).json({ error: 'Internal error server' })
                }
            })

            usersRouter.delete('/users/:id',decodeToken, async (req, res) => {
                let cliente = await pool.connect()
                const { id } = req.params
                try{
                    const result=await cliente.query(`DELETE FROM users WHERE id = $1`,[id])
                    if(result.rowCount>0){res.send('Se eliminado usuario de manera exitosa')
                }else{
                    res.status(409).json({ message: 'Error en dato enviado' })
                }
            } catch(err){
                res.status(500).json({ error: 'Error server' })
            }
        })


=======
import express, { Request, Response, Router } from 'express'
import { pool } from '../sql/config';
export const usersRouter = express.Router();
import { createValidator } from "express-joi-validation";
import { usersSchema }  from"../schemas-joi/hostal"

const validator=createValidator({});

usersRouter.use(express.json())

usersRouter.get('/users',async(req,res)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM users')
        res.json(result.rows)
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

usersRouter.get('/users/:id', async(req,res)=>{
    let cliente = await pool.connect()
    const { id } = req.params  
    try{
        let result =await cliente.query(`SELECT * FROM users WHERE id = $1`,
        [id])
       if(result.rows.length>0){
        res.json(result.rows)
       }else{
           res.send('NO EXISTE HOSTAL')
       }
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

usersRouter.post('/users',validator.body(usersSchema),async(req,res)=>{
    try{
       
        const{
            nombre,
            apellido,
            email,
            contrasena ,
            celular,
            tipo_documento,
            numero_documento,
            nacionalidad,
            rol,
            id_hostal
        }=req.body
       
        const cliente=await pool.connect()
        const response=await cliente.query( `INSERT INTO users(nombre,apellido,email,contrasena,celular,tipo_documento,"numero_documento",nacionalidad,rol,id_hostal)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)RETURNING id`,
            [  nombre,
                apellido,
                email,
                contrasena,
                celular ,
                tipo_documento,
                numero_documento,
                nacionalidad,
                rol,
                id_hostal]
        )
        if (response.rowCount > 0) {res.send ('Se crea usuario correctamente')
            }
            else{  res.json({ message: 'No se pudo crear el usuario' })}
            }catch(err){console.log(err)
                res.status(500).json({ error: 'Internal error server' })
            }
         } )

         usersRouter.put('/users/:id',validator.body(usersSchema),async(req,res)=>{
            let cliente=await pool.connect()
            const{ id }=req.params
            const{
                nombre,
                apellido,
                email,
                contrasena,
                celular ,
                tipo_documento,
                numero_documento,
                nacionalidad,
                rol,
                id_hostal
            }=req.body
            try{
                const result=await cliente.query(`UPDATE users SET nombre = $1, apellido=$2,email = $3,contrasena =$4,celular =$5, tipo_documento=$6,numero_documento=$7,nacionalidad=$8,rol=$9, id_hostal=$10 WHERE id =$11`,
                    [  nombre,
                        apellido,
                        email,
                        contrasena,
                        celular,
                        tipo_documento,
                        numero_documento,
                        nacionalidad,
                        rol,
                        id_hostal,
                        id]
                    ) 
                    if (result.rowCount > 0) {
                        res.json({ message: 'Actualización realizada correctamente' })
                      } else { res.status(503)
                        .json({ message: 'Ocurrio un envento inesperado, intente de nuevo' })}
                    }
                catch (err) {
                    console.log({ err })
                    res.status(500).json({ error: 'Internal error server' })
                }
            })

            usersRouter.delete('/users/:id', async (req, res) => {
                let cliente = await pool.connect()
                const { id } = req.params
                try{
                    const result=await cliente.query(`DELETE FROM users WHERE id = $1`,[id])
                    if(result.rowCount>0){res.send('Se eliminado usuario de manera exitosa')
                }else{
                    res.status(409).json({ message: 'Error en dato enviado' })
                }
            } catch(err){
                res.status(500).json({ error: 'Error server' })
            }
        })


>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
