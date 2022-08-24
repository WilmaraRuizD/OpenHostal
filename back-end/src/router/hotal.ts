import express, { Request, Response, Router } from 'express';
import { pool } from '../sql/config';
import { uploadFile } from '../utilities/configMulter'
export const hostalRouter = express.Router()
import{GOOGLE_CLOUD_BUCKET} from'../utilities/configcloud'
import {uploadFileGoogle}from'../utilities/configcloud'
import { createValidator } from "express-joi-validation";
import { decodeToken} from'../firebase/token'
const validator=createValidator({});

import { hostalSchema }  from"../schemas-joi/hostal"
import { any } from 'joi';
///////////////////Rutas:
hostalRouter.use(express.json())

///////////////////////administradores 
hostalRouter.get('/prueba/:email',async (req, res) => {
    let cliente = await pool.connect()
    const { email } = req.params 
    try{
        let result =await cliente.query('SELECT email , rol FROM users WHERE email=$1 GROUP BY email,rol',[email])
        if (result.rows.length > 0) {res.send('Hello world')}
        else{res.send('no exite ')}
    }catch(error){res.status(500).json({ error: 'Internal error server' })
    }
})

hostalRouter.get('/hostal', async(req:Request,res:Response)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM hostal')
        res.json(result.rows)
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

hostalRouter.get('/hostal/:id',async(req:Request,res:Response)=>{
    let cliente = await pool.connect()
    const { id } = req.params   
    try{
      let result =await cliente.query(`SELECT * FROM hostal WHERE id = $1`,
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

hostalRouter.post('/hostal',decodeToken,uploadFile,async(req:Request,res:Response)=> { 
    if(!req.file){ return res.send(  'El campo foto no puede ser null' )}
    const originalname=req.file.originalname;
    const foto=`${GOOGLE_CLOUD_BUCKET}/${originalname}`
    const{nombre,ciudad,sede,descripcion,direccion,geometry1,geometry2}=req.body
    try{
        const cliente= await pool.connect()
        const response=await cliente.query(`INSERT INTO hostal(nombre,ciudad,sede,descripcion,direccion,foto,geometry1,geometry2)VALUES ($1,$2,$3,$4,$5,$6,$7,$8)RETURNING id`,
        [  nombre,
            ciudad,
            sede,
            descripcion,
            direccion,
            foto,
            geometry1,
            geometry2])
            if (response.rowCount > 0) {res.send ('Se crea hotal correctamente')
            uploadFileGoogle(originalname).catch(console.error);
              }
           else{  res.json({ message: 'No se pudo crear el hotal' })}
            }catch(err){console.log(err)
            res.status(500).json({ error: 'Internal error server' })
            }
        }
)

         hostalRouter.put('/hostal/:id',uploadFile,decodeToken,async(req:Request,res:Response)=>{
            if(!req.file){ return res.status(452).json({ error: 'el campo foto no puede ser null' })}
            const originalname=req.file.originalname;
            const foto=`${GOOGLE_CLOUD_BUCKET}/${originalname}`
            let cliente=await pool.connect()
            const{ id }=req.params
            const{
                nombre,
                ciudad,
                sede,
                descripcion,
                direccion,
                geometry1,
                geometry2
            }=req.body
            try{
                const result=await cliente.query(`UPDATE hostal SET nombre = $1, ciudad=$2,sede = $3,descripcion =$4,direccion=$5,foto=$6,geometry1=$7,geometry2=$8 WHERE id =$9`,
                    [  nombre,
                       ciudad,
                       sede,
                       descripcion,
                       direccion,
                       foto,
                       geometry1,
                       geometry2,
                       id ]
                    ) 
                    if (result.rowCount > 0) {
                        uploadFileGoogle(originalname).catch(console.error);
                        res.json({ message: 'Actualización realizada correctamente' })
                      } else { res.status(503)
                        .json({ message: 'Ocurrio un envento inesperado, intente de nuevo' })}
                    }
                catch (err) {
                    console.log({ err })
                    res.status(500).json({ error: 'Internal error server' })
                }
            })
            hostalRouter.delete('/hostal/:id',decodeToken, async (req:Request, res:Response) => {
                let cliente = await pool.connect()
                const { id } = req.params
                try{
                    const result=await cliente.query(`DELETE FROM hostal WHERE id = $1`,[id])
                    if(result.rowCount>0){res.send('Se eliminado hostal de manera exitosa')
                }else{
                    res.status(409).json({ message: 'Error en dato enviado' })
                }
            } catch(err){
                res.status(500).json({ error: 'Error server' })
            }
        })

