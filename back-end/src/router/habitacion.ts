<<<<<<< HEAD
import express, { Request, Response, Router } from 'express';
import { pool } from '../sql/config';
export const roomRouter = express.Router()
import { GOOGLE_CLOUD_BUCKET } from '../utilities/configcloud'
import { uploadFileGoogle } from '../utilities/configcloud'
import { uploadFile } from '../utilities/configMulter'
import { createValidator } from "express-joi-validation";
import { roomSchema } from "../schemas-joi/hostal";
import { decodeToken } from "../firebase/token";

roomRouter.use(express.json());

roomRouter.get("/room", async (req, res) => {
  let cliente = await pool.connect();
  try {
    let result = await cliente.query("SELECT * FROM room");
    res.json(result.rows);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  }
});
roomRouter.get("/room/:id", async (req, res) => {
  let cliente = await pool.connect();
  const { id } = req.params;
  try {
    let result = await cliente.query(`SELECT * FROM room WHERE id = $1`, [id]);
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.send("NO EXISTE Habitación");
    }
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  }
});
///se filtra por id de hostal
roomRouter.get("/room/hostal/:id_hostal", async (req, res) => {
  let cliente = await pool.connect();
  const { id_hostal } = req.params;
  try {
    let result = await cliente.query(`SELECT * FROM room WHERE id_hostal = $1`, [id_hostal]);
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.send("No existe hostal con ID");
    }
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  }
});

roomRouter.get("/roomestado/:estado", async (req, res) => {
  let cliente = await pool.connect();
  const { estado } = req.params;
  try {
    let result = await cliente.query(
      `SELECT * FROM hostal a INNER JOIN room b ON b.id_hostal =a.id WHERE b.estado =$1`,
      [estado]
    );
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.send("NO EXISTE Habitación");
    }
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  }
});

