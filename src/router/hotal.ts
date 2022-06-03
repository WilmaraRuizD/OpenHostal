import express, { Request, Response, Router } from 'express'
import { pool } from '../sql/config';
import { uploadFile } from '../utilities/configMulter'
import fs from "fs"
import { ids } from 'webpack';
export const hostalRouter = express.Router()

// const uploadFileGoogle= require('../storage');

const GOOGLE_CLOUD_PROJECT='trusty-coder-350212';
//nombre de bucket
const GOOGLE_CLOUD_BUCKET='semilleroshapi_350212';

//clear el cliente de cloud storage
const {Storage}=require('@google-cloud/storage');
const storage = new Storage({
    projertId : GOOGLE_CLOUD_PROJECT,
    keyFilename:'./router/key.json'
});
// //subi una imagen a mi bucket en GCP
const uploadFileGoogle=async(originalname)=>{
  const res=await storage.bucket(GOOGLE_CLOUD_BUCKET).upload(`backend/public/uploads/${originalname}`,{
           destination:`${originalname} `
          })
          console.log(`${originalname} uploaded to ${GOOGLE_CLOUD_BUCKET}`);
          try {
             fs.unlinkSync(`backend/public/uploads/${originalname}`)
            console.log('File removed')
           } catch(err) {
            console.error('Something wrong happened removing the file', err)
           }
}
///////////////////Rutas:
hostalRouter.use(express.json())

/////consultas por metodo GET
hostalRouter.get('/hostal', async(req,res)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM hotales')
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
 
        let result =await cliente.query(`SELECT * FROM hotales WHERE id = $1`,
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


hostalRouter.post('/hostal',async(req,res)=>{
    const result= await uploadFile(req,res, err =>{
        if(err){
            console.log(err)
            err.message='Error al cargar el archivo'
            res.send(err)
        }
        else if (req.file) {  console.log('se cargo la imagen')}

    const originalname=req.file.originalname;
    const foto=`${GOOGLE_CLOUD_BUCKET}/${originalname}`
    console.log(foto)
    return {foto,originalname}
})

const{nombre,ciudad,sede,descripcion,direccion,coordenadas}=req.body
try{
        const cliente=await pool.connect()
        const response=await cliente.query(
        `INSERT INTO hotales(nombre,ciudad,sede,descripcion,direccion,foto,coordenadas)VALUES ($1,$2,$3,$4,$5,$6,$7)RETURNING id`,
         [  nombre,
            ciudad,
            sede,
            descripcion,
            direccion,
            //foto,
            coordenadas])
            if (response.rowCount > 0) {res.send ('Se crea hotal correctamente')
            
           // uploadFileGoogle(originalname).catch(console.error);         
        
        }
           else{  res.json({ message: 'No se pudo crear el hotal' })}
           
}catch(err){console.log(err)
               res.status(500).json({ error: 'Internal error server' })}
  
        })


         hostalRouter.put('/hostal/:id',async(req,res)=>{
            let cliente=await pool.connect()
            const{ id }=req.params
            const{
                nombre,
                ciudad,
                sede,
                descripcion,
                direccion,
                foto,
                coordenadas
            }=req.body
            try{
                const result=await cliente.query(`UPDATE hotales SET nombre = $1, ciudad=$2,sede = $3,descripcion =$4,direccion=$5,foto=$6,coordenadas=$7 WHERE id =$8`,
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
                    const result=await cliente.query(`DELETE FROM hotales WHERE id = $1`,[id])
                    if(result.rowCount>0){res.send('Se eliminado hotal de manera exitosa')
                }else{
                    res.status(409).json({ message: 'Error en dato enviado' })
                }
            } catch(err){
                res.status(500).json({ error: 'Error server' })
            }
        })
