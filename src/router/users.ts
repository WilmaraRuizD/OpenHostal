import express, { Request, Response, Router } from 'express'
import { pool } from '../sql/config';
export const usersRouter = express.Router()

usersRouter.use(express.json())


usersRouter.get('/',(req,res)=>{
    res.send('Hello world')
})

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

usersRouter.post('/users',async(req,res)=>{
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
            id_hotales
        }=req.body
       
        const cliente=await pool.connect()
        const response=await cliente.query( `INSERT INTO users(nombre,apellido,email,contrasena,celular,tipo_documento,"numero_documento",nacionalidad,rol,id_hotales)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)RETURNING id`,
            [  nombre,
                apellido,
                email,
                contrasena,
                celular ,
                tipo_documento,
                numero_documento,
                nacionalidad,
                rol,
                id_hotales]
        )
        if (response.rowCount > 0) {res.send ('Se crea hotal correctamente')
            }
            else{  res.json({ message: 'No se pudo crear el hotal' })}
            }catch(err){console.log(err)
                res.status(500).json({ error: 'Internal error server' })
            }
         } )

         usersRouter.put('/users/:id',async(req,res)=>{
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
                id_hotales
            }=req.body
            try{
                const result=await cliente.query(`UPDATE users SET nombre = $1, apellido=$2,email = $3,contrasena =$4,celular =$5, tipo_documento=$6,numero_documento=$7,nacionalidad=$8,rol=$9, id_hotales=$10 WHERE id =$11`,
                    [  nombre,
                        apellido,
                        email,
                        contrasena,
                        celular,
                        tipo_documento,
                        numero_documento,
                        nacionalidad,
                        rol,
                        id_hotales,
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


            