roomRouter.post("/room", uploadFile,decodeToken, async (req, res) => {
  if (!req.file) {
    return res.send("El campo foto no puede ser null");
  }
  const originalname = req.file.originalname;
  let foto = `${GOOGLE_CLOUD_BUCKET}/${originalname}`;
  try {
    const {
      tipo,
      descripcion,
      estado,
      capacidad,
      servicios,
      precio,
      imagenes,
      id_hostal,
    } = req.body;
    const cliente = await pool.connect();
    const response = await cliente.query(
      `INSERT INTO room(tipo,descripcion,foto,estado,capacidad,servicios,precio,imagenes,id_hostal)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)RETURNING id`,
      [
        tipo,
        descripcion,
        foto,
        estado,
        capacidad,
        servicios,
        precio,
        imagenes,
        id_hostal,
      ]
    );
    if (response.rowCount > 0) {
      res.send("Se crea habitacion correctamente");
      uploadFileGoogle(originalname).catch(console.error);
    } else {
      res.json({ message: "No se pudo crear el habitacion" });

    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal error server" });
  }
});

roomRouter.put("/room/:id",decodeToken, uploadFile, async (req, res) => {
  if (!req.file) {
    return res.send("El campo foto no puede ser null");
  }
  let cliente = await pool.connect();
  const { id } = req.params;
  const originalname = req.file.originalname;
  const foto = `${GOOGLE_CLOUD_BUCKET}/${originalname}`;
  console.log(foto);
  console.log(`dist/src/public/uploads/${originalname}`);
  const {
    tipo,
    descripcion,
    estado,
    capacidad,
    servicios,
    precio,
    imagenes,
    id_hostal,
  } = req.body;
  try {
    const result = await cliente.query(
      `UPDATE room SET tipo = $1, descripcion=$2,foto = $3,estado=$4,capacidad=$5,servicios=$6,precio=$7, imagenes=$8,id_hostal=$9 WHERE id =$10`,
      [
        tipo,
        descripcion,
        foto,
        estado,
        capacidad,
        servicios,
        precio,
        imagenes,
        id_hostal,
        id,
      ]
    );
    if (result.rowCount > 0) {
      res.json({ message: "Actualización realizada correctamente" });
    } else {
      res
        .status(503)
        .json({ message: "Ocurrio un envento inesperado, intente de nuevo" });
    }
    uploadFileGoogle(originalname).catch(console.error);
  } catch (err) {
    console.log({ err });
    res.status(500).json({ error: "Internal error server" });
  }
});

roomRouter.delete("/room/:id",decodeToken,async (req, res) => {
  let cliente = await pool.connect();
  const { id } = req.params;
  try {
    const result = await cliente.query(`DELETE FROM room WHERE id = $1`, [id]);
    if (result.rowCount > 0) {
      res.send("Se eliminado habitacion de manera exitosa");
    } else {
      res.status(409).json({ message: "Error en dato enviado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error server" });
  }
});
=======
import express, { Request, Response, Router } from 'express';
import { pool } from '../sql/config';
export const roomRouter = express.Router()
export const hostalRouter = express.Router()
import{GOOGLE_CLOUD_BUCKET} from'../utilities/configcloud'
import {uploadFileGoogle}from'../utilities/configcloud'
import { uploadFile } from '../utilities/configMulter'
import { createValidator } from "express-joi-validation";
import { roomSchema } from"../schemas-joi/hostal";
import{decodeToken}from"../firebase/token";
import { required } from 'joi';
const validator=createValidator({});

roomRouter.use(express.json())

roomRouter.get('/room',async(req,res)=>{
    let cliente = await pool.connect()
    try{
        let result =await cliente.query('SELECT * FROM room')
        res.json(result.rows)
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})
roomRouter.get('/room/:id', async(req,res)=>{
    let cliente = await pool.connect()
    const { id } = req.params
       try{
         let result =await cliente.query(`SELECT * FROM room WHERE id = $1`,
        [id])
       if(result.rows.length>0){
        res.json(result.rows)
       }else{
           res.send('NO EXISTE Habitación')
       }
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

roomRouter.get('/roomestado/:estado', async(req,res)=>{
    let cliente = await pool.connect()
    const { estado } = req.params
       try{
         let result =await cliente.query(`SELECT * FROM hostal a INNER JOIN room b ON b.id_hostal =a.id WHERE b.estado =$1`,
        [estado])
       if(result.rows.length>0){
        res.json(result.rows)
       }else{
           res.send('NO EXISTE Habitación')
       }
    } catch(err) {
        console.log({ err })
        res.status(500).json({ error: 'Internal error server' })
}
})

roomRouter.post('/room',uploadFile,async(req,res)=>{
        // uploadFile(req, res, err => {
        // if (err) {
        //   console.log(err)
        //   err.message = 'Error al cargar el archivo'
        //   res.send(err)
        // }
        // if (req.file) console.log(req.file)
        // else if (req.files) console.log(req.files)
        // res.send('Archivo cargado')    
    const originalname=req.file.originalname;
    const foto=`${GOOGLE_CLOUD_BUCKET}/${originalname}`
    try{
        const{
            tipo,
            descripcion,
            estado,
            capacidad,
            servicios,
            id_hostal
        }=req.body
        const cliente=await pool.connect()
        const response=await cliente.query(
            `INSERT INTO room(tipo,descripcion,foto,estado,capacidad,servicios,id_hostal)VALUES ($1,$2,$3,$4,$5,$6,$7)RETURNING id`,
            [  tipo,descripcion,foto,estado,capacidad,servicios,id_hostal]
        )
        if (response.rowCount > 0) {res.send ('Se crea habitacion correctamente')
        uploadFileGoogle(originalname).catch(console.error);       
    }
            else{  res.json({ message: 'No se pudo crear el habitacion' })}
            }catch(err){console.log(err)
                res.status(500).json({ error: 'Internal error server' })
            }
        // } )
         } )

         roomRouter.put('/room/:id',uploadFile,async(req,res)=>{
            let cliente=await pool.connect()
            const{ id }=req.params
            const originalname=req.file.originalname;
            const foto=`${GOOGLE_CLOUD_BUCKET}/${originalname}`
            const{ tipo,
                descripcion,
                estado,
                capacidad,
                servicios,
                id_hotales
            }=req.body
            try{
                const result=await cliente.query(`UPDATE room SET tipo = $1, descripcion=$2,foto = $3,estado=$4,capacidad=$5,servicios=$6,id_hotales=$7 WHERE id =$8`,
                    [  tipo,
                        descripcion,
                        foto,
                        estado,
                        capacidad,
                        servicios,
                        id_hotales,
                       id ]
                    ) 
                    if (result.rowCount > 0) {
                        res.json({ message: 'Actualización realizada correctamente' })
                      } else { res.status(503)
                        .json({ message: 'Ocurrio un envento inesperado, intente de nuevo' })}
                        uploadFileGoogle(originalname).catch(console.error);       
                    }
                catch (err) {
                    console.log({ err })
                    res.status(500).json({ error: 'Internal error server' })
                }
            })

            roomRouter.delete('/room/:id', async (req, res) => {
                let cliente = await pool.connect()
                const { id } = req.params
                try{
                    const result=await cliente.query(`DELETE FROM room WHERE id = $1`,[id])
                    if(result.rowCount>0){res.send('Se eliminado habitacion de manera exitosa')
                }else{
                    res.status(409).json({ message: 'Error en dato enviado' })
                }
            } catch(err){
                res.status(500).json({ error: 'Error server' })
            }
        })
>>>>>>> 39e61b5e994c40422e69a986eef44630543c365e
