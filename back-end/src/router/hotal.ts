import express, { Request, Response, Router } from 'express';
import { pool } from '../sql/config';
import { uploadFile } from '../utilities/configMulter'
export const hostalRouter = express.Router()
import{GOOGLE_CLOUD_BUCKET} from'../utilities/configcloud'
import {uploadFileGoogle}from'../utilities/configcloud'
///////////////////Rutas:
hostalRouter.use(express.json())

/////consultas por metodo GET
hostalRouter.get('/hostal', async(req,res)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM hostal')
        res.json(result.rows)
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

hostalRouter.get('/hostal/:id', async(req,res)=>{
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

hostalRouter.post('/hostal',uploadFile,async(req,res)=> { 
    const originalname=req.file.originalname;
    const foto=`${GOOGLE_CLOUD_BUCKET}/${originalname}`
    const{nombre,ciudad,sede,descripcion,direccion,coordenadas}=req.body
    try{
        const cliente= await pool.connect()
        const response=await cliente.query(`INSERT INTO hostal(nombre,ciudad,sede,descripcion,direccion,foto,coordenadas)VALUES ($1,$2,$3,$4,$5,$6,$7)RETURNING id`,
        [  nombre,
            ciudad,
            sede,
            descripcion,
            direccion,
            foto,
            coordenadas])
            if (response.rowCount > 0) {res.send ('Se crea hotal correctamente')
            uploadFileGoogle(originalname).catch(console.error);
              }
           else{  res.json({ message: 'No se pudo crear el hotal' })}
            }catch(err){console.log(err)
            res.status(500).json({ error: 'Internal error server' })}
})
         hostalRouter.put('/hostal/:id',uploadFile,async(req,res)=>{
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
                coordenadas
            }=req.body
            try{
                const result=await cliente.query(`UPDATE hostal SET nombre = $1, ciudad=$2,sede = $3,descripcion =$4,direccion=$5,foto=$6,coordenadas=$7 WHERE id =$8`,
                    [  nombre,
                       ciudad,
                       sede,
                       descripcion,
                       direccion,
                       foto,
                       coordenadas,
                       id ]
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
            hostalRouter.delete('/hostal/:id', async (req, res) => {
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
